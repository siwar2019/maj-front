import Modal from '@mui/material/Modal';
import {
  Box,
  IconButton,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from '../../styles/category';
import { Form, Formik } from 'formik';
import { useAppDispatch } from '../../hooks';
import { t } from 'i18next';
import { ChromePicker, ColorResult } from 'react-color';
import { ToastContainer } from 'react-toastify';
import { IOptions, IOptionsColor } from '../../types/settings';
import { ReactNode, useEffect } from 'react';
import { useState } from 'react';
import { createSubOption } from '../../_redux/actions/subOption';
import { IPropsAddNewColor } from '../../types/props/option';
const AddNewColor = (props: IPropsAddNewColor) => {
  const { open, close, colorId } = props;
  const [color, setColor] = useState('#000000');
  //a state to check if color has been checked
  const [choosed, setChoosed] = useState(false);
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const initialValues: IOptionsColor = {
    id: 0,
    uuid: 0,
    name: '',
    code: '',
  };
  const handleColorChange = (newColor: ColorResult) => {
    setColor(newColor.hex);
    setChoosed(true);
  };
  const validateForm = (values: IOptionsColor) => {
    const errors: { name?: string; code?: string } = {};
    if (!values.name) {
      errors.name = `${t('admin.settings.colorRequired')}`;
    }
    if (!choosed) {
      errors.code = `${t('admin.categories.codeRequired')}`;
    }
    return errors;
  };
  const editSubmitV2 = async (values: IOptionsColor) => {
    await dispatch(
      createSubOption({
        value: {
          //id: colorId,
          uuid: colorId,
          code: color,
          name: values.name,
        },
      })
    );
    setChoosed(false);
    close(); //close the modal
  };
  return (
    <Grid>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modalOpen}>
          <IconButton
            aria-label="close"
            onClick={close}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'black',
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box>
            <Typography
              id="modal-modal-title"
              className={classes.title}
              sx={{ fontWeight: '700' }}
            >
              {t('admin.settings.addColor')}
            </Typography>
            <Box>
              <Formik
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={editSubmitV2}
              >
                {({ errors, touched, handleChange, handleSubmit, values }) => (
                  <Form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      name="name"
                      placeholder="name"
                      onChange={handleChange}
                      value={values.name}
                      className={classes.editTextField}
                    />
                    {errors.name && touched.name && (
                      <Typography className={classes.error}>
                        {errors.name as ReactNode}
                      </Typography>
                    )}
                    <Grid className={classes.colorPicker}>
                      <ChromePicker
                        color={color}
                        onChange={(newColor) => {
                          handleColorChange(newColor);
                        }}
                      />
                    </Grid>
                    {errors.code && touched.code && (
                      <Typography className={classes.error}>
                        {errors.code as ReactNode}
                      </Typography>
                    )}
                    <Box className={classes.bnt}>
                      <Button
                        fullWidth
                        variant="outlined"
                        className={classes.btnCancel}
                        sx={{ fontWeight: 'bold' }}
                        onClick={close}
                      >
                        {t('admin.categories.cancel')}
                      </Button>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.btnDelete}
                        sx={{ fontWeight: 'bold' }}
                      >
                        {t('admin.categories.save')}
                      </Button>
                    </Box>
                    <ToastContainer />
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </Box>
      </Modal>
      <ToastContainer />
    </Grid>
  );
};
export default AddNewColor;

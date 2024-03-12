import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Form, Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { useStyles } from '../../styles/category';
import { ChromePicker, ColorResult } from 'react-color';
import { useState } from 'react';
import { editColor } from '../../_redux/actions/subOption';
import { ISubOptionsByOption } from '../../types/settings';
import { IPropsEditColor } from '../../types/props/option';
import { showSuccessToast } from '../../common';

const EditColor = (props: IPropsEditColor) => {
  const [color, setColor] = useState('#000000');
  const { open, close, nameSubOption, idSubOption } = props;
  const classes = useStyles();
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const colorEdited=`${t('admin.toastNotification.colorEdited')} `

  const initialValues = {
    description: '',
    name: nameSubOption,
    id: 0,
  };
  const validateForm = (values: any) => {
    const errors: { name?: string } = {};
    if (!values.name) {
      errors.name = `${t('admin.categories.nameRequired')}`;
    }
    return errors;
  };
  const handleColorChange = (newColor: ColorResult) => {
    setColor(newColor.hex);
  };
  const editSubmit = (values: ISubOptionsByOption) => {
    dispatch(
      editColor({
        value: {
          id: idSubOption,
          name: values.name,
          description: color,
        },
      })
    );
    close(); //close the modal
    showSuccessToast(colorEdited)
    
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
              {t('admin.settings.editColor')}
            </Typography>
            <Box>
              <Formik
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={editSubmit}
              >
                {({ errors, touched, handleChange, handleSubmit, values }) => (
                  <Form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      name="name"
                      placeholder="Name category "
                      onChange={handleChange}
                      value={values.name}
                      className={classes.editTextField}
                    />
                    {errors.name && touched.name && (
                      <Typography className={classes.error}>
                        {errors.name}
                      </Typography>
                    )}
                    <Grid className={classes.colorPicker}>
                      <ChromePicker
                        color={color}
                        onChange={handleColorChange}
                      />
                    </Grid>
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
    </Grid>
  );
};
export default EditColor;

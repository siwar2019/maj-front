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
import { ToastContainer } from 'react-toastify';
import { IOptions } from '../../types/settings';
import { createSubOption } from '../../_redux/actions/subOption';
import { IPropsAddNewSize } from '../../types/props/option';
const AddNewSize = (props: IPropsAddNewSize) => {
  const classes = useStyles();
  const { open, close, sizeId } = props;
  const dispatch = useAppDispatch();
  const initialValues: IOptions = {
    id: 0,
    uuid:0 ,
    name: '',
    code: '',
  };
  const validateForm = (values: IOptions) => {
    const errors: { name?: string ,code?: string } = {};
    if (!values.name) {
      errors.name = `${t('admin.categories.nameRequired')}`;
    }
    if (!values.code) {
      errors.code = `${t('admin.categories.descriptionRequired')}`;
    }
    return errors;
  };

  const editSubmitV2 = async (values: IOptions) => {
    await dispatch(
      createSubOption({
        value: {
          uuid: sizeId,
          code:values.code,
          name:values.name
        },
      })
    );
    close();
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
              {t('admin.settings.addSize')}
            </Typography>
            <Box>
              <Formik
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={editSubmitV2}
              >
                {({ errors, touched, handleChange, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      name="name"
                      placeholder="Size "
                      onChange={handleChange}
                      className={classes.editTextField}
                    />
                    {errors.name && touched.name ? (
                      <Typography className={classes.error}>
                        {errors.name}
                      </Typography>
                    ) : null}
                    <TextField
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      name="code"
                      placeholder="Description "
                      onChange={handleChange}
                      className={classes.editTextField}
                    />
     {errors.code && touched.code ? (
                      <Typography className={classes.error}>
                        {errors.code}
                      </Typography>
                    ) : null}
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
export default AddNewSize;

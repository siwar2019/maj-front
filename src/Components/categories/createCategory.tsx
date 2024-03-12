import {
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  TextField,
  Grid,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import { useStyles } from '../../styles/category';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../hooks';
import { createCategory } from '../../_redux/actions/categories';
import { Form, Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { t } from 'i18next';
import { Categories } from '../../types/categories';
import { IPropsCreateCategory } from '../../types/props/category';
const CreateCategory = (props: IPropsCreateCategory) => {
  const { open, handleClose, id, nameCategory } = props;
  const classes = useStyles();
  const dispatch = useAppDispatch();

  //formik
  const validateForm = (values: Categories) => {
    const errors: { name?: string; description?: string } = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    return errors;
  };

  const initialValues = {
    name: '',
    description: '',
    categoryId: 0,
  };
  const submitCategory = async (values: Categories, { resetForm }: any) => {
   await dispatch(
      createCategory({
        value: {
          name: values.name,
          description: values.description,
          categoryId: id,
        },
      })

    );
    resetForm(); // Reset the form
    handleClose(); //close the modal
  };
  return (
    <Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modalBox}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
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
            <Stack spacing={5}>
              <Typography
                id="modal-modal-title"
                className={classes.title}
                sx={{ fontWeight: '700' }}
              >
                {t('admin.categories.addCategory')}
              </Typography>
              <Typography
                id="modal-modal-description"
                className={classes.underCategory}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.categories.under')} {nameCategory}
              </Typography>
              <Box>
                {/* //formik */}
                <Formik
                  initialValues={initialValues}
                  validate={validateForm}
                  onSubmit={submitCategory}
                >
                  {({
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    values,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <Stack spacing={8}>
                        <TextField
                          className={classes.inputFile}
                          id="standard-basic"
                          variant="standard"
                          name="name"
                          placeholder="Name category "
                          onChange={handleChange}
                          value={values.name}
                        />

                        {errors.name && touched.name && (
                          <Typography className={classes.error}>
                            {errors.name}
                          </Typography>
                        )}
                        <TextField
                          className={classes.textField}
                          id="standard-basic"
                          variant="standard"
                          name="description"
                          placeholder="Description(Optional)"
                          onChange={handleChange}
                          value={values.description}
                        />
                      </Stack>

                      <Box className={classes.bnt}>
                        <Button
                          fullWidth
                          variant="outlined"
                          className={classes.btnCancel}
                          sx={{ fontWeight: 'bold' }}
                          onClick={handleClose}
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
                          {t('admin.categories.save')}{' '}
                        </Button>
                        <ToastContainer />

                      </Box>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Modal>
      <ToastContainer />
    </Grid>
  );
};
export default CreateCategory;

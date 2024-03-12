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
import { editSize } from '../../_redux/actions/subOption';
import { IEditSize } from '../../types/settings';
import { IPropsEditSize } from '../../types/props/option';
import { showSuccessToast } from '../../common';

const EditSize = (props: IPropsEditSize) => {
  const { open, close, nameSubOption, descriptSubOption, idSubOption } = props;
  const classes = useStyles();
  const colorEdited=`${t('admin.toastNotification.sizeEdited')} `

  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const initialValues = {
    name: nameSubOption,
    description: descriptSubOption,
    id: 0,
  };
  const validateForm = (values: any) => {
    const errors: { name?: string } = {};
    if (!values.name) {
      errors.name = `${t('admin.categories.nameRequired')}`;
    }
    return errors;
  };

  const editSubmit = (values: IEditSize) => {
    dispatch(
      editSize({
        value: {
          id: idSubOption,
          name: values.name,
          description: values.description,
        },
      })
    );
    showSuccessToast(colorEdited)

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
              {t('admin.settings.editSize')}
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
                    <TextField
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      name="description"
                      placeholder="Description "
                      onChange={handleChange}
                      value={values.description}
                      className={classes.editTextField}
                    />
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
export default EditSize;

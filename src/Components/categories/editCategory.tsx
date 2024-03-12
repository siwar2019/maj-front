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

import { editCategory } from '../../_redux/actions/categories';
import { ToastContainer } from 'react-toastify';
import { EditCategories } from '../../types/categories';
import { IPropsEditCategory } from '../../types/props/category';
const EditCategory = (props: IPropsEditCategory) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { open, close, editedCategory, nameCategory, descriptionCategory ,level,uuid,categoryId} =
    props;
  const initialValues = {
    categoryId: categoryId,
    children: [null],
    description: descriptionCategory,
    id: editedCategory,
    level: level,
    name: nameCategory,
    uuid:uuid
  };
  const validateForm = (values: EditCategories) => {
    const errors: { name?: string } = {};
    if (!values.name) {
      errors.name = `${t('admin.categories.nameRequired')}`;
    }
    return errors;
  };
  const editSubmit = async (values: EditCategories) => {
    await dispatch(
      editCategory({
        value:
        { categoryId: values.categoryId,
        children: [],
        description: values.description,
        id: values.id,
        level: values.level,
        name:values.name,
        uuid: values.uuid
        }
      })
    );
  
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
        <Box className={classes.modalBox}>
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
              {t('admin.categories.editCategory')}
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
                      placeholder="Description category "
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
export default EditCategory;

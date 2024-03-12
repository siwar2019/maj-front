import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { t } from 'i18next';
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import {
  Autocomplete,
  FormControl,
  Grid,
  IconButton,
  TextField,
} from '@mui/material';
import { useAppSelector } from '../../hooks';
import { useStyles } from '../../styles/modalProducts/editProduct';
import { Form, Formik } from 'formik';
import { ETranslateFR } from '../../utils/enums';
import * as yup from 'yup';
import { IPropsEditProduct } from '../../types/props/product';

export default function EditProduct(props: IPropsEditProduct) {
  const classes = useStyles();
  const { openEdit, handleCloseEdit, id } = props;
  const { categories } = useAppSelector((state) => state.categories);

  const SchemaBasicFormProduct = yup.object().shape({
    name: yup.string().required(ETranslateFR.REQUIRED),
    description: yup.string().required(ETranslateFR.REQUIRED),
    price: yup.string().required(ETranslateFR.REQUIRED),
    categorie: yup.array().min(1, ETranslateFR.REQUIRED),
  });
  const initialValues = {
    name: '',
    categorie: [],
    price: '',
    description: '',
  };
  const handelEdit = () => {
    console.log('data');
  };
  return (
    <Grid>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.box}>
          <IconButton
            onClick={handleCloseEdit}
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
                className={classes.delete}
                sx={{ fontWeight: '700' }}
              >
                {t('admin.products.edit')}
              </Typography>

              <Formik
                initialValues={initialValues}
                validationSchema={SchemaBasicFormProduct}
                onSubmit={handelEdit}
              >
                {(formik) => (
                  <Form onSubmit={formik.handleSubmit}>
                    <>
                      <Grid
                        container
                        rowSpacing={5}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={6}>
                          <TextField
                            className={classes.inputFile}
                            fullWidth
                            name="name"
                            inputProps={{ maxLength: '20' }}
                            id="standard-basic"
                            label={t('admin.products.Name')}
                            variant="standard"
                            onChange={formik.handleChange}
                            helperText={
                              formik.touched.name && formik.errors.name
                            }
                            error={
                              formik.touched.name && Boolean(formik.errors.name)
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl
                            variant="filled"
                            className={classes.formcontrol}
                            fullWidth
                          >
                            <Autocomplete
                              multiple
                              id="tags-standard"
                              options={categories}
                              getOptionLabel={(option) => option.name}
                              onChange={(event, newValue) => {
                                formik.setFieldValue('categorie', newValue);
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  variant="standard"
                                  label={t('admin.products.categories')}
                                  placeholder="categories"
                                  helperText={
                                    formik.touched.categorie &&
                                    formik.errors.categorie
                                  }
                                  error={
                                    formik.touched.categorie &&
                                    Boolean(formik.errors.categorie)
                                  }
                                />
                              )}
                            />
                          </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                          <TextField
                            className={classes.inputFile}
                            fullWidth
                            type="number"
                            name="price"
                            inputProps={{ min: 0 }}
                            id="standard-basic"
                            label={t('admin.products.Price')}
                            variant="standard"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            helperText={
                              formik.touched.price && formik.errors.price
                            }
                            error={
                              formik.touched.price &&
                              Boolean(formik.errors.price)
                            }
                          />
                        </Grid>

                        <Grid item xs={6}>
                          <TextField
                            className={classes.inputFile}
                            fullWidth
                            name="description"
                            id="standard-basic"
                            label={t('admin.products.Description')}
                            variant="standard"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            helperText={
                              formik.touched.description &&
                              formik.errors.description
                            }
                            error={
                              formik.touched.description &&
                              Boolean(formik.errors.description)
                            }
                          />
                        </Grid>
                      </Grid>

                      <Box className={classes.bnt}>
                        <Button
                          fullWidth
                          variant="outlined"
                          className={classes.btnCancel}
                          sx={{ fontWeight: 'bold' }}
                          onClick={handleCloseEdit}
                        >
                          {t('admin.products.cancel')}
                        </Button>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          className={classes.btnEdit}
                          sx={{ fontWeight: 'bold' }}
                        >
                          {t('admin.products.save')}
                        </Button>
                      </Box>
                    </>
                  </Form>
                )}
              </Formik>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
}

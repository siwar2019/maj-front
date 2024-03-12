/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { t } from 'i18next';
import '../../../../src/';
import {
  Autocomplete,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { useStyles } from '../../../styles/modalProducts/addproducts';
import { FieldArray, Form, Formik } from 'formik';
import * as yup from 'yup';
import { ETranslateFR } from '../../../utils/enums';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { getAllOption } from '../../../_redux/actions/option';
import { StepProducts } from '../../../_redux/reducer/products';
import { createProduct } from '../../../_redux/actions/products';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllCategories } from '../../../_redux/actions/categories';
import { IPropsAddProduct } from '../../../types/props/product';
export default function AddProducts(props: IPropsAddProduct) {
  const { open, handleClose } = props;
  const disptach = useAppDispatch();
  const classes = useStyles();
  const [deletedIds, setDeletesIds] = React.useState([]);
  const [size, setSize] = React.useState('');
  const [color, setColor] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [images, setImages] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const [listItems, setListItems] = React.useState<any>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [previewImages, setPreviewImages] = React.useState<string[]>([]);
  const { categories } = useAppSelector((state) => state.categories);
  const { option } = useAppSelector((state) => state.option);
  const products = useAppSelector((state) => state.products);
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  const SchemaBasicFormProduct = yup.object().shape({
    ref: yup.string().required(ETranslateFR.REQUIRED),
    name: yup.string().required(ETranslateFR.REQUIRED),
    description: yup.string().required(ETranslateFR.REQUIRED),
    price: yup.string().required(ETranslateFR.REQUIRED),
    categorie: yup.array().min(1, ETranslateFR.REQUIRED),
  });
  const SchemaBasicFormItem = yup.object().shape({
    image: yup.array().min(1, ETranslateFR.REQUIRED),
    color: yup.string().required(ETranslateFR.REQUIRED),
    size: yup.string().required(ETranslateFR.REQUIRED),
    quantity: yup.string().required(ETranslateFR.REQUIRED),
  });
  const defaultImage = require('../../../assets/defaultImage.png');
  const handleBack = () => {
    if (activeStep !== 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const initialValues = {
    name: '',
    categorie: [],
    price: '',
    description: '',
  };
  const initialValuesItem = {
    listItems: listItems,
    image: previewImages,
    color: '',
    size: '',
    quantity: '',
  };
  const addItem = () => {
    if (size && quantity && images) {
      const newItem = {
        size: size,
        quantity: quantity,
        images: images,
      };
      const isExistingItem = listItems.some(
        (item: { size: string }) => item.size === newItem.size
      );

      if (!isExistingItem) {
        setListItems((prevListItems: any) => [...prevListItems, newItem]);
        setSize('');
        setQuantity('');
        setImages([]);
        setErrorMessage('');
      } else {
        toast.error(t('admin.products.toast'));
      }
    } else {
      toast.error(t('admin.products.toast'));
    }
  };

  const deleteItem = (remove: any, index: number) => {
    let arrayOfIds = [...deletedIds];
    remove(index);
    setDeletesIds(arrayOfIds);
  };

  useEffect(() => {
    disptach(getAllOption());
    disptach(getAllCategories());
  }, []);

  const handleSubmitStep = (values: {
    name: string;
    categorie: never[];
    price: string;
    description: string;
  }) => {
    const newProdValue = {
      name: values.name,
      categorie: values.categorie,
      price: values.price,
      description: values.description,
    };
    disptach(StepProducts(newProdValue));
    if (activeStep < 1) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const selectPicture = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: { target: { files: any } }) => {
    const files = event.target.files;
    const fileArray = Array.from(files);

    setSelectedFiles(fileArray as File[]);
    const previewArray = fileArray.map((file) =>
      URL.createObjectURL(file as Blob)
    );
    setPreviewImages(previewArray);
    setImages(fileArray as any);
  };

  const [errorMessage, setErrorMessage] = React.useState('');

  const handelAddProducts = () => {
    const data = new FormData();
    data.append('price', products.myProducts.price + '');
    data.append('name', products.myProducts.name + '');
    data.append('description', products.myProducts.description + '');
    const categoryNames = products.myProducts.categories.map(
      (category) => category.name
    );
    data.append('categories', JSON.stringify(categoryNames));
    listItems.forEach(
      (
        item: {
          size: string;
          quantity: string;
          images: string | Blob;
        },
        index: number
      ) => {
        data.append(`listItem[${index}].size`, item.size + '');
        data.append(`listItem[${index}].quantity`, item.quantity);
        const imageUrls: Blob = listItems.map(
          (item: { images: Blob }) => item.images
        );
        data.append(`listItem[${index}].images`, imageUrls);
      }
    );
    disptach(createProduct({ value: data }));
  };

  return (
    <Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
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
          <Typography
            id="modal-modal-title"
            className={classes.title}
            sx={{ fontWeight: 'bold' }}
          >
            {t('admin.products.add')}
          </Typography>
          <Box>
            <Stepper orientation="vertical" activeStep={activeStep}>
              <Step className={classes.circleStep}>
                <StepLabel>
                  <Typography
                    className={classes.prodItem}
                    sx={{ fontWeight: 'bold' }}
                  >
                    {t('admin.products.Product')}
                  </Typography>{' '}
                </StepLabel>
                <StepContent>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={SchemaBasicFormProduct}
                    onSubmit={handleSubmitStep}
                  >
                    {(formik) => (
                      <Form onSubmit={formik.handleSubmit}>
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
                              label={t('admin.returns.Name')}
                              variant="standard"
                              onChange={formik.handleChange}
                              error={
                                formik.touched.name &&
                                Boolean(formik.errors.name)
                              }
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <FormControl
                              variant="filled"
                              className={classes.formControl}
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
                                  />
                                )}
                              />
                              {formik.errors.categorie &&
                                formik.touched.categorie && (
                                  <Typography className={classes.error}>
                                    {formik.errors.categorie}
                                  </Typography>
                                )}
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
                              label={t('admin.returns.price')}
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
                              label={t('admin.discount.description')}
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
                        <Grid item xs={12} className={classes.btnNext}>
                          <Button
                            className={classes.next}
                            type="submit"
                            variant="contained"
                          >
                            {t('admin.products.next')}
                          </Button>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                </StepContent>
              </Step>

              <Step className={classes.circleStep}>
                <StepLabel>
                  <Typography
                    className={classes.prodItem}
                    sx={{ fontWeight: 'bold' }}
                  >
                    {t('admin.products.item')}
                  </Typography>
                </StepLabel>
                <StepContent className={classes.step}>
                  <Formik
                    initialValues={initialValuesItem}
                    validationSchema={SchemaBasicFormItem}
                    onSubmit={addItem}
                  >
                    {(formik) => (
                      <Form onSubmit={formik.handleSubmit}>
                        <Grid>
                          <Grid
                            container
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            sx={{ marginBottom: '30px !important' }}
                          >
                            <Grid item xs={12} md={6}>
                              <FormControl
                                variant="filled"
                                fullWidth
                                className={classes.formControl}
                              >
                                <InputLabel id="demo-simple-select-filled-label">
                                  {t('admin.products.color')}
                                </InputLabel>
                                <Select
                                  name="color"
                                  labelId="demo-simple-select-filled-label"
                                  id="demo-simple-select-filled"
                                  className={classes.select}
                                  value={color}
                                  onChange={(event) => {
                                    formik.setFieldValue(
                                      'color',

                                      event.target.value
                                    );
                                    setColor(event.target.value);
                                  }}
                                  error={
                                    formik.touched.color &&
                                    Boolean(formik.errors.color)
                                  }
                                >
                                  {option['ListOptions'][1].SubOption.map(
                                    (option: any) => (
                                      <MenuItem
                                        key={option.id}
                                        value={option.id}
                                      >
                                        {option.name}
                                      </MenuItem>
                                    )
                                  )}
                                </Select>
                                {formik.errors.color &&
                                  formik.touched.color && (
                                    <Typography className={classes.error}>
                                      {formik.errors.color}
                                    </Typography>
                                  )}
                              </FormControl>
                            </Grid>
                          </Grid>

                          <FieldArray name="listItems">
                            {({ push, remove }) => (
                              <Grid>
                                <Grid
                                  container
                                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                  sx={{ marginBottom: '10px !important' }}
                                >
                                  <Grid item xs={6}>
                                    <FormControl
                                      variant="filled"
                                      className={classes.formControl}
                                      fullWidth
                                    >
                                      <InputLabel id="demo-simple-select-filled-label">
                                        {t('admin.products.size')}
                                      </InputLabel>
                                      <Select
                                        name="size"
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={size}
                                        onChange={(event) => {
                                          formik.setFieldValue(
                                            'size',
                                            event.target.value
                                          );
                                          setSize(event.target.value);
                                        }}
                                        className={classes.select}
                                        error={
                                          formik.touched.listItems &&
                                          Boolean(formik.errors.listItems)
                                        }
                                      >
                                        {option['getOption'][0].SubOption.map(
                                          (subOption: any) => (
                                            <MenuItem
                                              key={subOption.id}
                                              value={subOption.id}
                                            >
                                              {subOption.name}
                                            </MenuItem>
                                          )
                                        )}
                                      </Select>
                                      {formik.errors.size &&
                                        formik.touched.size && (
                                          <Typography className={classes.error}>
                                            {formik.errors.size}
                                          </Typography>
                                        )}
                                    </FormControl>
                                  </Grid>

                                  <Grid item xs={5}>
                                    <TextField
                                      className={classes.inputFile}
                                      name="quantity"
                                      fullWidth
                                      id="standard-basic"
                                      label={t('admin.returns.quantity')}
                                      variant="standard"
                                      value={quantity}
                                      onChange={(event) => {
                                        formik.setFieldValue(
                                          'quantity',
                                          event.target.value
                                        );
                                        setQuantity(event.target.value);
                                      }}
                                    />
                                    {formik.errors.quantity &&
                                      formik.touched.quantity && (
                                        <Typography className={classes.error}>
                                          {formik.errors.quantity}
                                        </Typography>
                                      )}
                                  </Grid>
                                  <ToastContainer position="top-left" />
                                  <Grid item xs={1}>
                                    <IconButton
                                      type="submit"
                                      className={classes.btnClear}
                                      onClick={addItem}
                                    >
                                      <AddCircleIcon />
                                    </IconButton>
                                  </Grid>
                                  <Grid item md={12}>
                                    {previewImages.length > 0 ? (
                                      <Carousel responsive={responsive}>
                                        {previewImages.map(
                                          (imageUrl, index) => (
                                            <Box
                                              key={index}
                                              component="img"
                                              src={imageUrl}
                                              className={classes.picture}
                                              alt={`Product image ${index + 1}`}
                                            />
                                          )
                                        )}
                                      </Carousel>
                                    ) : (
                                      <>
                                        <Box
                                          component="img"
                                          src={defaultImage}
                                          className={classes.picture}
                                          alt="Product image"
                                        />
                                      </>
                                    )}

                                    <input
                                      name="image"
                                      hidden
                                      multiple
                                      type="file"
                                      ref={fileInputRef}
                                      accept="image/*"
                                      onChange={handleImageChange}
                                    ></input>

                                    <Button
                                      variant="contained"
                                      onClick={selectPicture}
                                      className={classes.bntUpload}
                                    >
                                      <Typography
                                        sx={{ fontWeight: 'bold !important' }}
                                      >
                                        {' '}
                                        {t('admin.products.upload')}
                                      </Typography>
                                    </Button>
                                  </Grid>
                                </Grid>
                                {listItems.map(
                                  (
                                    item: {
                                      size: unknown;
                                      color: unknown;
                                      quantity: unknown;
                                      images: (string | undefined)[];
                                    },
                                    index: number
                                  ) => (
                                    <Grid
                                      container
                                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                      className={classes.gridList}
                                    >
                                      <Grid item xs={6}>
                                        <TextField
                                          name={`listItem[${index}].size`}
                                          disabled
                                          fullWidth
                                          id="standard-basic"
                                          label={t('admin.returns.size')}
                                          variant="standard"
                                          defaultValue={item.size}
                                        />
                                      </Grid>

                                      <Grid item xs={5}>
                                        <TextField
                                          name={`listItem[${index}].quantity`}
                                          disabled
                                          fullWidth
                                          id="standard-basic"
                                          label={t('admin.returns.quantity')}
                                          variant="standard"
                                          defaultValue={item.quantity}
                                        />
                                      </Grid>

                                      <Grid item xs={1}>
                                        <Button
                                          className={classes.btnClear}
                                          onClick={() => {
                                            deleteItem(remove, index);
                                          }}
                                        >
                                          <ClearIcon />
                                        </Button>
                                      </Grid>

                                      <Grid item xs={12}>
                                        <Grid key={index}>
                                          <Carousel responsive={responsive}>
                                            {item.images.map(
                                              (
                                                imageUrl: string | undefined,
                                                imgIndex: number
                                              ) => (
                                                <Box
                                                  key={imgIndex}
                                                  component="img"
                                                  src={imageUrl}
                                                  alt={`Product ${
                                                    index + 1
                                                  } Image ${imgIndex + 1}`}
                                                  className={classes.picture}
                                                />
                                              )
                                            )}
                                          </Carousel>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                  )
                                )}
                              </Grid>
                            )}
                          </FieldArray>

                          <Box className={classes.boxBtn}>
                            <Button
                              variant="outlined"
                              sx={{ fontWeight: 'bold' }}
                              onClick={handleBack}
                              className={classes.btnCancel}
                            >
                              {t('admin.products.previous')}
                            </Button>
                            <Button
                              type="submit"
                              variant="contained"
                              sx={{ fontWeight: 'bold' }}
                              className={classes.btnSave}
                              onClick={handelAddProducts}
                              disabled={formik.isSubmitting}
                            >
                              {t('admin.products.save')}
                            </Button>
                          </Box>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                </StepContent>
              </Step>
            </Stepper>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
}

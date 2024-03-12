/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { t } from 'i18next';
import '../../..';
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
import { useEffect, useState } from 'react';
import { getAllOption } from '../../../_redux/actions/option';
import { StepProducts } from '../../../_redux/reducer/products';
import { createProductV2 } from '../../../_redux/actions/products';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllCategories } from '../../../_redux/actions/categories';
import { IPropsAddProduct } from '../../../types/props/product';
export default function AddProductsV3(props: IPropsAddProduct) {
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
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  
  const initialValues = {
    name: '',
    patneruuid:'',
    tenantId:'' ,
    refExterne: '',
    retailerSellingPrice: 0,
    marque: '',
    description: '',
    files: null ,
    images: null
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
  //siwar
  const validateForm = (values: any) => {
    const errors: { name?: string } = {};
    if (!values.name) {
      errors.name = `${t('admin.categories.nameRequired')}`;
    }
    if (!values.description) {
      errors.name = `${t('admin.categories.nameRequired')}`;
    }
    return errors;
  };
  // const createProduct = async (values: any) => {
  //   // await dispatch(
  //   //   editCategory({
  //   //     value:
  //   //     { categoryId: values.categoryId,
  //   //     children: [],
  //   //     description: values.description,
  //   //     id: values.id,
  //   //     level: values.level,
  //   //     name:values.name,
  //   //     uuid: values.uuid
  //   //     }
  //   //   })
  //   // );
  //   console.log('%cAddproductsV3.tsx line:157 1111', 'color: #007acc;', 1111);
  //   //close(); //close the modal
  // };
  useEffect(() => {
    disptach(getAllOption());
    disptach(getAllCategories());
  }, []);

 
  const handleSubmitStep = (values: {
    name: string,
    refExterne: string,
    retailerSellingPrice: any,
    marque: string,
    description:string,
    patneruuid:any,
    tenantId:any,
    files:FileList | null,
    images:FileList | null
  }) => {
      const data = new FormData();
      if (values.files && values.files.length > 0) {
        const file = values.files[0];
        data.append('files', file);
        

      }    
    data.append('retailerSellingPrice',values.retailerSellingPrice  );
    data.append('patneruuid',"59418d9e-b780-46f4-a953-dcc052587b1c" );
    data.append('tenantId', "1485");
    data.append('name', values.name + '');
    data.append('refExterne', values.refExterne );
    data.append('description', values.description);
    data.append('marque', values.marque);
    //data.append('files',files[0]);
    
    data.append('images',selectedImage);
    data.append('files',selectedImage);

console.log('%cAddproductsV3.tsx line:210 values', 'color: #007acc', values,FormData);
  disptach(createProductV2({ value: data }));
  };
  const selectPicture = () => {
    fileInputRef.current?.click();
  };

  // const handleImageChange = (event: { target: { files: any } }) => {
  //   console.log('%cAddproductsV3.tsx line:227 50', 'color: #007acc;', 50);
  //   const files = event.target.files;
  //   const fileArray = Array.from(files);

  //   setSelectedFiles(fileArray as File[]);
  //   const previewArray = fileArray.map((file) =>
  //     URL.createObjectURL(file as Blob)
  //   );
  //   setPreviewImages(previewArray);
  //   setImages(fileArray as any);
  // };
  const handleImageChange2 = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [errorMessage, setErrorMessage] = React.useState('');
  //siwar correct broken image
// const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const files = e.target.files;
//   const formData = new FormData() ;
//   if (files && files.length > 0) {

//   formData.append('files', files[0]);
//   }
//   if (files && files.length > 0) {
//     const file = files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const dataUrl = reader.result as string;

//       // Update the selectedImage state if needed
//       setSelectedImage(dataUrl);

//       // Do not append the data URL to FormData
//     };

//     reader.readAsDataURL(file);
//   }
// };
const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;

  if (files && files.length > 0) {
    const file = files[0];
    setSelectedImage(file);
  }
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
            <Formik
              initialValues={initialValues}
              validate={validateForm}
              onSubmit={handleSubmitStep}
            >
              {({ errors, touched, handleChange, handleSubmit, values }) => (
                <Form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    variant="standard"
                    name="name"
                    placeholder="Name prdct "
                    onChange={handleChange}
                    value={values.name}
                    // className={classes.editTextField}
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
                  />
                  <TextField
                    fullWidth
                    id="standard-basic"
                    variant="standard"
                    name="marque"
                    placeholder="marque "
                    onChange={handleChange}
                    value={values.marque}
                  />
                  <TextField
                    className={classes.inputFile}
                    fullWidth
                    name="refExterne"
                    id="standard-basic"
                    label="referance"
                    variant="standard"
                    value={values.refExterne}
                    onChange={handleChange}
                  />
                  <TextField
                    className={classes.inputFile}
                    fullWidth
                    type="number"
                    name="retailerSellingPrice"
                    inputProps={{ min: 0 }}
                    id="standard-basic"
                    label="price"
                    variant="standard"
                    value={values.retailerSellingPrice}
                    onChange={handleChange}
                  />
                  {/* //upload image ss */}
                  <Box>
      {selectedImage && (
        <img
          src={selectedImage}
          className={classes.picture}
          alt="Product image"
        />
      )}
      <input
        name="files"
        hidden
        multiple
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleImageChange}
      />
      <Button
        variant="contained"
        onClick={selectPicture}
        className={classes.bntUpload}
      >
        <Typography sx={{ fontWeight: 'bold !important' }}>
          {' '}
          {t('admin.products.upload')}
        </Typography>
      </Button>

      <Button
        fullWidth
        variant="outlined"
        className={classes.btnCancel}
        sx={{ fontWeight: 'bold' }}
        // onClick={close}
      >
        {t('admin.categories.cancel')}
      </Button>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        // className={classes.btnDelete}
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
      </Modal>
    </Grid>
  );
}

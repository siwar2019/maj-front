/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ClearIcon from '@mui/icons-material/Clear';
import Carousel from 'react-material-ui-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as Yup from 'yup';
import { ETranslateFR } from '../../utils/enums';

import { t } from 'i18next';
import { Form, Formik } from 'formik';
import { useStyles } from '../../styles/modalProducts/addItem';
import { IPropsAddItem } from '../../types/props/product';
const AddItem = (props: IPropsAddItem) => {
  const [color, setColor] = useState('');
  const classes = useStyles();
  const { openAdd, handleCloseAdd } = props;
  const handleChangeColor = (event: SelectChangeEvent) => {
    setColor(event.target.value);
  };
  const [lines, setLines] = useState([{ size: '', quantity: '' }]);
  const handleAddLine = () => {
    setLines([...lines, { size: '', quantity: '' }]);
  };
  const handleSizeChange = (
    event: { target: { value: string } },
    index: number
  ) => {
    const updatedLines = [...lines];
    updatedLines[index].size = event.target.value;
    setLines(updatedLines);
  };

  const handleQuantityChange = (
    event: { target: { value: string } },
    index: number
  ) => {
    const updatedLines = [...lines];
    updatedLines[index].quantity = event.target.value;
    setLines(updatedLines);
  };
  const [selectedFiles, setSelectedFiles] = useState<
    { file: File; url: string }[]
  >([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      setSelectedFiles([...selectedFiles, { file, url: fileUrl }]);
    }
  };
  const handleRemoveLine = (indexToRemove: number) => {
    const updatedLines = lines.filter((_, index) => index !== indexToRemove);
    setLines(updatedLines);
  };

  const validationSchema = Yup.object().shape({
    lines: Yup.array().of(
      Yup.object().shape({
        size: Yup.string().required(ETranslateFR.REQUIRED),
        quantity: Yup.number()
          .typeError(ETranslateFR.REQUIRED)
          .min(0, ETranslateFR.REQUIRED)
          .required(ETranslateFR.REQUIRED),
      })
    ),
    color: Yup.string().required(ETranslateFR.REQUIRED),
  });
  const listSize = ['L', 'Xl', 'M', 'S'];
  const listColor = ['red', 'green', 'white', 'yellow'];
  const handleSubmitItem=() => {

  }
  const initialValues= {
    lines: lines,
    color: '',
  }
  return (
    <Grid>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.box}>
          <IconButton
            aria-label="close"
            onClick={handleCloseAdd}
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
            variant="h6"
            component="h2"
            className={classes.title}
            sx={{ fontWeight: 'bold' }}
          >
            {t('admin.products.addItem')}
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitItem}
          >
            {({handleSubmit }) => (

              <Form onSubmit={handleSubmit}>
                <Box sx={{ flexGrow: 1 }} className={classes.boxForm}>
                  {lines.map((line, index) => (
                    <Grid
                      container
                      spacing={2}
                      className={classes.grid}
                      key={index}
                    >
                      <Grid item xs={5}>
                        <FormControl
                          variant="standard"
                          className={classes.formControl}
                        >
                          <InputLabel
                            id={`size-label-${index}`}
                            className={classes.inputLabel}
                          >
                            {' '}
                            {t('admin.products.size')}
                          </InputLabel>
                          <Select
                            fullWidth
                            labelId={`size-label-${index}`}
                            value={line.size}
                            onChange={(event) => handleSizeChange(event, index)}
                            label={t('admin.products.size')}
                          >
                            {listSize.map((listSize) => (
                              <MenuItem value={listSize} key={listSize}>
                                {listSize}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          className={classes.inputFile}
                          fullWidth
                          type="number"
                          id={`quantity-${index}`}
                          label="Quantity"
                          inputProps={{ min: 0 }}
                          variant="standard"
                          value={line.quantity}
                          onChange={(event) =>
                            handleQuantityChange(event, index)
                          }
                        />
                      </Grid>
                      <Grid item xs={1}>
                        {index === 0 ? (
                          <IconButton
                            onClick={handleAddLine}
                            className={classes.Icon}
                          >
                            <AddBoxIcon />
                          </IconButton>
                        ) : (
                          <IconButton
                            onClick={() => handleRemoveLine(index)}
                            className={classes.Icon}
                          >
                            <ClearIcon />
                          </IconButton>
                        )}
                      </Grid>
                    </Grid>
                  ))}
                  <Grid container spacing={2} className={classes.grid}>
                    <Grid item md={5} xs={11}>
                      <FormControl
                        variant="standard"
                        className={classes.formControl}
                      >
                        <InputLabel
                          id="demo-simple-select-standard-label"
                          className={classes.inputLabel}
                        >
                          {t('admin.products.color')}
                        </InputLabel>
                        <Select
                          fullWidth
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={color}
                          onChange={handleChangeColor}
                          label={t('admin.products.color')}
                        >
                          {listColor.map((listColor) => (
                            <MenuItem value={listColor}>{listColor}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item md={5} xs={11}>
                      <FormControl
                        variant="standard"
                        className={classes.formImage}
                      >
                        <InputLabel
                          htmlFor="input-with-icon-adornment"
                          className={classes.uploadImg}
                        >
                          {t('admin.products.uploadImg')}
                        </InputLabel>
                        <Input
                          disabled
                          id="input-with-icon-adornment"
                          endAdornment={
                            <InputAdornment position="end">
                              <Input
                                type="file"
                                inputProps={{ accept: '.jpg,.jpeg,.png' }}
                                onChange={handleFileChange}
                                sx={{ display: 'none' }}
                                id="file-input"
                              />
                              <label htmlFor="file-input">
                                <Button
                                  variant="contained"
                                  component="span"
                                  className={classes.btnChoose}
                                  sx={{
                                    fontWeight: 'bold',
                                  }}
                                >
                                  <Typography className={classes.span}>
                                    {t('admin.edit.btnFile')}
                                  </Typography>
                                </Button>
                              </label>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={12} className={classes.gridImage}>
                      <Box mt={2} className={classes.boxGlob}>
                        <Carousel
                          sx={{ height: '100%' }}
                          animation="slide"
                          autoPlay={false}
                          indicators={false}
                          navButtonsAlwaysVisible={true}
                            //must use style in the props of carrousel instead of sx
                          navButtonsProps={{
                            style: {
                              backgroundColor: 'initial ',
                              color: '#757575',
                              marginTop: '80px',
                            },
                          }}
                        >
                          {selectedFiles.map((image, index) => (
                            <Grid key={`selected-${index}`}>
                              <img
                                src={image.url}
                                alt={`Image ${index}`}
                                className={classes.imgUpload}
                              />
                            </Grid>
                          ))}
                        </Carousel>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box className={classes.bnt}>
                  <Button
                    variant="outlined"
                    sx={{ fontWeight: 'bold' }}
                    onClick={handleCloseAdd}
                    className={classes.btncancel}
                  >
                    {t('admin.deleteProduct.cancel')}
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ fontWeight: 'bold' }}
                    className={classes.btnAdd}
                  >
                    {t('admin.products.save')}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </Grid>
  );
};

export default AddItem;

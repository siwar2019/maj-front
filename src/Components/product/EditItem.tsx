/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { t } from 'i18next';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStyles } from '../../styles/modalProducts/EditItem';
import Carousel from 'react-material-ui-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Checkbox from '@mui/material/Checkbox';

import { ChangeEvent } from 'react';
import { IPropsEditItem } from '../../types/props/product';
export const EditItem = (props: IPropsEditItem) => {
  const [selectedFiles, setSelectedFiles] = useState<
    { file: File; url: string }[]
  >([]);
  const [defaultImages, setDefaultImages] = useState<
    { file: File; url: string }[]
  >([]);
  const classes = useStyles();
  const { openEdit, handelCloseEdit } = props;
  const initialItem = {
    listItem: [
      { size: 'M', quantity: '20' },
      { size: 'L', quantity: '4' },
      { size: 'S', quantity: '2' },
      { size: 'XL', quantity: '52' },
      { size: 'XXL', quantity: '30' },
    ],
    color: 'green',
    image: [
      'https://shopa.tn/wp-content/uploads/2020/11/125154959_372082097453076_6792040444312267041_n.jpg',
    ],
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const selectedImages = Array.from(files).map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setSelectedFiles(selectedImages);
    }
  };

  const handleClearFiles = () => {
    setSelectedFiles([]);
  };

  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    url: string
  ) => {
    if (event.target.checked) {
      const defaultImage = selectedFiles.find((file) => file.url === url);
      if (defaultImage) {
        setDefaultImages([...defaultImages, defaultImage]);
      }
    } else {
      const updatedDefaultImages = defaultImages.filter(
        (file) => file.url !== url
      );
      setDefaultImages(updatedDefaultImages);
    }
  };

  return (
    <Grid>
      <Modal
        open={openEdit}
        onClose={handelCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.box}>
          <IconButton
            aria-label="close"
            onClick={handelCloseEdit}
            className={classes.close}
            sx={{
              position: 'absolute',
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            id="modal-modal-title"
            className={classes.edit}
            sx={{ fontWeight: '700' }}
          >
            {t('admin.edit.edit')}
          </Typography>

          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          ></Grid>

          <Box className={classes.boxItem}>
            {initialItem.listItem.map((listItem, index) => (
              <Grid
                key={index}
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                className={classes.gridSize}
              >
                <Grid item xs={5}>
                  <TextField
                    className={classes.textField}
                    variant="standard"
                    value={listItem.size}
                    label={t('admin.products.size')}
                    InputLabelProps={{
                      classes: {
                        root: classes.label,
                      },
                    }}
                    InputProps={{
                      classes: {
                        input: classes.inputt,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    className={classes.textField}
                    variant="standard"
                    value={listItem.quantity}
                    label={t('admin.returns.quantity')}
                    InputLabelProps={{
                      classes: {
                        root: classes.label,
                      },
                    }}
                    InputProps={{
                      classes: {
                        input: classes.inputt,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <IconButton>
                    <DeleteIcon className={classes.deleteSize} />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Box>

          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            className={classes.gridSize}
          >
            <Grid item xs={11} md={5}>
              <TextField
                className={classes.textField}
                variant="standard"
                fullWidth
                value={initialItem.color}
                label={t('admin.returns.color')}
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                  },
                }}
                InputProps={{
                  classes: {
                    input: classes.inputt,
                  },
                }}
              />
            </Grid>

            <Grid item xs={11} md={5} className={classes.gridUpload}>
              <FormControl variant="standard">
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
          </Grid>

          <Grid item xs={6} className={classes.gridImage}>
            <Box mt={2} className={classes.boxGlob}>
              <Carousel
                animation="slide"
                autoPlay={false}
                indicators={false}
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                  style: {
                    backgroundColor: 'initial ',
                    color: '#757575',
                    marginTop: '80px',
                  },
                }}
              >
                {initialItem.image
                  .concat(selectedFiles.map((image) => image.url))
                  .map((url, index) => (
                    <Grid key={index}>
                      <img
                        src={url}
                        alt={`Image ${index}`}
                        className={classes.imgUpload}
                      />
                      <Box className={classes.boxDefault}>
                        <Typography sx={{ flex: 1, textAlign: 'left' }}>
                          <Checkbox
                            defaultChecked={defaultImages.some(
                              (file) => file.url === url
                            )}
                            onChange={(event) =>
                              handleCheckboxChange(event, url)
                            }
                            size="small"
                          />
                          <Typography
                            sx={{ fontWeight: 'bold' }}
                            className={classes.default}
                          >
                            {t('admin.products.default')}
                          </Typography>
                        </Typography>

                        <IconButton
                          className={classes.deleteImg}
                          onClick={handleClearFiles}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  ))}
              </Carousel>
            </Box>
          </Grid>

          <Box className={classes.bnt}>
            <Button
              variant="outlined"
              sx={{ fontWeight: 'bold' }}
              onClick={handelCloseEdit}
              className={classes.btnCancel}
            >
              {t('admin.deleteProduct.cancel')}
            </Button>
            <Button
              variant="contained"
              sx={{ fontWeight: 'bold' }}
              className={classes.btnEdit}
            >
              {t('admin.products.save')}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
};

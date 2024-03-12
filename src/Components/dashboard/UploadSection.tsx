import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useStyles } from '../../styles/dashboard';
import UploadIcon from '@mui/icons-material/Upload';
import { t } from 'i18next';
import { ImageUploadSectionProps } from '../../types/props/dashboard';

function ImageUploadSection(props: ImageUploadSectionProps) {
  const [selectedImage, setSelectedImage] = useState('');
  const classes = useStyles();
  const { defaultImage, onImageSelect, onCancel } = props;
  const handleFileSelect = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      onImageSelect(imageUrl);
    }
  };

  const handleCancel = () => {
    setSelectedImage('');
    onCancel();
  };

  return (
    <Grid sx={{ position: 'relative', lineHeight: '0px' }}>
      <Box
        component="img"
        src={selectedImage || defaultImage}
        alt="Product"
        className={classes.picture}
      />

      <Button
        variant="contained"
        className={classes.btnChoose}
        component="label"
        sx={{ fontWeight: 'bold', position: 'absolute' }}
        startIcon={<UploadIcon />}
      >
        {t('admin.dashboard.upload')}
        <input
          type="file"
          accept="image/*"
          className={classes.input}
          onChange={handleFileSelect}
        />
      </Button>

      {selectedImage && (
        <>
          <Box sx={{ position: 'absolute' }} className={classes.boxTitle}>
            <TextField
              InputProps={{
                sx: {
                  fontSize: '50px',
                  color: 'white',
                  fontWeight: 'bold',
                },
              }}
              variant="standard"
              className={classes.textField}
            />
            <Button
              variant="contained"
              className={classes.btnSection}
              sx={{ fontWeight: 'bold' }}
            >
              {t('admin.dashboard.section')}
            </Button>
          </Box>
          <Box sx={{ position: 'absolute' }} className={classes.groupeBtn}>
            <Button
              variant="contained"
              className={classes.btnSave}
              sx={{ fontWeight: 'bold' }}
            >
              {t('admin.dashboard.save')}
            </Button>
            <Button
              variant="contained"
              className={classes.btnCancel}
              sx={{ fontWeight: 'bold' }}
              onClick={handleCancel}
            >
              {t('admin.dashboard.cancel')}
            </Button>
          </Box>
        </>
      )}
    </Grid>
  );
}

export default ImageUploadSection;

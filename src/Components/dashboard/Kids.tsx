/* eslint-disable @typescript-eslint/no-unused-vars */
import { t } from 'i18next';
import React, { useState } from 'react';
import ImageUploadSection from './UploadSection';
import { Grid } from '@mui/material';
type ImageUrlType = string;
const Kids = () => {
  const defaultImage = require('../../assets/defaultImage.png');
  const [selectedImage, setSelectedImage] = useState('');
  const handleCancel = () => {
    setSelectedImage('');
  };

  const handleImageSelect = (imageUrl: ImageUrlType) => {
    setSelectedImage(imageUrl);
  };

  const imageUploadSections = [];
  for (let index = 0; index < 4; index++) {
    imageUploadSections.push(
      <ImageUploadSection
        key={index}
        defaultImage={defaultImage}
        onImageSelect={handleImageSelect}
        onCancel={handleCancel}
      />
    );
  }
  return  <Grid>{imageUploadSections}</Grid>;
};

export default Kids;

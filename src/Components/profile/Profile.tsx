import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { t } from 'i18next';
import React from 'react';
import ChangePwd from './ChangePwd';
import InfoPersonel from './InfoPersonel';

const Profile = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        {t('admin.profile.profil')}
      </Typography>
      <InfoPersonel />
      <ChangePwd />
    </Stack>
  );
};

export default Profile;

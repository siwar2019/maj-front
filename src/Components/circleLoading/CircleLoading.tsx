import React from 'react';
import { CircularProgress, CssBaseline, Grid } from '@mui/material';
import { useStyles } from '../../styles/circleLoading';
import { circleLoadingProps } from '../../types/props/circleLoading';

const CircleLoading = (props:circleLoadingProps) => {
  const {loading}=props ;
  const classes = useStyles();
  return (
    <Grid className={classes.circleLoading}>
      <CssBaseline />
      <CircularProgress
        disableShrink
        size={100}
        className={classes.custumProgress}
      />
    </Grid>
  );
};

export default CircleLoading;

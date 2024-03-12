import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { useStyles } from '../styles/barMaj';

const BarMaj = () => {
  const img = require('../../src/assets/logo.png');
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.appBarMaj}>
      <Toolbar>
        <img src={img} alt="img" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

export default BarMaj;

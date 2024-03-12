import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import Feed from './feed';
import SideBar from '../Components/SideBar';
import Navbar from '../Components/Navbar';
import { useStyles } from '../styles/SideBar';

export default function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.boxHome}>
      <CssBaseline />
      <Navbar />
      <Drawer variant="permanent" className={classes.drawer}>
        <Toolbar />
        <Box className={classes.boxToolbar}>
          <SideBar />
        </Box>
      </Drawer>
      <Box component="main" className={classes.boxFeeds}>
        <Toolbar />
        <Feed />
      </Box>
    </Box>
  );
}

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
} from '@mui/material';
import { useStyles } from '../../styles/dashboard';
import Men from './Men';
import Women from './Women';
import { t } from 'i18next';
import Kids from './Kids';
import Promo from './Promo';
import AboutMaj from './AboutMaj';

const Dashboard = () => {
  const classes = useStyles();
  const [selectedPage, setSelectedPage] = useState('Men');

  const handleMenuClick = (page: any) => {
    setSelectedPage(page);
  };
  const handleSwitchPage = (selectedPage: string) => {
    switch (selectedPage) {
      case 'Men':
        return (
          <>
            {' '}
            <Grid>
              <Men />
            </Grid>{' '}
          </>
        );
      case 'Women':
        return (
          <>
            {' '}
            <Grid>
              <Women />
            </Grid>{' '}
          </>
        );
      case 'Kids':
        return (
          <>
            {' '}
            <Grid>
              <Kids />
            </Grid>{' '}
          </>
        );
      case 'Promotion':
        return (
          <>
            {' '}
            <Grid>
              <Promo />
            </Grid>{' '}
          </>
        );
      case 'AbooutMAj':
        return (
          <>
            {' '}
            <Grid>
              <AboutMaj />
            </Grid>{' '}
          </>
        );
      default:
        return '';
    }
  };

  return (
    <Grid>
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold' }}
        className={classes.edit}
      >
        {t('admin.dashboard.titleEdit')}
      </Typography>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Button
            onClick={() => handleMenuClick('Men')}
            color={selectedPage === 'Men' ? 'error' : 'inherit'}
          >
            <Typography sx={{ fontWeight: '700' }}>
              {t('admin.dashboard.men')}
            </Typography>
          </Button>

          <Button
            onClick={() => handleMenuClick('Women')}
            color={selectedPage === 'Women' ? 'error' : 'inherit'}
          >
            <Typography sx={{ fontWeight: '700' }}>
              {t('admin.dashboard.women')}
            </Typography>
          </Button>

          <Button
            onClick={() => handleMenuClick('Kids')}
            color={selectedPage === 'Kids' ? 'error' : 'inherit'}
          >
            <Typography sx={{ fontWeight: '700' }}>
              {t('admin.dashboard.kids')}
            </Typography>
          </Button>
          <Button
            onClick={() => handleMenuClick('Promotion')}
            color={selectedPage === 'Promotion' ? 'error' : 'inherit'}
          >
            <Typography sx={{ fontWeight: '700' }}>
              {t('admin.dashboard.promo')}
            </Typography>
          </Button>
          <Button
            onClick={() => handleMenuClick('AbooutMAj')}
            color={selectedPage === 'AbooutMAj' ? 'error' : 'inherit'}
          >
            <Typography sx={{ fontWeight: '700' }}>
              {t('admin.dashboard.aboutmaj')}{' '}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.containerImg}>
        {handleSwitchPage(selectedPage)}
      </Container>
    </Grid>
  );
};

export default Dashboard;

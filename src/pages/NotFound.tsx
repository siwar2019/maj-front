import { Box, Grid, Typography } from '@mui/material';
import { t } from 'i18next';
import { useStyles } from '../styles/notFound';
const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Box className={classes.box}>
        <Box className={classes.boxFrame}>
          <Typography
            sx={{ fontWeight: '700' }}
            variant="h6"
            className={classes.subTitle}
          >
            {t('admin.notFound.title1')}
          </Typography>
          <Typography variant="h1" className={classes.title404}>
            <span className={classes.four}>4</span>
            <span className={classes.zero}>0</span>
            <span className={classes.four}>4</span>
          </Typography>
        </Box>

        <Typography sx={{ fontWeight: '600' }} className={classes.title}>
          {t('admin.notFound.title2')}
        </Typography>
      </Box>
    </Grid>
  );
};

export default NotFound;

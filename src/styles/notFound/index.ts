import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles(() => ({
  subTitle: {
    fontFamily: 'cabin,sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '3px !important',
    fontSize: '16px !important',
    position: 'relative',
    color: '#262626',
    margin: 0,
    marginBottom: '-50px !important',
    marginLeft: '70px !important',
    '@media (max-width:600px)': {
      marginBottom: '-30px !important',
      marginLeft: '0px !important',
    },
  },
  box: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    maxWidth: '90%',
  },
  title404: {
    '@media (min-width:600px)': {
      fontSize: '150px',
    },
  },
  four: {
    fontSize: '250px',
    letterSpacing: '-40px',
    fontFamily: 'montserrat,sans-serif !important',
    textShadow: '-8px 0 0 #fff !important',
    '@media (max-width:600px)': {
      fontSize: '150px',
      letterSpacing: '-20px',
    },
  },
  zero: {
    color: '#d32f2f  !important',
    fontSize: '250px',
    letterSpacing: '-40px',
    fontFamily: 'montserrat,sans-serif !important',
    textShadow: '-8px 0 0 #fff !important',
    '@media (max-width:600px)': {
      fontSize: '150px',
      letterSpacing: '-20px',
    },
  },
  boxFrame: {
    position: 'relative',
    height: '242px',
  },
  title: {
    fontSize: '20px !important',
    textTransform: 'uppercase',
    fontFamily: 'cabin,sans-serif !important',
    '@media (max-width:600px)': {
      marginTop: '-70px !important',
    },
  },
}));

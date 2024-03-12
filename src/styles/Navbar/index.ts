import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'white !important',
    paddingRight: '0px !important',
    display: 'flex',
    justifyContent: 'center',
    borderTop: '.5rem solid black !important',
  },
  bar: {
    justifyContent: 'space-between',
    display: 'flex',
  },

  btnLogOut: {
    backgroundColor: 'red',
    margin: '100px',
  },
  logo: {
    width: '20vh',
    padding: '10px',
  },
  logoMobil: {
    width: '100px',
    padding: '5px',
  },
  avatar: {
    width: '30px ',
    height: '30px',
  },
  userName: {
    color: '#d32f2f !important',
  },
  notification: {
    color: 'black',
  },
  btnLogout: {
    fontWeight: 'bolder',
    borderRadius: '12px !important',
    backgroundColor: 'black !important',
    margin: '5px',
    '&:hover': {
      backgroundColor: 'black',
    },
  },
  Box: {
    marginTop: '100px !important',
  },
  textLogout: {
    fontSize: '12px',
  },

  boxLogo: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    '@media (min-width:600px)': {
      display: 'none',
    },
  },
  menuicon: {
    color: 'black !important',
    fontSize: '30px  !important',
    '@media (min-width:600px)': {
      display: 'none',
    },
  },

  boxweb: {
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    '@media (min-width:600px)': {
      display: 'flex',
    },
  },
  Boxmobil: {
    display: 'flex',
    color: 'black',
    gap: '10px',
    alignItems: 'center',
    '@media (min-width:600px)': {
      display: 'none',
    },
  },
  userBox: {
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    '@media (min-width:600px)': {
      display: 'flex',
    },
  },
  navlinks: {
    textDecoration: 'none',
    color: 'black',
    '&:active': {
      color: 'red',
    },
  },
  menuItem: {
    textDecoration: 'none !important',
    color: 'black !important',
  },
  boxAvatar: {
    display: 'flex',
  },
  menuDesktop: {
    borderTop: '2px solid black',
    borderLeft: '2px solid black ',
  },
  iconMenu: {
    color: 'black !important',
  },
}));

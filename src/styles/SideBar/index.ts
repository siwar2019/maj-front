import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles(() => ({
  listitem: {
    marginTop: '15px',
  },
  icon: {
    color: '#f81025 !important',
  },

  container: {
    backgroundColor: 'black !important',
    color: 'white',
    top: '10vh !important',
    height: '90vh !important',

    '@media (max-width:600px)': {
      display: 'none',
    },
  },

  Typography: {
    fontSize: '17px !important',
  },
  selectedItem: {
    backgroundColor: 'red !important',
  },
  navlinks: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '20px 30px',
  },
  boxHome: {
    display: 'flex',
  },
  drawer: {
    width: '240px ',
    flexShrink: 0,
    '@media (max-width:600px)': {
      display: 'none',
    },
    [`& .MuiDrawer-paper`]: {
      width: '240px',
      boxSizing: 'border-box',
      backgroundColor: 'black',
    },
  },
  boxFeeds: {
    flexGrow: 1,
    height: '100vh',
  },
  boxToolbar: {
    overflow: 'auto !important',
  },
}));

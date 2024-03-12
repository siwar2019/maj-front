import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles((theme) => ({
  appbar: {
    color: 'black !important',
    backgroundColor: 'white !important',
    boxShadow: 'none !important',
  },
  edit: {
    margin: '20px 0 40px !important',
    padding: ' 25px 25px 0px 25px ',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  picture: {
    width: '100%',
    height: '50vh',
  },

  btnChoose: {
    top: '36px',
    right: '26px',
    backgroundColor: 'black !important',
    borderRadius: '0px !important',
    padding: '10px 12px !important',
  },
  container: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  groupeBtn: {
    bottom: '30px',
    right: '50px',
    display: 'flex',
    gap: '20px',
  },
  btnSave: {
    color: 'black !important',
    backgroundColor: 'white !important',
    borderRadius: '0px !important',
  },
  btnCancel: {
    color: 'white !important',
    backgroundColor: 'black !important',
    borderRadius: '0px !important',
  },
  containerImg: {
    paddingLeft: '0px !important',
    paddingRight: '0px !important',
    maxWidth: 'none !important',
  },
  boxTitle: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50% , -50%)',
    display: 'grid !important',
    justifyItems: 'center',
    gap: '10px',
  },
  btnSection: {
    borderRadius: '0px !important',
    backgroundColor: '#d32f2f  !important',
    color: 'white !important',
    display: 'flex',
    margin: 'auto',
    width: '150px',
  },
  textField: {
    '& .MuiInput-root:after': {
      color: 'black !important',
      borderBottom: '0px solid black',
    },
    '& .MuiInputLabel-root.Mui-focused ': {
      color: 'black !important',
    },
  },
  Icon: {
    color: 'white !important',
  },
  input: {
    display: 'none',
  },
}));

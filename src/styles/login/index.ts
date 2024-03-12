import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles(() => ({
  bonBack: {
    maxWidth: '100px',
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'end',
  },
  btnBack: {
    color: '#f81025 !important ',
  },

  box: {
    display: 'grid',
    justifyContent: 'center',
    width: '800px !important',
    maxWidth: '100%',
    transform: 'translate(10px , 50%) !important',
  },
  boxLog: {
    display: 'grid',
    justifyContent: 'center',
    width: '800px !important',
    maxWidth: '100%',
    transform: 'translate(10px , 30%) !important',
  },
  formControl: {
    fontSize: '21px !important',
  },
  boxTitle: {
    display: 'grid',
    justifyContent: 'center',
  },
  title: {
    fontSize: '40px !important',
    lineHeight: '56px !important',
  },
  boxParag: {
    color: '#2c2a2a !important',
    fontSize: '25px !important',
    maxWidth: '503px',
    lineHeight: '35px !important',
    marginBottom: '15px !important',
  },
  textInput: {},
  titleForgot: {
    display: 'block',
    fontSize: '18px !important',
  },
  IconButton: {
    color: '#f81025 !important',
  },
  BtnLog: {
    marginTop: '50px !important',
    padding: '10px !important',
    backgroundColor: ' #f81025 !important',
    borderRadius: '0px !important',
    fontSize: '25px !important',
  },
  link: {
    display: 'flex',
    color: 'red !important',
    fontSize: '15px !important',
    textDecorationColor: 'red !important',
  },
  BtnReset: {
    marginTop: '50px !important',
    padding: '18px !important',
    backgroundColor: 'red !important',
    borderRadius: '0px !important',
    fontSize: '12px',
  },
  error: {
    color: 'red',
    marginTop: '10px !important',
  },
  checkBox: {
    padding: '0px !important',
    margin: '0px !important',
    marginRight: '10px !important',
  },
  inputFile: {
    '& .MuiInput-root:after': {
      color: 'black !important',
      borderBottom: '2px solid black',
    },
    '& .MuiInputLabel-root.Mui-focused ': {
      color: 'black !important',
    },
  },

  formPassword: {
    width: '100%',
    '& .MuiInput-root:after': {
      borderBottom: '2px solid black',
    },
    '& .MuiInputLabel-root.Mui-focused ': {
      color: 'black !important',
    },
  },
  boxforgot: {
    display: 'grid',
    justifyContent: "start",
    alignItems: 'start',
    margin: '40px 0px 10px',
    gap:'12px'
},
}));

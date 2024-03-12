import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles(() => ({
  modal: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '24',
    padding: '40px ! important',
    overflowY: 'scroll',
    maxHeight: '85%;',
  },
  box: {
    width: '100%',
  },
  formControl: {
    minWidth: '165px !important ',
    marginLeft: '0px !important',
    margin: '-7px !important',
    '& .MuiInput-root:after': {
      borderBottom: '2px solid black',
    },
    '& .MuiInputLabel-root.Mui-focused ': {
      color: 'black !important',
    },
  },
  btnClear: {
    marginTop: '18px !important',
    color: 'red !important',
    paddingRight: '28px !important',
  },
  boxBtn: {
    display: 'flex',
    justifyContent: 'end !important',
    gap: '10px',
    marginTop: '40px',
  },
  step: {
    marginLeft: '-15px !important',
  },
  select: {
    backgroundColor: 'white !important',
  },
  btnNext: {
    display: 'flex !important',
    justifyContent: 'end !important',
    marginTop: '15px !important',
  },
  next: {
    backgroundColor: '#f81025 !important',
    borderRadius: '0px !important',
    width: '120px',
  },
  title: {
    color: '#f81025 !important',
    fontSize: '30px !important',
    textAlign: 'center',
    padding: '10px',
    marginBottom: '15px !important',
  },
  prodItem: {
    fontSize: '20px !important',
  },

  btnCancel: {
    width: '150px',
    color: '#f81025 !important',
    borderColor: '#f81025 !important',
  },
  btnSave: {
    width: '150px',
    backgroundColor: '#f81025 !important',
  },
  circleStep: {
    '& .MuiStepLabel-root .Mui-completed': {
      color: 'black',
      width: '50px',
      height: '50px',
      marginLeft: '-7px',
      display: 'flex !important',
      alignItems: 'center !important',
    },
    '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel': {
      color: 'grey.500',
    },
    '& .MuiStepLabel-root .Mui-active': {
      color: 'black',
      width: '50px',
      height: '50px',
      marginLeft: '-7px',
      display: 'flex !important',
      alignItems: 'center !important',
    },
    '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
      color: 'common.white',
    },
    '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
      fill: 'white',
      fontWeight: 'bold',
    },
  },
  error: {
    color: '#d32f2f !important',
    fontSize: '12px !important',
  },
  IconAdd: {
    display: 'flex',
    alignItems: 'end',
    color: 'red',
  },
  input: {
    borderBottom: '1px  black solid',
  },
  picture: {
    display: 'flex !important',
    margin: 'auto !important',
    marginTop: '30px !important',
    padding: '15px !important',
    cursor: 'pointer',
    width: '200px',
    height: '200px',
    objectFit: 'cover',
  },
  bntUpload: {
    marginTop: '20px !important',
    display: 'flex !important',
    margin: 'auto !important',
    backgroundColor: 'white !important',
    borderColor: 'red !important',
    border: '1px solid red !important',
    boxShadow: '0px 0px 0px 0px !important',
    color: 'red !important',
    '&:hover': {
      backgroundColor: 'white !important',
    },
  },
  gridList: {
    marginBottom: '10px !important',
    paddingTop: '0px ! important',
  },
  errorImg: {
    color: '#d32f2f !important',
    fontSize: '12px !important',
    display: 'flex !important',
    justifyContent: 'center !important',
  },
  moda: {},
  inputFile: {
    '& .MuiInput-root:after': {
      color: 'black !important',
      borderBottom: '2px solid black',
    },
    '& .MuiInputLabel-root.Mui-focused ': {
      color: 'black !important',
    },
  },
}));

import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles(() => ({
  box: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '1px solid #white',
    boxShadow: '24',
    borderRadius: '5px',
    padding: '40px ! important',
    overflowY: 'scroll',
    maxHeight: '85%;',
  },
  title: {
    textAlign: 'center',
    color: '#f81025 !important',
    fontSize: '35px !important',
    textTransform: 'uppercase',
    marginBottom: '25px !important',
  },
  boxForm: {
    display: 'grid',
    gap: '25px',
  },
  grid: {
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'space-between !important',
  },

  gridUpload: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
  },
  btnChoose: {
    backgroundColor: 'white !important',
    color: 'red !important',
    padding: '1px 7px !important',
    marginBottom: '12px !important',
    marginRight: '2px !important',
    borderRadius: '0px !important',
    border: '1px solid red !important',
    mawwidth: '50px',
  },
  span: {
    padding: '0px , 2px !important',
    fontSize: '10px',
  },
  uploadImg: {
    fontSize: '12px !important',
  },
  formImage: {
    width: '100%',
  },
  imgUpload: {
    maxWidth: '200px !important',
    height: '200px !important',
  },
  gridImage: {
    display: 'flex !important',
    justifyContent: 'center !important',
  },
  boxGlob: {
    width: '200px',
    height: '0%',
  },
  Icon: {
    marginTop: '23px !important',
    color: 'red !important',

    '&:hover': {
      background: 'white !important',
    },
  },
  formControl: {
    width: '100% !important',
    '&:focus': {
      backgroundColor: 'red !imporatnt',
    },
    '& .MuiInput-root:after': {
      borderBottom: '2px solid black',
    },
  },
  bnt: {
    display: 'flex',
    justifyContent: 'end !important',
    gap: '10px',
    marginTop: '40px',
  },
  btncancel: {
    maxwidth: '150px',
    color: '#f81025 !important',
    borderColor: '#f81025 !important',
  },
  btnAdd: {
    maxwidth: '150px',
    backgroundColor: '#f81025 !important',
  },
  inputLabel: {
    '&.Mui-focused': {
      color: 'black !important',
    },
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
}));

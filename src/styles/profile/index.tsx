import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles((theme) => ({
  inputFile: {
    '& .MuiInput-root:after': {
      color: 'black !important',
      borderBottom: '2px solid black',
    },
    '& .MuiInputLabel-root.Mui-focused ': {
      color: 'black !important',
    },
  },
  btnEdit: {
    width: '150px',
    backgroundColor: '#f81025 !important',
  },
  boxSave: {
    display: 'flex',
    justifyContent: 'end',
    padding: '20px',
    marginRight: '45px',
    marginTop: '20px',
  },
  titleAccord: {
    fontSize: '18px !important',
  },
  gridAcrrord: {
    padding: '25px',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '27px',
  },
  gridContainer2: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '27px',
  },
  roundedSpan: {
    display: 'inline-block',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    lineHeight: '24px',
    marginRight: '15px',
    fontSize: '20px !important',
  },
  formControl: {
    width: '100%',
    '& .MuiInput-root:after': {
      borderBottom: '2px solid black',
    },
    '& .MuiInputLabel-root.Mui-focused ': {
      color: 'black !important',
    },
  },
  error: {
    color: '#d32f2f',
    fontSize: '13px !important',
  },
  IconButton: {
    color: '#f81025 !important',
  },
  Date: {
    width: '100%',
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderStyle: 'none !important',
      borderBottomStyle: 'solid !important',
      borderRadius: '0px !important',
    },
  },
  gridDate: {
    marginTop: '-14px',
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: ' none !important',
        borderBottom: ' 1px solid gray !important',
      },
    },
    '& .MuiInput-root:after': {
      borderBottom: '2px solid black',
    },
  },
  DateTime: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderStyle: 'none !important',
      borderBottomStyle: 'solid !important',
      borderRadius: '0px !important',
    },
  },
  margin: {
    marginBottom: '-15px !important',
  },
}));

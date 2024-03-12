import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles(() => ({
  box: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '5px',
    width: 600,
    backgroundColor: 'white !important',
    padding: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  delete: {
    textAlign: 'center',
    color: '#f81025 !important',
    fontSize: '35px !important',
    textTransform: 'uppercase',
  },
  textDelete: {
    fontSize: '22px !important',
  },
  bnt: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
    marginTop: '50px',
  },
  btnCancel: {
    color: '#f81025 !important',
    borderColor: '#f81025 !important',
    fontSize: '18px !important',
    borderRadius: '0px !important',
  },
  btnEdit: {
    fontSize: '18px !important',
    backgroundColor: '#f81025 !important',
    borderRadius: '0px !important',
  },
  bold: {
    fontWeight: 'bold',
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
  formcontrol: {
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
  error: {
    color: '#d32f2f !important',
    fontSize: '12px !important',
  },
}));

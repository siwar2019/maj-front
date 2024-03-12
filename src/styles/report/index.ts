import { makeStyles } from '@material-ui/styles';
import { tableCellClasses } from '@mui/material';
export const useStyles = makeStyles(() => ({
  StyledTableCell: {
    fontWeight: 'bold',
    padding: '22px !important',
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'black !important',
      color: 'white',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  },
  date: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
  },
  Box: {
    marginTop: '30px',
  },
  boxList: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0 40px ',
    gap: '20px',
  },
  orderTitle: {
    marginTop: '-35px !important',
  },

  boxDate: {
    display: 'flex',
    gap: '20px',
  },
  textFieldDate: {
    borderRadius: '0px !important',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black !important',
    },
  },
  DateTime: {
    borderStyle: '2px solid red !important',

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderBottomStyle: 'solid !important',
      borderRadius: '0px !important',
    },
    '& .MuiOutlinedInput-input': {
      padding: '16.5px 8px !important ',
    },
  },

  searchContainer: {
    position: 'relative',
    display: 'flex',
    alignitems: 'center',
  },
  ClearIcon: {
    fontSize: '18px',
  },
  icon: {
    color: '#4c4c4c !important',
  },
  resetButton: {
    position: 'absolute',
    top: ' 49%',
    right: '30px',
    transform: 'translateY(-50%)',
    backgroundColor: ' transparent',
    color: 'gray !important',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '50% !important',

    marginRight: '-3px !important',
    fontSize: '16px !important ',
    marginTop: '1px',
    '&:hover': {
      backgroundColor: '#EFEFEF !important',
      borderRaduis: '50% !important',
    },
  },
  dateStyle: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black !important',
    },
    width: '100% !important',
    '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
      paddingLeft: '10px !important',
    },
    "& .css-i4bv87-MuiSvgIcon-root" : {
      width:"16px !important" ,
      height:"15px !important"

    },
    '& .Mui-focused':{
      color : 'black !important' 
   }
  },
}));

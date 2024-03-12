import { makeStyles } from '@material-ui/styles';
import { tableCellClasses } from '@mui/material';
export const useStyles = makeStyles((theme) => ({
  global: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0 40px ',
    gap: '20px',
  },

  discount: {
    display: 'flex',
    gap: '15px',
  },

  addDiscount: {
    borderRadius: '0px',
    backgroundColor: '#f81025 !important',
    fontSize: '10px',
  },
  gridBtn: {
    display: 'flex',
    gap: '20px',
  },
  gridSearch: {
    display: 'flex',
    justifyContent: 'end',
  },

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
  activeSwitch: {
    '&.Mui-checked': {
      color: '#f81025 !important',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#f81025 !important',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#f81025 !important',
    },
    '&.Mui-disabled': {
      color: 'black !important',
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      backgroundColor: 'black !important',
    },
  },
  desabledSwitch: {
    '&.Mui-checked': {
      color: 'green !important',
    },
  },
  iconsAction: {
    color: 'red !important',
  },
  box: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '5px ',
    boxShadow: '24',
    padding: '20px ! important',
  },
  close: {
    right: 8,
    top: 8,
    color: 'black',
  },
  Add: {
    textAlign: 'center',
    color: '#f81025 !important',
    fontSize: '35px !important',
    textTransform: 'uppercase',
    marginBottom: '20px !important',
    marginTop: '20px !important',
  },

  bnt: {
    display: 'flex',
    justifyContent: 'end !important',
    gap: '10px',
    marginTop: '40px',
  },
  btnCancel: {
    color: '#f81025 !important',
    borderColor: '#f81025 !important',
  },
  btnEdit: {
    backgroundColor: '#f81025 !important',
  },
  errorMsg: {
    fontSize: '12px !important',
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
  textField: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black !important',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black !important',
      },
    },
    '& .MuiInput-root:after': {
      borderBottom: '2px solid black',
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
  noData: {
    padding: '15px',
  },
  iconToolip: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ececec !important',
    },
  },
  gridBox: {
    display: 'flex',
    gap: '10px !important',
    marginBottom: '30px',
    alignItems: 'flex-end',
  },

  marginSelect: {
    '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
      {
        padding: '0px !important',
        marginTop: '33px !important',
      },
  },
  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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
  iconButton: {
    margin: '3px !important',

    padding: '3px !important',
    '& .css-i4bv87-MuiSvgIcon-root': {
      fontSize: '16px !important',
      margin: '1px !important',
    },
    '&:hover': {
      backgroundColor: '#EFEFEF !important',
    },
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
  formSelect:{
    '& .Mui-focused .MuiOutlinedInput-notchedOutline ':{
      borderColor:'black !important'
     },
     '& .Mui-focused':{
        color : 'black !important' 
     }
  },
}));

import { makeStyles } from '@material-ui/styles';
import { tableCellClasses } from '@mui/material';
export const useStyles = makeStyles((theme) => ({
  global: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '20px 0 20px ',
    gap: '20px',
    paddingBottom: '0px',
  },
  product: {
    display: 'flex',
    gap: '15px',
  },
  addproduct: {
    padding: '15px',
    borderRadius: '0px',
    backgroundColor: '#f81025 !important',
  },
  icon: {
    color: '4c4c4c !important',
  },

  iconsAction: {
    color: 'red !important',
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
  description: {
    maxWidth: '300px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  RefColor: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxColor: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
  },
  color: {
    height: '30px',
    width: '30px',
    backgroundColor: 'red',
    borderRadius: '50%',
  },
  red: {
    color: 'red !important',
  },
  check: {
    color: 'green',
  },
  notAvailable: {
    color: 'gray',
  },
  cardImg: {
    margin: '20px',
    width: '300px',
  },
  cardMedia: {
    height: '300px !important',
  },

  inputFile: {
    '& .MuiInput-root:after': {
      borderBottom: '2px solid black',
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

  filterBoxPrice: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '3vh',
  },
  rightSide: {
    display: 'flex',
    marginRight: '-11px',
  },
  searchName: {
    marginTop: '-25px !important',
  },
  price: {
    marginTop: '0px !important',
    marginRight: '16px !important',
  },
  filterBox: {
    display: 'flex',
    marginRight: '1px',
    alignItems: 'center',
    justifyContent: 'space-between !important',
    gap: '20px !important',
  },
  boxBorder: {
    border: '1px solid transparent',
    boxShadow: '0px 4px 6px #D4D9DD !important',
    paddingLeft: '16px',
    borderRadius: '12%',
    paddingRight: '12px',
    marginTop: '8px !important',
  },
  slider: {
    marginLeft: '15px',
    marginRight: '15px',

    marginTop: '7px',
    '& .css-1gv0vcd-MuiSlider-track': {
      color: '#F81025 !important',
    },
    ' & .css-14pt78w-MuiSlider-rail': {
      color: '#D4D9DD !important',
    },
    '& .css-eg0mwd-MuiSlider-thumb': {
      color: 'red !important',
      border: '3px solid white !important',
      boxShadow: '0px 4px 6px #D4D9DD !important',
    },
    '@media (pointer: coarse)': {
      '& .css-969bzp-MuiSlider-root': {
        padding: '0 !important',
      },
    },
  },
  gridBox: {
    display: 'flex',
    alignItems: 'flex-end',

    paddingTop: '18px',
    marginBottom: '30px',

    gap: '10px',
  },
  gridBoxx: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '20px',
  },

  selectBox: {
    justifyContent: 'center !important',
  },
  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  marginTable: {
    marginTop: '22px',
  },
  marginSelect: {
    '& .css-1aim9gr-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
      backgroundColor: 'red !important',
    },

    '& .MuiSelect-select': {
      height: '40px !important',
      boxShadow: '0px 4px 6px #D4D9DD',
    },
    '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
      {
        padding: '0px !important',
        marginTop: '7px !important',
      },
    '& .css-10382q5-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
      height: '30px !important',
    },
  },
  DateTime: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderBottomStyle: 'solid !important',
      borderRadius: '0px !important',
    },
    '& .css-i4bv87-MuiSvgIcon-root': {
      color: 'black !important',
    },

    '& .css-1dnlhj7-MuiStack-root': {
      width: 'fit-content !important',
    },
    '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
      marginTop: '-8px !important',
      height: '64px !important',
    },
  },
  boxFlex: {
    display: 'flex !important',
    alignItems: 'flex-end',
    paddingTop: '18px',
    marginBottom: '30px',

    gap: '-10px',
  },
  textFieldProduct: {
    '& .MuiInput-root:after': {
      borderBottom: '2px solid black',
    },

    '& .css-v4u5dn-MuiInputBase-root-MuiInput-root': {
      border: '1px solid transparent !important',
      boxShadow: '0px 4px 6px #D4D9DD !important',
      height: '45px !important',
      marginTop: '0px !important',
    },
    '& .css-v4u5dn-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before':
      {
        borderBottom: '0px !important',
      },
    '& .css-v4u5dn-MuiInputBase-root-MuiInput-root:before ': {
      borderBottom: '0px !important',
    },
    '& .css-v4u5dn-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before ':
      {
        borderBottom: '0px !important',
      },
    '& .css-i4bv87-MuiSvgIcon-root': {
      marginTop: '-8px !important',
      marginRight: '10px !important',
    },
    '& .css-l4u8b9-MuiInputBase-root-MuiInput-root': {
      marginTop: '22px !important',
    },
  },

  selectDropDown: {
    '& .css-1aim9gr-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
      backgroundColor: 'red !important',
    },

    '& .MuiSelect-select': {
      height: '50px !important',
      boxShadow: '0px 4px 6px #D4D9DD',
    },
    '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
      {
        padding: '0px !important',
        marginTop: '7px !important',
      },
    '& .css-10382q5-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
      height: '30px !important',
    },
  },

  select: {
    '& .MuiInputLabel-root.Mui-focused ': {
      color: 'black !important',
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
  searchContainer: {
    position: 'relative',
    display: 'flex',
    alignitems: 'center',
  },
  ClearIcon: {
    fontSize: '18px',
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
  dateStyle: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black !important',
      
    },
    '& .Mui-focused':{
      color : 'black !important' 
   },
   '& .MuiButtonBase-root-MuiButton-root':{
    color : 'black !important' 
   },
    width: '100% !important',
    '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
      paddingLeft: '10px !important',
    },
    '& .css-i4bv87-MuiSvgIcon-root': {
      width: '16px !important',
      height: '15px !important',
    },
  },
  formCatreg:{
    '& .Mui-focused .MuiOutlinedInput-notchedOutline ':{
      borderColor:'black !important'
     },
     '& .Mui-focused':{
        color : 'black !important' 
     }
  },
  sliderFilter:{
    '& .MuiSlider-thumb': {
      backgroundColor: 'red',
    },
    '& .MuiSlider-track': {
      color: 'red',
    },
    ' & .MuiSlider-rail': {
      color: 'red !important',
    },
  }
  

}));

import { makeStyles, Theme } from '@material-ui/core';

export const useStyles: any = makeStyles((theme: Theme) => ({
  categoryTitle: {
    fontSize: '50px',
  },
  categoryHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0 40px ',
    gap: '20px',
  },
  searchField: {
    width: '200px',
    '& .MuiInput-root:after': {
      borderBottom: '2px solid black',
    },
    '& .css-1x51dt5-MuiInputBase-input-MuiInput-input': {
      padding: '4px 10px 5px !important',
    },
  },
  root: {
    width: '100%',
  },
  nestedAccordion: {
    borderLeft: 'none !important',
    borderBottom: 'none !important',
    paddingLeft: 0,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&.noBorder': {
      border: 'none',
    },
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg) !important',
    },
  },
  AccordionSummary: {
    backgroundColor: '#F81025',
  },
  accordionTextParent: {
    color: '#F81025',
    fontWeight: 'bolder',
    size: '25px',
    fontFamily: 'Century Gothic',
  },
  accordionHeader: {
    display: 'flex',
    justifyContent: 'space-between ',
    border: 'none !important',
    borderTop: '1px solid #D4D9DD !important',
  },
  iconStyle: {
    color: 'red',
    padding: '2px',
    borderRaduis: '50% !important',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ececec',
      borderRaduis: '50px',
    },
  },

  iconsPosition: {
    marginTop: '23px',
    marginBottom: '13px',
    marginRight: '41px',
  },
  noBorder: {
    border: 'none !important',
  },
  muAccordion: {
    border: `1px solid #D4D9DD`,

    paddingLeft: 0,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&.noBorder': {
      border: 'none',
    },
  },
  MuiAccordionSummary: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg) !important',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  },

  modalBox: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid white',
    minWidth: 350,
    backgroundColor: 'white !important',
    padding: 40,
    borderRadius: '2%',
  },
  modalOpen: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid white',
    minWidth: '21vh !important',
    backgroundColor: 'white !important',
    padding: 40,
    borderRadius: '2%',
  },
  title: {
    textAlign: 'center',
    color: '#f81025 !important',
    fontSize: '25px !important',
    textTransform: 'uppercase',
  },
  underCategory: {
    fontSize: '12px !important',
    textAlign: 'center',
    marginTop: '5px !important',
    marginBottom: '-19px !important',
    color: '#F81025',
  },
  bnt: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
    fontFamily: 'Century Gothic',
    fontSize: '16px !important',
    marginTop: '30px',
  },
  btnCancel: {
    color: '#f81025 !important',
    borderColor: '#f81025 !important',
    fontSize: '16px !important',
    borderRadius: '0px !important',
  },
  btnDelete: {
    fontSize: '18px !important',
    backgroundColor: '#f81025 !important',
    borderRadius: '0px !important',
  },
  textField: {
    marginTop: '22px !important',
    fontFamily: 'Century Gothic !important',
    '& .MuiInput-root:after': {
      borderBottom: '2px solid black',
    },
  },
  error: {
    color: 'red',
    marginTop: '10px !important',
  },
  editTextField: {
    padding: '15px 0 5px !important',
    '& .MuiInput-root:after': {
      borderBottom: '2px solid black',
    },
  },
  iconContainer: {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
  },
  hoverText: {
    position: 'absolute',
    top: '100% !important',
    left: '50% !important',
    backgroundColor: ' #ccc !important',
    color: '#fff !important',
    padding: '5px !important',
    borderRadius: '4px !important',
    opacity: '0!important ',
    visibility: 'hidden',
  },
  colorPicker: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '12px',
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
  gridBox: {
    display: 'flex',
    gap: '20px !important',
    marginTop: '10px !important',
    alignItems: 'flex-end',
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
        marginTop: '24px !important',
      },
    '& .css-10382q5-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
      height: '30px !important',
    },
  },
  filterBox: {
    display: 'flex',
    marginRight: '1px',
    alignItems: 'center',
    justifyContent: 'space-between !important',
    marginTop: '10px !important',
    gap: '20px',
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
  boxBorder: {
    border: '1px solid transparent',
    boxShadow: '0px 4px 6px #D4D9DD !important',
    paddingLeft: '16px',
    borderRadius: '12%',
    paddingRight: '12px',
    marginTop: '8px !important',
  },
  marginDate: {
    marginRight: '7px !important',
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
  searchCategory: {
    backgroundColor: 'white',
    border: '1px solid black',
    height: 'fit-content',
  },
  buttonSearch: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '8px',
    marginLeft: '5px',
    display: 'flex',
  },
  parent: {
    color: 'gray',
    fontSize: '12px !important',
    marginLeft: '8px',


  },
  searchResult: {
    boxShadow: '1px 1px 1px 0px #F1F2F3 ',
    backgroundColor: 'white ',
    width: '200px',
  },
  color: {
    backgroundColor: 'red ',
  },

  searchContainer: {
    borderBottom: 'none !important',
    //add a scroll bar when height  reach up 200 px 
    maxHeight: '200px', 
    overflowY: 'auto',
  },
  fulfilled: {
    backgroundColor: 'yellow',
  },
  focusedButton : {
    backgroundColor :'#D4D9DD'
  },
  gridBoxx: {
    display: 'flex',
    marginTop: '-25px !important',
    marginBottom: '30px',
    alignItems: 'flex-end',
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

    marginRight: '-4px !important',
    fontSize: '16px !important ',
    marginTop: '1px',
    '&:hover': {
      backgroundColor: '#EFEFEF !important',
      borderRaduis: '50% !important',
    },
  },
  filterContainer: {
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
  dateStyle: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black !important',
    },
    '& .Mui-focused':{
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
  formSelect:{
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
  },
  extraOption : {
    textAlign:"center",
    marginTop:"24px"
  }

}));

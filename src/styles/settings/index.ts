import { makeStyles } from '@material-ui/core';

export const useStyles: any = makeStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between ',
    alignItems: 'stretch',
    paddingRight: '18px',
    margin: '23px 0 42px ',
  },

  AddNewBtn: {
    backgroundColor: '#F81025 !important',
    fontFamily: 'Century Gothic',
    fontSize: '15px !important',
    color: 'white!important',
    width: '19%',
    height: ' 49px',
    marginTop: '9px',
  },
  tableHeader: {
    backgroundColor: '#000000',
    color: 'white !important',
    textAlign: 'center',
    fontSize: '15px !important',
  },
  tableMarg: {
    marginTop: '4%',
  },
  tableCell: {
    height: '68px',
  },
  iconRefactor: {
    color: 'red',
    border: '2px solid red',
    padding: '1px 3px 2px',
    borderRadius: '50%',
    backgroundColor: 'transparent !important',
  },
  modalBox: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid white',
    width: '80%',
    height: 'fitContent',
    backgroundColor: 'white !important',
    padding: 50,
    paddingLeft: '0',
    paddingRight: '0',
    borderRadius: '2%',
  },
  headerColor: {
    display: 'flex',
    alignItems: 'center ',
    marginTop: '-50px',
    marginLeft: '36px',
  },
  btn: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
    fontFamily: 'Century Gothic',
    fontSize: '16px !important',
    marginTop: '30px',
    marginRight: '25px',
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
  cardBox: {
    marginTop: '20px',
    marginLeft: '-5px',
  },
  color: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: 'red',
    border: '1px solid black',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
  },

  actions: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  actionButtons: {
    fontSize: '10px !important',
    marginTop: '-10px',
    paddingRight: '8px !important',
    marginLeft: '40px !important',
  },
  editIcon: {
    color: 'red',
    marginTop: '2px',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#ececec',
      borderRaduis: '50px',
    },
  },
  deleteIcon: {
    color: 'red',
    marginLeft: '1px !important',
    marginTop: '2px',
    cursor: 'pointer',
    borderRaduis: '50% !important',

    '&:hover': {
      backgroundColor: '#ececec',
      borderRaduis: '50px !important',
    },
  },
  colorCode: {
    color: 'black',
    fontSize: '13px !important',
  },
  listCard: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  cardStyle: {
    width: '150px',
    height: '120px',
    marginRight: '20px',
    marginTop: '10px',
    marginLeft: '18px',
  },
  sizeCardStyle: {
    marginRight: '15px',
  },
  size: {
    padding: '15px',
  },
  deleteSize: {
    display: 'flex !important',
    justifyContent: 'flex-end !important ',
    color: 'red',
    marginRight: '-15px',
    borderRaduis: '50% !important',
    cursor: 'pointer',
    marginTop: '-17px',
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
  optionHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  optionTitle: {
    fontWeight: 'bold',
    fontFamily: 'Century Gothic',
    size: '25',
    padding: '10px',
    marginLeft: '-8px',
  },
  backButton: {
    backgroundColor: 'black !important',
    borderRadius: '8px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    height: '30px',
    marginLeft: '11px !important',
    color: 'white ',
  },
  addproduct: {
    padding: '15px',
    borderRadius: '0px',
    backgroundColor: '#f81025 !important',
  },
  buttonBox: {
    borderRadius: '100% !important',
    margin: '20px',
    padding: '2px',
    width: '0%',
  },
  moreBtn: {
    border: '2px solid red ',
    borderRadius: '50% !important',
    color: 'red',
    padding: '2px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ececec !important',
      borderRaduis: '50px !important',
    },
  },
  iconsAction: {
    color: 'red !important',
  },
}));

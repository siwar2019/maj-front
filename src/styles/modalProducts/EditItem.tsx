import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles(() => ({
  box: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '24',
    padding: '40px ! important',
    maxHeight: '85%;',
    overflowY: 'scroll',
  },
  edit: {
    textAlign: 'center',
    color: '#f81025 !important',
    fontSize: '35px !important',
    textTransform: 'uppercase',
  },
  textEdit: {
    fontSize: '22px !important',
  },
  btnCancel: {
    width: '150px',
    color: '#f81025 !important',
    borderColor: '#f81025 !important',
  },
  btnEdit: {
    width: '150px',
    backgroundColor: '#f81025 !important',
  },
  bnt: {
    display: 'flex',
    justifyContent: 'end !important',
    gap: '10px',
    marginTop: '40px',
  },
  label: {
    color: 'black !important',
    fontSize: '18px !important',
  },
  inputt: {
    color: 'black !important',
    fontSize: '20px !important',
  },
  gridImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  btnChoose: {
    backgroundColor: 'white !important',
    color: 'red !important',
    padding: '1px 7px !important',
    marginBottom: '12px !important',
    marginRight: '24px !important',
    borderRadius: '0px !important',
    border: '1px solid red !important',
    mawwidth: '50px !important',
  },
  boxBtn: {
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'end !important',
  },
  imgUpload: {
    maxWidth: '200px',
    height: '200px',
  },
  deleteImg: {
    color: 'red !important',
    flex: 1,
    textAlign: 'left',
    marginLeft: '100px',
  },
  close: {
    right: 8,
    top: 8,
    color: 'black',
  },
  boxItem: {
    width: '100% !important',
    marginTop: '50px !important',
    marginLeft: '0px !important',
    display: '',
  },
  gridSize: {
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'spaceBetween',
  },
  textField: {
    width: '80%',
  },
  formControl: {
    width: '80% !important',
    marginLeft: '0px !important',
    marginTop: '-1px !important',
  },
  select: {
    backgroundColor: 'white !important',
  },
  deleteSize: {
    marginTop: '18px !important',
    color: 'red !important',
    paddingRight: '28px !important',
  },
  anotherItem: {
    backgroundColor: 'red !important',
    border: '1px solid red !important',
    color: 'white !important',
  },
  gridButnAdd: {
    display: 'flex !important',
    justifyContent: 'end !important',
  },
  butnAdd: {
    color: 'white !important',
  },
  span: {
    padding: '0px , 2px !important',
    fontSize: '10px',
  },
  uploadImg: {
    fontSize: '12px !important',
  },
  gridDelete: {
    display: 'flex',
    justifyContent: 'end',
  },
  gridUpload: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
  },
  boxDefault: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '4px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backdropFilter: 'blur(15px)',
  },
  default: {
    fontSize: '12px',
  },
  carouselImage: {
    display: 'block',
  },
  firstImage: {
    display: 'none',
  },
  boxGlob: {
    width: '200px',
    height: '0%',
  },
}));

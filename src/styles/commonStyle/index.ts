import { makeStyles } from '@material-ui/styles';
export const commonStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#FFFFFF',
    margin: '13px 14px 10px 14px',
    width: ' auto',
    borderRadius: 4,
    boxShadow: '#D4D9DD 0 0 5px',
    border: '1px solid #D4D9DD!important',
  },
  addButton: {
    margin: '17px 44px !important',
    height: '30px',
    borderRadius: '0%',
    backgroundColor: '#f81025 !important',
    fontSize: '12px',
    width: '210px !important',
  },
  btn: {
    backgroundColor: '#f81025 !important',
    height: '40px !important',
  },
  text: {
    fontFamily: 'Century Gothic',
  },
  modalTextCentered: {
    textAlign: 'center',
  },
}));

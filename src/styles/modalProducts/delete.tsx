import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles(() => ({
  box: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '5px',
    width: 500,
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
  },
  btnCancel: {
    color: '#f81025 !important',
    borderColor: '#f81025 !important',
    fontSize: '18px !important',
    borderRadius: '0px !important',
  },
  btnDelete: {
    fontSize: '18px !important',
    backgroundColor: '#f81025 !important',
    borderRadius: '0px !important',
  },
  bold: {
    fontWeight: 'bold',
  },
  modalBox: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid white',
    backgroundColor: 'white !important',
    padding: 50,
    borderRadius: '2% ',
  },
}));

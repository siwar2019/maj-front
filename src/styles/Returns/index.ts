import { makeStyles } from '@material-ui/styles';
import { tableCellClasses } from '@mui/material';
export const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    backgroundColor: 'white !important',
    border: '2px solid #fff',
    boxShadow: '24px',
    padding: '10px ',
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
  item: {
    padding: '20px',
  },
  reason: {
    maxWidth: '100px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  iconsAction: {
    color: 'red !important',
  },
  moreBtn: {
    border: '2px solid red ',
    borderRadius: '50% !important',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ececec !important',
    },
  },
  retuns: {
    fontSize: '25px !important',
  },
  grid: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  imgage: {
    maxWidth: '80%',
    maxHeight: '100%',
    display: 'block',
    margin: 'auto',
  },
  boxProd: {
    display: 'grid',
    justifyContent: 'start',
    alignItems: 'center',
  },
  titProd: {
    fontSize: '12px',
  },
  span: {
    color: 'red !important',
  },
  content: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  noData: {
    padding: '15px',
  },
}));

import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles(() => ({
  circleLoading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50vh ',
  },
  custumProgress: {
    color: 'black !important',
    'MuiCircularProgress-circleIndeterminate': {},
  },
}));

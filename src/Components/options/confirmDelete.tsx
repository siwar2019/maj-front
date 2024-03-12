import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from '../../styles/modalProducts/delete';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { removeSubOption } from '../../_redux/actions/subOption';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { IPropsConfirmDelete } from '../../types/props/option';
import { showSuccessToast } from '../../common';

const ConfirmDelete = (props: IPropsConfirmDelete) => {
  const { open, close, nameSubOption, idSubOption } = props;
  const classes = useStyles();
  const successfullyDeleted=`${t('admin.toastNotification.successfullyDeleted')} `
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const handleDelete = async () => {
    await dispatch(removeSubOption(idSubOption));
    showSuccessToast(successfullyDeleted)
    close();
  };

  return (
    <Grid>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modalBox}>
          <IconButton
            aria-label="close"
            onClick={close}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box>
            <Stack spacing={5}>
              <Typography
                id="modal-modal-title"
                className={classes.delete}
                sx={{ fontWeight: '700' }}
              >
                {t('admin.categories.delete')}
              </Typography>
              <Typography
                id="modal-modal-description"
                className={classes.textDelete}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.categories.confirmDelete')}
                <Typography className={classes.bold}>
                  {nameSubOption}{' '}
                </Typography>
                {t('admin.settings.option')}
              </Typography>

              <Box className={classes.bnt}>
                <Button
                  fullWidth
                  variant="outlined"
                  className={classes.btnCancel}
                  sx={{ fontWeight: 'bold' }}
                  onClick={close}
                >
                  {t('admin.categories.cancel')}
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  className={classes.btnDelete}
                  sx={{ fontWeight: 'bold' }}
                  onClick={handleDelete}
                >
                  {t('admin.categories.delete')}
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
};
export default ConfirmDelete;

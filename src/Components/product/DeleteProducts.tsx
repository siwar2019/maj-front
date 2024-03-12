import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { t } from 'i18next';
import { useStyles } from '../../styles/modalProducts/delete';
import { commonStyles } from '../../styles/commonStyle/index';
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, IconButton } from '@mui/material';
import { useAppDispatch } from '../../hooks';
import { deleteproductById } from '../../_redux/actions/products';
import { IPropsDeleteProduct } from '../../types/props/product';
import { showSuccessToast } from '../../common';
import { ToastContainer } from 'react-toastify';

 const  DeleteProducts=(props: IPropsDeleteProduct) => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const disptach = useAppDispatch();
  const { open, handleClose, id, productName } = props;
  const handelDelete = async () => {
    await  disptach(deleteproductById(id)
    );

    const productDeleted=`${t('admin.toastNotification.productDeleted')} `
    showSuccessToast(productDeleted)
   
    handleClose();
  };
  return (
    <Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.box}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'black',
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box>
            <Stack spacing={5} className={commonClasses.modalTextCentered}>
              <Typography
                id="modal-modal-title"
                className={classes.delete}
                sx={{ fontWeight: '700' }}
              >
                {t('admin.deleteProduct.delete')}
              </Typography>
              <Typography
                id="modal-modal-description"
                className={classes.textDelete}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.deleteProduct.textDelete')}:{productName}
              </Typography>

              <Box className={classes.bnt}>
                <Button
                  fullWidth
                  variant="outlined"
                  className={classes.btnCancel}
                  sx={{ fontWeight: 'bold' }}
                  onClick={handleClose}
                >
                  {t('admin.deleteProduct.cancel')}
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  className={classes.btnDelete}
                  sx={{ fontWeight: 'bold' }}
                  onClick={handelDelete}
                >
                  {t('admin.deleteProduct.delete')}
                </Button>

              </Box>
            </Stack>
          </Box>
        </Box>
      </Modal>
      <ToastContainer />

    </Grid>
  );
}
export default DeleteProducts
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { t } from 'i18next';
import { useStyles } from '../../styles/modalProducts/delete';
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, IconButton } from '@mui/material';
import { useAppDispatch } from '../../hooks';
import { deleteVariant } from '../../_redux/actions/products';
import { IPropsDeleteItem } from '../../types/props/product';

export default function DeleteItem(props: IPropsDeleteItem) {
  const { openDelete, handelCloseDelete, ProductsId, variantId } = props;
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handelDelete = () => {
    dispatch(deleteVariant({ id: ProductsId, variants: [variantId] }));
    handelCloseDelete();
  };
  return (
    <Grid>
      <Modal
        open={openDelete}
        onClose={handelCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.box}>
          <IconButton
            aria-label="close"
            onClick={handelCloseDelete}
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
            <Stack spacing={5}>
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
                {t('admin.deleteProduct.textDelete')}
              </Typography>

              <Box className={classes.bnt}>
                <Button
                  fullWidth
                  variant="outlined"
                  className={classes.btnCancel}
                  sx={{ fontWeight: 'bold' }}
                  onClick={handelCloseDelete}
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
    </Grid>
  );
}

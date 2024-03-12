import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { t } from 'i18next';
import { useStyles } from '../../styles/modalProducts/delete';
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, IconButton } from '@mui/material';
import { IPropsDeleteDiscount } from '../../types/props/discount';

export default function DeleteDiscount(props: IPropsDeleteDiscount) {
  const classes = useStyles();
  const { openDelete, handleCloseDelete } = props;
  const handelDelete = () => {
    handleCloseDelete();
  };
  return (
    <Grid>
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.box}>
          <IconButton
            aria-label="close"
            onClick={handleCloseDelete}
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
                  onClick={handleCloseDelete}
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

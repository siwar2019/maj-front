/* eslint-disable no-lone-blocks */
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import { t } from 'i18next';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from '../../styles/modalProducts/delete';
import { useAppDispatch } from '../../hooks';
import { deleteCategory } from '../../_redux/actions/categories';
import { IPropsDeleteCategory } from '../../types/props/category';
const DeleteCategories = (props: IPropsDeleteCategory) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { open, close, id, nameCategory } = props;
  const handleDelete = async () => {
 await dispatch(
    deleteCategory(id));
    {
      close();
    }
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
                  {nameCategory}{' '}
                </Typography>
                {t('admin.categories.category')}
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
      </Modal>{' '}
    </Grid>
  );
};
export default DeleteCategories;

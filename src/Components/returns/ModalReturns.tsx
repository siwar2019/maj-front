import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from '../../styles/Returns';
import Divider from '@mui/material/Divider';
import { t } from 'i18next';
import { IReturns, IReturnsDetails } from '../../types/returns';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getReturnedOrderDetails } from '../../_redux/actions/returns';
import { IPropsModalReturns } from '../../types/props/returns';

export const ModalReturns = (props: IPropsModalReturns) => {
  const { returns } = useAppSelector((state) => state.returns);
  const { open, handleClose, selectedId, orderId, returnList, formatDate } =
    props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getReturnedOrderDetails(orderId));
  }, [dispatch, orderId]);
  const { returnsDetails } = useAppSelector((state) => state.returns);
  const selection = returns.filter(
    (item: IReturns) => item.orderId === orderId
  );
  const classes = useStyles();

  return (
    <Grid>
      {' '}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Grid className={classes.item}>
            <Grid item xs={11}>
              {' '}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 30,
                  color: 'black',
                }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>

            <Grid item xs={1}>
              {' '}
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className={classes.retuns}
                sx={{ fontWeight: '700', textTransform: 'uppercase' }}
              >
                {t('admin.returns.retrun')}
              </Typography>
            </Grid>
          </Grid>

          <Divider />

          <Box className={classes.content}>
            <Grid container>
              <Grid item xs={4}>
                {returnsDetails.map((element: IReturnsDetails, index: number) =>
                  element.imageVariant.map((orderImage) => (
                    <img
                      key={index}
                      src={`${process.env.REACT_APP_PATH_IMAGE}${orderImage[0]}`}
                      alt="img"
                      className={classes.imgage}
                    />
                  ))
                )}
              </Grid>

              <Grid item xs={8} className={classes.boxProd}>
                <Box>
                  {selection.map((selectedValues: IReturns) => (
                    <Grid key={selectedId}>
                      <>
                        <Typography
                          className={classes.titProd}
                          sx={{ fontWeight: '700', textTransform: 'uppercase' }}
                        >
                          {t('admin.returns.Delivered')}:
                          {formatDate(selectedValues.Order.orderDate)}
                        </Typography>
                        <Typography
                          className={classes.titProd}
                          sx={{ fontWeight: '700', textTransform: 'uppercase' }}
                        >
                          {t('admin.returns.Name')}:{' '}
                          {selectedValues.Costumer.firstName}{' '}
                          {selectedValues.Costumer.lastName}
                        </Typography>
                        <Typography
                          className={classes.titProd}
                          sx={{ fontWeight: '700', textTransform: 'uppercase' }}
                        >
                          {t('admin.returns.Reference')}:{' '}
                          {selectedValues.Order.ref}
                        </Typography>
                        {returnsDetails.map(
                          (element: IReturnsDetails, index: number) => (
                            <>
                              <Grid key={index}>
                                <Typography
                                  className={classes.titProd}
                                  sx={{
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                  }}
                                >
                                  {t('admin.returns.color')}:{' '}
                                  {element.color[0].name}
                                </Typography>
                                <Typography
                                  className={classes.titProd}
                                  sx={{
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                  }}
                                >
                                  {t('admin.returns.size')}:{' '}
                                  {element.size[0]?.name}
                                </Typography>
                              </Grid>
                            </>
                          )
                        )}
                        <Typography
                          className={classes.titProd}
                          sx={{ fontWeight: '700', textTransform: 'uppercase' }}
                        >
                          {t('admin.returns.quantity')}:{' '}
                          {selectedValues.Order.quantity}
                        </Typography>
                        <Typography
                          className={classes.titProd}
                          sx={{ fontWeight: '700', textTransform: 'uppercase' }}
                        >
                          {t('admin.returns.price')}:{' '}
                          <Typography className={classes.span}>
                            {selectedValues.Order.totalPrice}{' '}
                            {t('admin.orders.dinarTun')}
                          </Typography>
                        </Typography>
                        <Typography
                          className={classes.titProd}
                          sx={{ fontWeight: '700' }}
                        >
                          {t('admin.returns.Reason')}: {selectedValues.raison}
                        </Typography>
                      </>
                    </Grid>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
};

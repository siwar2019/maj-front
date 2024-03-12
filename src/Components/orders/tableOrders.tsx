import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  Box,
  Grid,
  IconButton,
  Modal,
  Stack,
  TablePagination,
  Typography,
} from '@mui/material';
import { useStyles } from '../../styles/orders';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { getAllOrders, updateOrderStatus } from '../../_redux/actions/orders';
import Iorders from '../../types/orders';
import CircleLoading from '../circleLoading/CircleLoading';
import { formatDateToCustomFormat } from '../../common/index';
import { IPropsTableOrder } from '../../types/props/order';
export default function TableOrders(props: IPropsTableOrder) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(0);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [loading, setLoading] = React.useState<boolean>(true);
  const { order } = useAppSelector((state) => state.orders);
  const [resultSearch, setResultSearch] = React.useState([...order]);
  const classes = useStyles();
  const { loader } = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();
  const {
    search,
    shippingMethod,
    valueInput,
    selectedDate,
    maxPrice,
    minPrice,
  } = props;
  const openDialog = (orderId: any, status: any) => {
    setSelectedOrderId(orderId);
    setSelectedStatus(status);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedOrderId(0);
    setSelectedStatus('');
    setDialogOpen(false);
  };
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  useEffect(() => {
    setLoading(true);
    dispatch(getAllOrders());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    if (search || valueInput || shippingMethod || minPrice || maxPrice) {
      const selectedDateConverted = formatDateToCustomFormat(selectedDate);
      const filtered = order.filter(
        (orderItem: Iorders) =>
          (orderItem.Costumer.firstName
            .toLowerCase()
            .includes(search.toLowerCase()) ||
            orderItem.Costumer.lastName
              ?.toLowerCase()
              .includes(search.toLowerCase()) ||
            orderItem.ref.includes(search.toLowerCase())) &&
          orderItem.shippingMethod
            .toLowerCase()
            .includes(shippingMethod.toLowerCase()) &&
          orderItem.status.toLowerCase().includes(valueInput.toLowerCase()) &&
          (!selectedDate || (selectedDate
            && formatDateToCustomFormat(orderItem.orderDate).includes(
                selectedDateConverted
              )
          )) &&
          orderItem.totalPrice >= minPrice &&
          orderItem.totalPrice <= maxPrice
      );
      setResultSearch(filtered);
      setPage(0);
    } else {
      setResultSearch(order);
    }
  }, [search, shippingMethod, valueInput, selectedDate, minPrice, maxPrice]);
  const handleUpdateOrderStatus = (orderId: number, updatedStatus: string) => {
    // Dispatch action to update the order status
    dispatch(updateOrderStatus({ orderId, updatedStatus }));

    // Update the order status in the local state (order and resultSearch)
    const updatedOrders = order.map((orderItem: Iorders) => {
      if (orderItem.id === orderId) {
        return { ...orderItem, status: updatedStatus };
      }
      return orderItem;
    });

    setResultSearch(updatedOrders); // Update resultSearch with the updated status
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //change the format of the date
  const formatDate = (dbDate: string) => {
    const date = new Date(dbDate);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  };
  return (
    <>
      <TableContainer component={Paper} className={classes.spaceBox}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                className={classes.StyledTableCell}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.orders.order')}
              </TableCell>
              <TableCell
                align="center"
                className={classes.StyledTableCell}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.orders.customer')}
              </TableCell>
              <TableCell
                align="center"
                className={classes.StyledTableCell}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.orders.DateOrdered')}
              </TableCell>
              <TableCell
                align="center"
                className={classes.StyledTableCell}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.orders.Price')}
              </TableCell>
              <TableCell
                align="center"
                className={classes.StyledTableCell}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.orders.DeliveryMethod')}
              </TableCell>
              <TableCell
                align="center"
                className={classes.StyledTableCell}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.orders.status')}
              </TableCell>
              <TableCell
                align="center"
                className={classes.StyledTableCell}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.orders.action')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loader ? (
              <TableCell colSpan={7} align="center">
                <CircleLoading loading={loading} />
              </TableCell>
            ) : resultSearch.length > 0 ? (
              resultSearch
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: Iorders, index) => (
                  <TableRow key={index}>
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{ fontWeight: 'bold' }}
                    >
                      {row.ref}
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                      {row.Costumer?.firstName || '-'}{' '}
                      {row.Costumer?.lastName || '-'}
                    </TableCell>

                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                      {formatDate(row.orderDate)}
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                      {row.totalPrice} {t('admin.orders.dinarTun')}
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                      {row.shippingMethod}
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                      {row.status}
                    </TableCell>
                    <TableCell align="center">
                      {row.status === 'Pending' ? (
                        <>
                          <Grid className={classes.actionButtons}>
                            <Button
                              className={classes.cancelBtn}
                              onClick={() => openDialog(row.id, 'Canceled')}
                            >
                              {t('admin.orders.cancel')}
                            </Button>
                            <Button
                              className={classes.confirmBtn}
                              onClick={() => openDialog(row.id, 'Confirmed')}
                            >
                              {t('admin.orders.confirm')}
                            </Button>
                          </Grid>
                        </>
                      ) : (
                        '- -'
                      )}
                    </TableCell>

                    {/* CONFIRM ACTION MODAL */}
                    <Modal
                      open={isDialogOpen}
                      onClose={closeDialog}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box className={classes.modalBox}>
                        <IconButton
                          aria-label="close"
                          onClick={closeDialog}
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
                              {t('admin.orders.updateStatus')}
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              className={classes.textDelete}
                              sx={{ fontWeight: 'bold', textAlign: 'center' }}
                            >
                              {t('admin.orders.confirmAction')}
                            </Typography>
                            <Box className={classes.bnt}>
                              <Button
                                fullWidth
                                variant="contained"
                                className={classes.btnDelete}
                                sx={{ fontWeight: 'bold' }}
                                onClick={closeDialog}
                              >
                                {t('admin.orders.no')}
                              </Button>

                              <Button
                                fullWidth
                                variant="outlined"
                                className={classes.btnCancel}
                                sx={{ fontWeight: 'bold' }}
                                onClick={() => {
                                  handleUpdateOrderStatus(
                                    selectedOrderId,
                                    selectedStatus
                                  );
                                  closeDialog();
                                }}
                              >
                                {t('admin.orders.yes')}
                              </Button>
                            </Box>
                            <Box className={classes.bnt}></Box>
                          </Stack>
                        </Box>
                      </Box>
                    </Modal>
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  <Typography variant="h6" p={5}>
                    {t('admin.returns.noData')}{' '}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 20, 100]}
        component="div"
        count={resultSearch.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

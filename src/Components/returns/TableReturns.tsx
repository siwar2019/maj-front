import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { t } from 'i18next';
import { TablePagination, Tooltip, Typography } from '@mui/material';
import { useStyles } from '../../styles/Returns';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ModalReturns } from './ModalReturns';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllReturns } from '../../_redux/actions/returns';
import { IReturns } from '../../types/returns';
import CircleLoading from '../circleLoading/CircleLoading';
import { formatDate, formatDateToCustomFormat } from '../../common';
import { IPropsTableReturns } from '../../types/props/returns';
export default function TableReturns(props: IPropsTableReturns) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [select, setSelected] = useState(Number);
  const [orderId, setOrderId] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const { loader } = useAppSelector((state) => state.returns);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const { search, selectedDate } = props;
  useEffect(() => {
    setLoading(true);
    dispatch(getAllReturns());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  const { returns } = useAppSelector((state) => state.returns);
  const [resultSearch, setResultSearch] = useState([...returns]);
  const handleOpen = (selectedId: number, id: number) => {
    setOpen(true);
    setOrderId(id);
    setSelected(selectedId);
  };
  const handleClose = () => setOpen(false);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    if (search || selectedDate) {
      const filtered = returns.filter(
        (filteredReturns: IReturns) =>
          (filteredReturns.Costumer.firstName
            .toLowerCase()
            .includes(search.toLowerCase()) ||
            filteredReturns.Costumer.lastName
              ?.toLowerCase()
              .includes(search.toLowerCase()) ||
            filteredReturns.Order.ref
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            filteredReturns.raison
              .toLowerCase()
              .includes(search.toLowerCase())) &&
          (  (selectedDate
           &&  formatDateToCustomFormat(
                filteredReturns.Order.orderDate
              ).includes(formatDateToCustomFormat(selectedDate))
            )  || !selectedDate)
      );
      setResultSearch(filtered);
      setPage(0);
    } else {
      setResultSearch(returns);
    }
  }, [search, selectedDate, returns]);

  const nbr = resultSearch.length;

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow sx={{ borderRadius: '20px !important' }}>
              <TableCell
                align="center"
                className={classes.StyledTableCell}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.returns.custumer')}
              </TableCell>
              <TableCell
                align="center"
                className={classes.StyledTableCell}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.returns.ref')}
              </TableCell>
              <TableCell
                align="center"
                className={classes.StyledTableCell}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.returns.date')}
              </TableCell>
              <TableCell
                align="center"
                className={classes.StyledTableCell}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.returns.reason')}
              </TableCell>
              <TableCell
                align="center"
                className={classes.StyledTableCell}
                sx={{ fontWeight: 'bold' }}
              >
                {t('admin.returns.Order')}
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
                .map((resultSearch: IReturns, index: number) => (
                  <TableRow key={index}>
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{ fontWeight: 'bold' }}
                    >
                      {resultSearch.Costumer.firstName}{' '}
                      {resultSearch.Costumer.lastName}
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                      {resultSearch.Order.ref}
                    </TableCell>

                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                      {formatDate(resultSearch.Order.orderDate)}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: 'bold' }}
                      className={classes.reason}
                    >
                      {resultSearch.raison}
                    </TableCell>

                    <TableCell align="center" className={classes.iconsAction}>
                      <Tooltip title="order">
                        <MoreHorizIcon
                          className={classes.moreBtn}
                          onClick={() =>
                            handleOpen(resultSearch.id, resultSearch.orderId)
                          }
                        />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  <Typography variant="h6" className={classes.noData}>
                    {t('admin.returns.noData')}{' '}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <ModalReturns
            open={open}
            handleClose={handleClose}
            selectedId={select}
            orderId={orderId}
            returnList={returns}
            formatDate={formatDate}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: t('all'), value: nbr }]}
        component="div"
        count={nbr}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

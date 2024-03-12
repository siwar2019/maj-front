import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { t } from 'i18next';
import { Switch, TablePagination, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from '../../styles/discount';
import DeleteDiscount from './DeleteDiscount';
import { EditDiscount } from './EditDiscount';
import { formatDateToCustomFormat } from '../../common';
import { IPropsTableDiscount } from '../../types/props/discount';
export default function TableDiscount(props: IPropsTableDiscount) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const classes = useStyles();
  const { search, selectedDate, discountSelected, statusSelected } = props;
  const label = {
    inputProps: {
      [t('admin.discount.ariaLabel')]: t('admin.discount.switchDemo'),
    },
  };
  const discount = [
    {
      id: 71,
      name: 'summer  2036',
      discount: '80%',
      startDate: '01/15/2023', //mm-dd-yy
      endDate: '12/10/2023',
      description: 'test',
      active: '0',
    },
    {
      id: 72,
      name: 'summer  2036',
      discount: '80%',
      startDate: '12/10/2023',
      endDate: '10/1/2023',
      description: 'test',
      active: '1',
    },
    {
      id: 73,
      name: 'summer  2036',
      discount: '80%',
      startDate: '01/10/2023',
      endDate: '10/1/2023',
      description: 'test',
      active: '0',
    },
    {
      id: 15,
      name: 'summer  2030',
      discount: '50%',
      startDate: '01/10/2023',
      endDate: '10/1/2023',
      description: 'hello',
      active: '1',
    },
    {
      id: 85,
      name: 'summer  2012',
      discount: '10%',
      startDate: '02/25/2023',
      endDate: '09/1/2023',
      description: 'test',
      active: '1',
    },
    {
      id: 5,
      name: 'test  2011',
      discount: '25%',
      startDate: '02/25/2023',
      endDate: '09/1/2023',
      description: 'test',
      active: '1',
    },
  ];

  const handelOpenDelete = (id: number) => {
    setOpenDelete(true);
  };
  const handelOpenEdit = (id: number) => {
    setOpenEdit(true);
  };
  const handleCloseDelete = () => setOpenDelete(false);
  const handelCloseEdit = () => setOpenEdit(false);
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

  const [resultSearch, setResultSearch] = React.useState([...discount]);

  useEffect(() => {
    if (search || discountSelected || selectedDate || statusSelected) {
      const filtered = discount.filter(
        (discount) =>
          discount.discount.includes(discountSelected) &&
          (!selectedDate || (selectedDate
           && formatDateToCustomFormat(discount.startDate).includes(
                formatDateToCustomFormat(selectedDate)
              ) ||
              formatDateToCustomFormat(discount.endDate).includes(
                formatDateToCustomFormat(selectedDate)
              ))
            ) &&
          (discount.name.toLowerCase().includes(search.toLowerCase()) ||
            discount.description.toLowerCase().includes(search)) &&
          discount.active.includes(statusSelected)
      );

      setResultSearch(filtered);
      setPage(0);
    } else {
      setResultSearch(discount);
    }
  }, [search, discountSelected, selectedDate, statusSelected]);
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ overflowX: 'auto' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow sx={{ borderRadius: '20px !important' }}>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.discount.name')}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.discount.description')}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.discount.statDate')}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.discount.endDate')}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.discount.discount')}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.discount.status')}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.discount.action')}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultSearch.length > 0 ? (
                resultSearch
                  .slice(startIndex, endIndex)
                  .map((resultSearch, index) => (
                    <TableRow key={index}>
                      <TableCell
                        align="center"
                        component="th"
                        scope="row"
                        sx={{ fontWeight: 'bold' }}
                      >
                        {resultSearch.name}
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                        {resultSearch.description}
                      </TableCell>

                      <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                        {resultSearch.startDate}
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                        {resultSearch.endDate}
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                        {resultSearch.discount}
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                        <Switch {...label} className={classes.activeSwitch} />
                      </TableCell>

                      <TableCell align="center" className={classes.iconsAction}>
                        <Tooltip title="Edit">
                          <EditIcon
                            onClick={() => handelOpenEdit(resultSearch.id)}
                            className={classes.iconToolip}
                          />
                        </Tooltip>
                        <Tooltip title="Delete">
                          <DeleteIcon
                            onClick={() => handelOpenDelete(resultSearch.id)}
                            className={classes.iconToolip}
                          />
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    <Typography variant="h6" className={classes.noData}>
                      {t('admin.discount.noData')}{' '}
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 100]}
          component="div"
          count={resultSearch.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <DeleteDiscount
          openDelete={openDelete}
          handleCloseDelete={handleCloseDelete}
        />
        <EditDiscount openEdit={openEdit} handelCloseEdit={handelCloseEdit} />
      </Paper>
    </>
  );
}

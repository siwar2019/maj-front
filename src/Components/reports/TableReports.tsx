import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { t } from 'i18next';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Paper from '@mui/material/Paper';
import { useStyles } from '../../styles/report';
import ClearIcon from '@mui/icons-material/Clear';

const TableReports = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
const handleClear=(state:Date) => {
  switch (state) {
    case selectedStartDate : return setSelectedStartDate(null)
    case selectedEndDate : return setSelectedEndDate(null)
  }
}
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleStartDateChange = (newDate: Date | null) => {
    setSelectedStartDate(newDate);
  };
  const handleEndDateChange = (newDate: Date | null) => {
    setSelectedEndDate(newDate);
  };

  const report = [
    {
      date: '25/08/2023',
      product: 'pull',
      origPrice: '150',
      price: '200',
      quantity: '20',
      subtotal: '4.000',
    },
    {
      date: '30/08/2023',
      product: 'chemise',
      origPrice: '80',
      price: '120',
      quantity: '4',
      subtotal: '500',
    },
  ];

  const filteredReport = report.filter((report) => {
    if (selectedStartDate && selectedEndDate) {
      const reportDate = dayjs(report.date, 'DD/MM/YYYY');
      const startDate = dayjs(selectedStartDate);
      const endDate = dayjs(selectedEndDate);
      return (
        reportDate.isAfter(startDate.startOf('day')) &&
        reportDate.isBefore(endDate.endOf('day'))
      );
    }
    return true;
  });

  const startDateDisabledDays =
    selectedStartDate !== null ? selectedStartDate : undefined;

  return (
    <>
      <Box className={classes.boxList}>
        <Typography
          sx={{ fontWeight: '700' }}
          variant="h4"
          className={classes.orderTitle}
        >
          {t('admin.report.title')}{' '}
        </Typography>
        <Box className={classes.boxDate}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box className={classes.searchContainer}>
              <DatePicker
                label={t('admin.report.start')}
                value={selectedStartDate}
                onChange={handleStartDateChange}
                className={classes.dateStyle}
              />
              {selectedStartDate && (
                <ClearIcon
                  className={classes.resetButton}
                  onClick={() => handleClear(selectedStartDate)}
                >
                  {t('admin.clear')}
                </ClearIcon>
              )}
            </Box>
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box className={classes.searchContainer}>
              <DatePicker
                label={t('admin.report.end')}
                value={selectedEndDate}
                onChange={handleEndDateChange}
                minDate={startDateDisabledDays}
                className={classes.dateStyle}
              />
              {selectedEndDate && (
                <ClearIcon
                  className={classes.resetButton}
                  onClick={() => handleClear(selectedEndDate)}
                >
                  {t('admin.clear')}
                </ClearIcon>
              )}
            </Box>
          </LocalizationProvider>
        </Box>
      </Box>

      <Box className={classes.Box}>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.report.date')}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.report.product')}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.report.originPrice')}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.report.price')}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.report.quantity')}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.StyledTableCell}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('admin.report.subtotal')}
                </TableCell>
              </TableRow>
            </TableHead>
            {filteredReport.length === 0 ? (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    <Typography variant="body1" className={classes.date}>
                      {t('admin.report.noReport')}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <>
                {' '}
                {filteredReport
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((filteredReport, index) => (
                    <TableBody key={index}>
                      <TableRow>
                        <TableCell
                          align="center"
                          component="th"
                          scope="row"
                          sx={{ fontWeight: 'bold' }}
                        >
                          {filteredReport.date}
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          {filteredReport.product}
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          {filteredReport.origPrice}
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          {filteredReport.price}
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          {filteredReport.quantity}
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          {filteredReport.subtotal}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ))}
              </>
            )}
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 20, 100]}
          component="div"
          count={report.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );
};

export default TableReports;

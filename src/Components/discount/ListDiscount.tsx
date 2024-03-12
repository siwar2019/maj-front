import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import { t } from 'i18next';
import { useState } from 'react';
import { useStyles } from '../../styles/discount';
import TableDiscount from './TableDiscount';
import { AddDiscount } from './AddDiscount';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../../app.css';
import ClearIcon from '@mui/icons-material/Clear';

const ListDiscount = () => {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const [discountSelected, setDiscountSelected] = useState('');
  const [statusSelected, setStatusSelected] = useState('');
  const [status, setStatus] = useState('');
  const handleClear = (state: string | Date) => {
    switch (state) {
      case search:
        return setSearch('');
      case selectedDate:
        return setSelectedDate(null);
      case discountSelected:
        return setDiscountSelected('');
      case status:
        return (
        setStatusSelected(''),setStatus(''))
    }
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
  const uniqueList = new Set<string>();
  discount.forEach((discountValues) => {
    uniqueList.add(discountValues.discount);
  });
  const discountList = [...uniqueList];
  const handelOpen = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => setOpenAdd(false);
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
  };
  const handleDiscount = (e: any) => {
    setDiscountSelected(e.target.value);
  };
  const handleStatus = (e: any) => {
    if (e.target.value === 'Active') {
      setStatusSelected('1');
      setStatus('Active');
    } else {
      setStatusSelected('0');
      setStatus('Inactive');
    }
  };

  const statusList = ['Active', 'Inactive'];
  return (
    <>
      <Box className={classes.global}>
        <Box className={classes.gridBtn}>
          <Typography sx={{ fontWeight: '700' }} variant="h4">
            {t('admin.discount.listDiscount')}{' '}
          </Typography>
          <Button
            startIcon={<AddCircleOutlineIcon />}
            variant="contained"
            className={classes.addDiscount}
            sx={{ fontWeight: 'bold' }}
            onClick={handelOpen}
          >
            {' '}
            {t('admin.discount.addDiscount')}
          </Button>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={2} className={classes.gridBox}>
          <Grid item xs={3} md={3} lg={2} className={classes.searchBox}>
            <TextField
              fullWidth
              id="standard-basic"
              label={t('admin.orders.search')}
              variant="outlined"
              value={search}
              InputLabelProps={{
                sx: {
                  color: '#707070',
                  '&.Mui-focused': {
                    color: 'black',
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {search.length > 0 && (
                      <>
                        <IconButton
                          onClick={() => handleClear(search)}
                          className={classes.iconButton}
                          edge="end"
                        >
                          <ClearIcon className={classes.ClearIcon} />
                        </IconButton>
                      </>
                    )}
                    {search.length === 0 && (
                      <SearchIcon
                        className={classes.icon}
                        sx={{
                          fontSize: '16px !important',
                        }}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              onChange={(e) => handleSearch(e)}
              sx={{
                '& .css-v4u5dn-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before ':
                  {
                    borderBottom: '0px !important',
                  },
                '.css-l4u8b9-MuiInputBase-root-MuiInput-root': {
                  marginTop: '32px !important',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'black !important',
                  },
                '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                  marginLeft: '10px !important',
                },
              }}
            />
          </Grid>

          <Grid item xs={3} md={3} lg={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box className={classes.searchContainer}>
                <DatePicker
                  label={t('admin.orders.selectDate')}
                  value={selectedDate}
                  onChange={handleDateChange}
                  className={classes.dateStyle}
                />
                {selectedDate && (
                  <ClearIcon
                    className={classes.resetButton}
                    onClick={() => handleClear(selectedDate)}
                  >
                    {t('admin.clear')}
                  </ClearIcon>
                )}
              </Box>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3} md={3} lg={2}>
            <FormControl fullWidth
           className={classes.formSelect}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                    left: '40px !important',
                  },
                }}
              >
                {t('admin.discount.discount')}
              </InputLabel>
              <Grid className={classes.searchContainer}>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={discountSelected}
                  label={t('admin.discount.discount')}
                  onChange={handleDiscount}
                >
                  {discountList.map((item: string) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
                {discountSelected.length > 0 && (
                  <ClearIcon
                    className={classes.resetButton}
                    onClick={() => handleClear(discountSelected)}
                  >
                    {t('admin.clear')}
                  </ClearIcon>
                )}
              </Grid>
            </FormControl>
          </Grid>

          <Grid item xs={3} md={3} lg={2}>
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth
            className={classes.formSelect}
            >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                    '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                      left: '40px !important',
                    },
                  }}
                >
                  {t('admin.discount.status')}
                </InputLabel>
                <Grid className={classes.searchContainer}>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label={t('admin.discount.status')}
                    onChange={handleStatus}
                  >
                    {statusList.map((item: string) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                  {status.length > 0 && (
                    <ClearIcon
                      className={classes.resetButton}
                      onClick={()=>handleClear(status)}
                    >
                      {t('admin.clear')}
                    </ClearIcon>
                  )}
                </Grid>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <TableDiscount
        search={search}
        selectedDate={selectedDate}
        discountSelected={discountSelected}
        statusSelected={statusSelected}
      />
      <AddDiscount openAdd={openAdd} handleCloseAdd={handleCloseAdd} />
    </>
  );
};

export default ListDiscount;

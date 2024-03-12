import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from '../../styles/category';
import { t } from 'i18next';
import TableOrders from './tableOrders';
import { ChangeEvent, useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks';
import IOrders from '../../types/orders';
import InputLabel from '@mui/material/InputLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../../app.css';
import ClearIcon from '@mui/icons-material/Clear';
const ListOrders = () => {
  const [search, setSearch] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [priceRange, setPriceRange] = useState([0, 0]);
  const defaultStatus = ['Confirmed', 'Pending', 'Canceled'];
  const { order } = useAppSelector((state) => state.orders);
  const classes = useStyles();
  const uniqueList = new Set<string>();
  order.forEach((order: IOrders) => {
    //here we have added only the unique values to the set initially declared
    uniqueList.add(order.shippingMethod.toLocaleLowerCase());
  });
  //convert the set to an array(object =>array)
  const shippingMethodArray = [...uniqueList];

  const minDefaultPriceValue = order.reduce((minPrice, orderItem) => {
    return Math.min(minPrice, orderItem.totalPrice);
  }, Infinity);

  const maxDefaultPriceValue = order.reduce((maxPrice, orderItem) => {
    return Math.max(maxPrice, orderItem.totalPrice);
  }, 0);
  //update the useState values
  useEffect(() => {
    //max price and default price in order list
    if (order.length > 0) {
      const minDefaultPrice = order?.reduce((minPrice, orderItem) => {
        return Math.min(minPrice, orderItem.totalPrice);
      }, Infinity);
      const maxDefaultPrice = order?.reduce((maxPrice, orderItem) => {
        return Math.max(maxPrice, orderItem.totalPrice);
      }, 0);

      // Set the price range state after calculating min and max prices
      setPriceRange([minDefaultPrice, maxDefaultPrice]);
    }
  }, [order]);
const handleClear = (state: string | Date) => {
  switch (state) {
    case valueInput:
      return setValueInput('');
    case selectedDate:
      return setSelectedDate(null);
    case shippingMethod:
      return setShippingMethod('');
    case search:
      return setSearch('');
  }
};
  const handleChange = (event: any, newValue: any) => {
    setPriceRange(newValue);
  };
  const handleDeliveryMethod = (e: any) => {
    setShippingMethod(e.target.value);
  };
  const handleStatus = (e: any) => {
    setValueInput(e.target.value);
  };
  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
  };
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <Box>
      <Box className={classes.categoryHeader}>
        <Typography
          className={classes.categoryTitle}
          variant="h4"
          sx={{ fontWeight: 'bold' }}
        >
          {t('admin.orders.listOrders')}
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} className={classes.gridBoxx}>
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

                '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                  paddingLeft: '10px !important',
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

          <Grid item xs={3} md={3} lg={2} className={classes.marginDate}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box className={classes.filterContainer}>
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
                  {t('admin.orders.deliveryMethod')}
                </InputLabel>
                <Grid className={classes.searchContainer}>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={shippingMethod}
                    label={t('admin.orders.status')}
                    onChange={handleDeliveryMethod}
                  >
                    {shippingMethodArray.map((shippingMethod: string) => (
                      <MenuItem key={shippingMethod} value={shippingMethod}>
                        {shippingMethod}
                      </MenuItem>
                    ))}
                  </Select>
                  {shippingMethod.length > 0 && (
                    <ClearIcon
                      className={classes.resetButton}
                      onClick={() => handleClear(shippingMethod)}
                    >
                      {t('admin.clear')}
                    </ClearIcon>
                  )}
                </Grid>
              </FormControl>
            </Box>
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
                    labelId="id-select"
                    id="id-select"
                    value={valueInput}
                    label={t('admin.orders.status')}
                    onChange={handleStatus}
                  >
                    {defaultStatus.map((item: string) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                  {valueInput.length > 0 && (
                    <ClearIcon
                      className={classes.resetButton}
                      onClick={() => handleClear(valueInput)}
                    >
                      {t('admin.clear')}
                    </ClearIcon>
                  )}
                </Grid>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={6} md={6} lg={3}>
            <Box className={classes.filterBox}>
              <Typography
                sx={{
                  fontWeight: 700,
                  marginRight: '15px',
                  marginTop: '8px !important',
                }}
              >
                {t('admin.products.Price')}
              </Typography>

              <Box>
                <Typography className={classes.boxBorder} gutterBottom>
                  {priceRange[0]}
                </Typography>
              </Box>
              <Slider
                value={priceRange}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={order.length > 0 ? minDefaultPriceValue : 0}
                max={order.length > 0 ? maxDefaultPriceValue : 0}
                step={1}
                aria-labelledby="range-slider"
                className={classes.sliderFilter}
              />
              <Box>
                {' '}
                <Typography className={classes.boxBorder} gutterBottom>
                  {priceRange[1]}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <TableOrders
        search={search}
        shippingMethod={shippingMethod}
        valueInput={valueInput}
        selectedDate={selectedDate}
        maxPrice={priceRange[1]}
        minPrice={priceRange[0]}
      />
    </Box>
  );
};
export default ListOrders;

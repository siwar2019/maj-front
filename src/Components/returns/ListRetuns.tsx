import {
  Box,
  InputAdornment,
  TextField,
  Grid,
  Typography,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from '../../styles/products';
import { useState } from 'react';
import TableReturns from './TableReturns';
import { t } from 'i18next';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ClearIcon from '@mui/icons-material/Clear';

const ListReturns = () => {
  const [search, setSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const classes = useStyles();

  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
  };
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Box className={classes.global}>
        <Typography sx={{ fontWeight: '700' }} variant="h4">
          {t('admin.returns.returns')}
        </Typography>
      </Box>
      <Grid container spacing={2} className={classes.boxFlex}>
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
                        onClick={() => setSearch('')}
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
            <Box>
              <Box className={classes.searchContainer}>
                <DatePicker
                  label={t('admin.orders.selectDate')}
                  value={selectedDate}
                  onChange={handleDateChange}
                  className={classes.dateStyle}
                  sx={{
                    marginRight: '10px !important',
                  }}
                />
                {selectedDate && (
                  <ClearIcon
                    className={classes.resetButton}
                    sx={{
                      padding: '1px !important',
                      marginRight: '10px !important',
                    }}
                    onClick={() => setSelectedDate(null)}
                  >
                    {t('admin.clear')}
                  </ClearIcon>
                )}
              </Box>
            </Box>
          </LocalizationProvider>
        </Grid>
      </Grid>

      <TableReturns search={search} selectedDate={selectedDate} />
    </>
  );
};

export default ListReturns;

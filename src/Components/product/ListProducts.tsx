import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
  Slider,
  Grid,
  FormControl,
  InputLabel,
  IconButton,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from '../../styles/products';
import { t } from 'i18next';
import AddProducts from './addProducts/Addproducts';
import AddProductsV3 from './addProducts/AddproductsV3';
import { useEffect, useState } from 'react';
import TableProducts from './Tableproducts';
import { useAppSelector } from '../../hooks';
import { ICategory } from '../../types/products';
import '../../app.css';
import ClearIcon from '@mui/icons-material/Clear';

const ListProducts = () => {
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(true);
  };
  const handleClear = () => {
    setSearch('')
  };
  const handleClose = () => setOpen(false);
  const { categories } = useAppSelector((state) => state.categories);
  const [search, setSearch] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [valueInput, setValueInput] = useState('');
  const classes = useStyles();
  const { products } = useAppSelector((state) => state.products);
  const handleSearchCategory = (e: any) => {
    const newValue = e.target.value.toLowerCase();
    setSearchCategory(newValue);
    setValueInput(newValue);

    setSelectedCategory(newValue);
  };
  const handleSearchName = (e: any) => {
    setSearch(e.target.value);
  };
  const clearFilter = () => {
    setSelectedCategory('');
    setValueInput('');
    setSearchCategory('');
  };
  const minDefaultPrice = products.reduce((minPrice, product) => {
    const purchasePrices = product.productPrice.purchasePrice;
    return  Math.min(minPrice,purchasePrices)
  }, Infinity);
  const maxDefaultPriceValue = products.reduce((maxPrice, product) => {
    const purchasePrice=product.productPrice.purchasePrice
    return Math.max(maxPrice, purchasePrice);
  }, 0);
  const [priceRange, setPriceRange] = useState([0, 0]); // Initial price range
  //update the useState values
  useEffect(() => {
    if (products.length > 0) {
      //max price and default price in product list
      const minDefaultPrice = products.reduce((minPrice, product) => {
        const purchasePrices = product.productPrice.purchasePrice;
        return  Math.min(minPrice,purchasePrices)
      }, Infinity);

      const maxDefaultPriceValue = products.reduce((maxPrice, product) => {
    const purchasePrice=product.productPrice.purchasePrice
    return Math.max(maxPrice, purchasePrice);
  }, 0);

      // Set the price range state after calculating min and max prices
      setPriceRange([minDefaultPrice, maxDefaultPriceValue]);
    }
  }, [products]);
  const handleChange = (event: any, newValue: any) => {
    setPriceRange(newValue);
  };

  return (
    <>
      <Box className={classes.global}>
        <Box className={classes.product}>
          <Typography sx={{ fontWeight: '700' }} variant="h4">
            {t('admin.products.list')}{' '}
          </Typography>
          <Button
            startIcon={<AddCircleOutlineIcon />}
            variant="contained"
            className={classes.addproduct}
            sx={{ fontWeight: 'bold' }}
            onClick={handelOpen}
          >
            {' '}
            {t('admin.products.addProduct')}
          </Button>
        </Box>
      </Box>

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
                        onClick={() =>handleClear()}
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
            onChange={(e) => handleSearchName(e)}
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

        <Grid item xs={3} md={3} lg={2} className={classes.selectBox}>
          <FormControl
            fullWidth
            className={classes.formCatreg}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                '& .MuiFormLabel-root-MuiInputLabel-root': {
                  left: '40px !important',
                },
              }}
            >
              {t('admin.categories.category')}
            </InputLabel>
            <Grid className={classes.searchContainer}>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={valueInput}
                label={t('admin.categories.category')}
                onChange={handleSearchCategory}
              >
                {categories.map((categories: ICategory) => (
                  <MenuItem value={`${categories.name}`.toLocaleLowerCase()}>
                    {categories.name}
                  </MenuItem>
                ))}
              </Select>
              {valueInput.length > 0 && (
                <ClearIcon
                  className={classes.resetButton}
                  onClick={() => clearFilter()}
                >
                  {t('admin.clear')}
                </ClearIcon>
              )}
            </Grid>
          </FormControl>
        </Grid>

        <Grid item xs={6} md={6} lg={4}>
          <Box className={classes.filterBox}>
            <Typography
              sx={{
                fontWeight: 700,
                marginRight: '15px',
                marginLeft: '5px',
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
              min={products.length > 0 ? minDefaultPrice : 0}
              max={products.length > 0 ? maxDefaultPriceValue : 0}
              step={1}
              aria-labelledby="range-slider"
              className={classes.sliderFilter}
             
            />{' '}
            <Typography className={classes.boxBorder} gutterBottom>
              {priceRange[1]}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <TableProducts
        search={search}
        searchCategory={searchCategory}
        maxPrice={priceRange[1]}
        minPrice={priceRange[0]}
        selectedCategory={selectedCategory}
      />
      {/* <AddProducts open={open} handleClose={handleClose} /> */}
      <AddProductsV3 open={open} handleClose={handleClose} />
    </>
  );
};

export default ListProducts;

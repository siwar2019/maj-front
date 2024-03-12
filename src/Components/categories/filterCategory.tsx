import { useEffect } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Grid,
  Stack,
  Button,
} from '@mui/material';
import { useState } from 'react';
import { useStyles } from '../../styles/category';
import { useTranslation } from 'react-i18next';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { ICategories } from '../../types/categories';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ICategory } from '../../types/products';
import { setSelectedAccordionId } from '../../_redux/reducer/store';
import { IPropsFilterCategory } from '../../types/props/category';
const FilterCategory = (props: IPropsFilterCategory) => {
  const {
    searchItem,
    idFiltered,
    setExpandedAccordionId,
    searchCategory,
    setSearchCategory,
    parentList,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [filterState, setFilterState] = useState(false);
  const { categories } = useAppSelector((state) => state.categories);
  const [resultSearch, setResultSearch] = useState([...categories]);
  // Add a variable to keep track of the selected accordion
  const selectedAccordionId = useAppSelector(
    (state: any) => state.globalStore.selectedAccordionId
  );
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const handleClear = () => {
    setSearchCategory('');
  };
  const handleChange = (e: any) => {
    setExpandedAccordionId([]);

    setSearchCategory(e.target.value);
  };
  useEffect(() => {
    if (searchCategory) {
      const filtered = categories.filter((element: ICategory) =>
        element.name.toLowerCase().includes(searchCategory.toLowerCase())
      );
      dispatch(setSelectedAccordionId(filtered.length > 0 ? idFiltered : null));

      setResultSearch(filtered); //resultsearch is the result of filter
      setFilterState(true); //if search textfield is filled show text "filtered Result"
    } else {
      setResultSearch(categories);
      setFilterState(false);
      // Reset selectedAccordionId when there's no search query
      dispatch(setSelectedAccordionId(null));
    }
  }, [searchCategory, categories, selectedAccordionId, idFiltered]);
  const resetSearch = () => {
    setExpandedAccordionId([]);
  };
  return (
    <Box>
      <TextField
        id="standard-basic"
        label={t('admin.orders.search')}
        value={searchCategory}
        sx={{ fontWeight: '700', maxWidth: '92% !important' }}
        className={classes.searchField}
        onChange={handleChange}
        variant="standard"
        InputLabelProps={{
          sx: {
            color: '#707070', // Change label color to black when focused
            '&.Mui-focused': {
              color: 'black',
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {searchCategory.length > 0 && (
                <>
                  <IconButton
                    sx={{
                      padding: '1px !important',
                      marginRight: '1px !important',
                      fontSize: '16px !important',
                      '&:hover': {
                        backgroundColor: '#EFEFEF !important',
                        padding: '1px !important',
                      },
                    }}
                    onClick={() => handleClear()}
                    edge="end"
                  >
                    <ClearIcon
                      className={classes.resetButton}
                      onClick={resetSearch}
                    />
                  </IconButton>
                </>
              )}

              {searchCategory.length === 0 && (
                <SearchIcon
                  className={classes.icon}
                  sx={{
                    fontSize: '16px !important',
                    margin: '23px !important',
                  }}
                />
              )}
            </InputAdornment>
          ),
        }}
      />
      <Box
        className={classes.searchContainer}
        sx={{ zIndex: '999', position: 'absolute' }}
      >
        {filterState && (
          <Typography
            variant="body2"
            className={classes.parent}
            sx={{ fontSize: '10px', marginLeft: '10px ' }}
          >
            {t('admin.categories.suggestedSearch')}{' '}
          </Typography>
        )}

        {filterState &&
          resultSearch.map((category: ICategories) => (
            <>
              <Grid key={category.id} className={classes.searchResult}>
                <Stack>
                  <Button
                    onClick={() => searchItem(category.id, category.name)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`${classes.buttonSearch} ${isFocused && classes.focusedButton }`}
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      color: 'black',
                      fontSize: '11px',
                    }}
                  >
                    {category.name}
                  </Button>
                  <Typography
                    className={classes.parent}
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginLeft: '8px !important',
                    }}
                  >
                    {parentList.has(category.id) &&
                      parentList.get(category.id).name}
                  </Typography>
                </Stack>
              </Grid>
            </>
          ))}
      </Box>
    </Box>
  );
};
export default FilterCategory;

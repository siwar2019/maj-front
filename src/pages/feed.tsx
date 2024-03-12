import { Box } from '@mui/system';
import { Route, Routes, useLocation } from 'react-router-dom';
import ListCategories from '../Components/categories/listCategories';
import ListOptions from '../Components/options/listOptions';
import ListOrders from '../Components/orders/listOrders';
import Product from '../Components/product/Product';
import ListReturns from '../Components/returns/ListRetuns';
import { ListItems } from '../Components/product/ListItems';
import ListDiscount from '../Components/discount/ListDiscount';
import Dashboard from '../Components/dashboard/Dashboard';
import HandleSubOption from '../Components/options/handleSubOption';
import TableReports from '../Components/reports/TableReports';
import Profile from '../Components/profile/Profile';
import NotFound from './NotFound';
import FilterCategory from '../Components/categories/filterCategory';
import searchItem from '../Components/categories/listCategories';
import setExpandedAccordionId from '../Components/categories/listCategories';
import setSearchCategory from '../Components/categories/listCategories';
const Feed = () => {
  const location = useLocation();
  const commonStyles = {
    padding: '25px',
  };
  const routeSpecificStyles =
    location.pathname === '/Dashboard' || location.pathname === '/'
      ? {}
      : commonStyles;
  return (
    <Box style={routeSpecificStyles}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/Products/:ProductsId" element={<ListItems />} />
        <Route path="/Categories" element={<ListCategories />} />
        <Route path="/Settings" element={<ListOptions />} />
        <Route path="/Settings/:itemId" element={<HandleSubOption />} />
        <Route path="/Orders" element={<ListOrders />} />
        <Route path="/Report" element={<TableReports />} />
        <Route path="/Returns" element={<ListReturns />} />
        <Route path="/Returns/:id" element={<ListReturns />} />
        <Route path="/Discounts" element={<ListDiscount />} />
        <Route
          path="/filterCategory"
          element={
            <FilterCategory
              searchItem={searchItem}
              idFiltered={0}
              setExpandedAccordionId={setExpandedAccordionId}
              searchCategory={''}
              setSearchCategory={setSearchCategory}
              parentList={[]}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default Feed;

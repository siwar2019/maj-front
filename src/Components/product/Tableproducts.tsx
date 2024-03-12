/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { t } from 'i18next';
import { useEffect } from 'react';
import { getAllProducts } from '../../_redux/actions/products';
import { useAppDispatch, useAppSelector } from '../../hooks';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { TablePagination, Tooltip, Typography } from '@mui/material';
import { ICategory, IProducts } from '../../types/products';
import { useStyles } from '../../styles/products';
import DeleteProducts from './DeleteProducts';
import { useNavigate } from 'react-router-dom';
import CircleLoading from '../circleLoading/CircleLoading';
import EditProduct from './EditProduct';
import { IPropsTableProduct } from '../../types/props/product';

export default function TableProducts(props: IPropsTableProduct) {
  const dispatch = useAppDispatch();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [select, setSelectedProduct] = React.useState(Number);
  const [open, setOpen] = React.useState(false);
  const [productName, setProductName] = React.useState('');
  const [openEdit, setOpenEdit] = React.useState(false);
  const { products } = useAppSelector((state) => state.products);
  const [resultSearch, setResultSearch] = React.useState([...products]);
  console.log('%cTableproducts.tsx line:37 products', 'color: #007acc;', products);
  const { loader } = useAppSelector((state) => state.products);
  const classes = useStyles();
  const { search, searchCategory, maxPrice, minPrice, selectedCategory } =
    props;
  const handleOpen = (id: number, name: string) => {
    setOpen(true);
    setSelectedProduct(id);
    setProductName(name);
  };

  const navigate = useNavigate();
  const [loading, setLoading] = React.useState<boolean>(true);

  const handelOpenView = (ProductsId: number) => {
    navigate(`/Products/${ProductsId}`);
  };
  const handelOpenEdit = (id: number) => {
    setOpenEdit(true);
    setSelectedProduct(id);
  };

  const handleClose = () => setOpen(false);
  const handleCloseEdit = () => setOpenEdit(false);

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
    setLoading(true);
    dispatch(getAllProducts());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    if (searchCategory || search || maxPrice || minPrice) {
      const filtered = products.filter(
        (product) =>   
//filter by category
          // product.Category.some((category) =>
          //   category.name.toLowerCase().includes(selectedCategory.toLowerCase())
          // )
          // &&

         (product.name.toLowerCase().includes(search.toLowerCase())
           ||
            product.refExterne.toLowerCase().includes(search.toLowerCase() )
          ||
         product.description.toLowerCase().includes(search.toLowerCase()) )
          &&
          product.productPrice.purchasePrice >= minPrice &&
          product.productPrice.purchasePrice <= maxPrice
      );
      setResultSearch(filtered);
      setPage(0);
    } else {
      setResultSearch(products);
    }
  }, [search, searchCategory, selectedCategory, minPrice, maxPrice]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              className={classes.StyledTableCell}
              sx={{ fontWeight: 'bold' }}
            >
              {t('admin.products.References')}
            </TableCell>
            <TableCell
              align="center"
              className={classes.StyledTableCell}
              sx={{ fontWeight: 'bold' }}
            >
              {t('admin.products.Name')}
            </TableCell>
            <TableCell
              align="center"
              className={classes.StyledTableCell}
              sx={{ fontWeight: 'bold', width: '100px !important' }}
            >
              {t('admin.products.categories')}
            </TableCell>
            <TableCell
              align="center"
              className={classes.StyledTableCell}
              sx={{ fontWeight: 'bold' }}
            >
              {t('admin.products.Description')}
            </TableCell>
            <TableCell
              align="center"
              className={classes.StyledTableCell}
              sx={{ fontWeight: 'bold' }}
            >
              {t('admin.products.Price')}
            </TableCell>

            <TableCell
              align="center"
              className={classes.StyledTableCell}
              sx={{ fontWeight: 'bold' }}
            >
              {t('admin.products.Action')}
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
              .map((row: IProducts, index) => (
                <TableRow key={index}>
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {row.refExterne}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    {row.name}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ fontWeight: 'bold', overflowWrap: 'anywhere' }}
                  >
                    {/* erp */}

                    {/* {row.Category.map(
                      (category: ICategory) => category.name
                    ).join(',')} */}
                    Man
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: 'bold' }}
                    className={classes.description}
                  >
                    {row.description}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    {row.productPrice.purchasePrice}  
                     {t('admin.orders.dinarTun')}
                  </TableCell>

                  <TableCell align="center" className={classes.iconsAction}>
                    <Tooltip title="view">
                      <RemoveRedEyeIcon
                        onClick={() => handelOpenView(row.id)}
                        className={classes.iconToolip}
                      />
                    </Tooltip>

                    <Tooltip title="Edit">
                      <EditIcon
                        className={classes.iconToolip}
                        onClick={() => handelOpenEdit(row.id)}
                      />
                    </Tooltip>
                    <Tooltip title="Delete">
                      <DeleteIcon
                        onClick={() => handleOpen(row.id, row.name)}
                        className={classes.iconToolip}
                      />
                    </Tooltip>
                  </TableCell>
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

        <DeleteProducts
          open={open}
          handleClose={handleClose}
          id={select}
          productName={productName}
        />
        <EditProduct
          handleCloseEdit={handleCloseEdit}
          openEdit={openEdit}
          id={select}
        />
      </Table>

      <TablePagination
        rowsPerPageOptions={[5, 20, 100]}
        component="div"
        count={resultSearch.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

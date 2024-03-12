import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { t } from 'i18next';
import { useState } from 'react';
import { useStyles } from '../../styles/products';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Carousel from 'react-material-ui-carousel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CheckCircle } from '@mui/icons-material';
import { EditItem } from './EditItem';
import DeleteItem from './DeleteItem';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getProductsWithVariant } from '../../_redux/actions/products';
import { useParams } from 'react-router-dom';
import { SubOptions, Variant } from '../../types/products';

import AddItem from './AddItem';
export const ListItems = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [variants, setVariants] = useState<Variant[]>([]);
  const [subOptionsList, setSubOption] = useState<SubOptions[]>([]);
  const [itemDeleted, setItemDeleted] = useState(0);
  const classes = useStyles();
  const { ProductsId } = useParams();
  const subOptionsArray = Object.values(subOptionsList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductsWithVariant(ProductsId as string));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const products = useAppSelector((state) => state.products.myProducts);
  useEffect(() => {
    setVariants(products.Variant);
  }, [products]);
  useEffect(() => {
    setSubOption(products.subOptions);
  }, [products.subOptions]);

  const handleCardClick = () => {
    setCurrentImage(
      (prev) => (prev + 1) % products.Variant[currentImage].image?.length
    );
  };
  const handelCloseEdit = () => {
    setOpenEdit(false);
  };

  const handelCloseDelete = () => {
    setOpenDelete(false);
  };
  const handelClick = () => {
    setOpenEdit(true);
  };
  const handelDelete = (deletedId: number) => {
    setOpenDelete(true);
    setItemDeleted(deletedId);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const search = (colorId: string) => {
    const subOptionColor = subOptionsArray.find(
      (item) => item.id === parseInt(colorId)
    );
    return subOptionColor?.description;
  };

  return (
    <Grid>
      <>
        <Box className={classes.product}>
          <Typography sx={{ fontWeight: '700' }} variant="h4">
            {products.name}
          </Typography>
          <Button
            startIcon={<AddCircleOutlineIcon />}
            variant="contained"
            className={classes.addproduct}
            sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
            onClick={() => setOpenAdd(true)}
          >
            {' '}
            {t('admin.products.addItem')}
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {variants &&
            variants.length > 0 &&
            variants.map((variant, variantIndex) => (
              <Card
                key={variant.id}
                className={classes.cardImg}
                onClick={handleCardClick}
              >
                {/* if variant has multiple images */}
                {variant.image.length > 1 ? (
                  <Carousel
                    autoPlay={false}
                    animation="slide"
                    indicators={false}
                    navButtonsAlwaysVisible={true}
                    navButtonsProps={{
                      style: {
                        backgroundColor: '#8080803d',
                        padding: '0px',
                        marginTop: '150px',
                      },
                    }}
                  >
                    {Array.isArray(variant.image)
                      ? variant.image.map(
                          (imgUrl: string, imgIndex: number) => (
                            <CardMedia
                              key={imgIndex}
                              component="img"
                              alt={`image-${variant.id}`}
                              className={classes.cardMedia}
                              image={`${process.env.REACT_APP_PATH_IMAGE}${imgUrl}`}
                            />
                          )
                        )
                      : variant.image
                          .split(',')
                          .map((imgUrl: string, imgIndex: number) => (
                            <CardMedia
                              key={imgIndex}
                              component="img"
                              alt={`image-${variant.id}`}
                              className={classes.cardMedia}
                              image={`${
                                process.env.REACT_APP_PATH_IMAGE
                              }${imgUrl.trim()}`}
                            />
                          ))}
                  </Carousel>
                ) : (
                  <CardMedia
                    component="img"
                    alt={`image-${variant.id}`}
                    className={classes.cardMedia}
                    image={`${process.env.REACT_APP_PATH_IMAGE}${variant.image}`}
                  />
                )}

                <CardContent>
                  <Box className={classes.RefColor}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: 'bold' }}
                    >
                      {variant.referenceVariant}
                    </Typography>
                    <Box className={classes.boxColor}>
                      <Typography>
                        <Grid
                          className={classes.color}
                          sx={{
                            backgroundColor:
                              subOptionsArray[variantIndex]?.description ||
                              'transparent',
                          }}
                        ></Grid>
                      </Typography>
                      <Typography>{search(variant.colorId)}</Typography>
                    </Box>
                  </Box>

                  <Box className={classes.RefColor}>
                    <Box className={classes.boxColor}>
                      {products.availability ? (
                        <>
                          <CheckCircle className={classes.check} />
                          <Typography
                            className={classes.red}
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{ fontWeight: 'bold' }}
                          >
                            {t('admin.products.Available')}
                          </Typography>
                        </>
                      ) : (
                        <>
                          <CheckCircle className={classes.notAvailable} />
                          <Typography
                            className={classes.red}
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{ fontWeight: 'bold' }}
                          >
                            {t('admin.products.notAvailable')}
                          </Typography>
                        </>
                      )}
                    </Box>
                    <Box>
                      <Tooltip title="Edit">
                        <EditIcon
                          className={classes.red}
                          onClick={handelClick}
                        />
                      </Tooltip>
                      <Tooltip title="Delete">
                        <DeleteIcon
                          className={classes.red}
                          onClick={() => handelDelete(variant.id)}
                        />
                      </Tooltip>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
        </Box>
      </>
      <AddItem openAdd={openAdd} handleCloseAdd={handleCloseAdd} />
      <EditItem openEdit={openEdit} handelCloseEdit={handelCloseEdit} />
      <DeleteItem
        openDelete={openDelete}
        handelCloseDelete={handelCloseDelete}
        ProductsId={ProductsId}
        variantId={itemDeleted}
      />
    </Grid>
  );
};

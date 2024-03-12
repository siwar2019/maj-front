import { createSlice } from '@reduxjs/toolkit';
import { IProducts, SubOptions, Variant } from '../../types/products';
import {
  createProduct,
  createProductV2,
  deleteproductById,
  getAllProducts,
  getProductsWithVariant,
} from '../actions/products';
import { deleteVariant } from '../actions/products';
import { sessionExpired } from '../../common';

export interface productsState {
  products: IProducts[];
  myProducts: IProducts;
  variants: Variant;
  subOptions: SubOptions;
  productList: IProducts[];
  loader: boolean;
}
const initialState: productsState = {
  products: [],
  myProducts: {
    id: 0,
    name: '',
   // purchasePrice: 0,
     price: 0,
    //ref: '',
    refExterne: '',
    description: '',
    availability: false,
    Category: [],
    categories: [],
    listItems: [],
    Variant: [],
    subOptions: [],
    productPrice: {
      purchasePrice: 0
    }
  },

  variants: {
    id: 0,
    image: '',
    productId: 0,
    referenceVariant: '',
    colorId: '',
    sizeId: '',
  },
  subOptions: {
    id: 0,
    name: '',
    description: '',
  },

  productList: [],
  loader: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    StepProducts: (state, action) => {
      state.myProducts = { ...state.myProducts, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.loader = false;
    });
    builder.addCase(getAllProducts.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getAllProducts.rejected, (state,{payload}:any) => {
      if (payload.response && payload.response.status && payload.response.status===401  ) {
        sessionExpired()
      }
    });
    builder.addCase(deleteproductById.fulfilled, (state, { payload }) => {
      const itemId = payload.data.id;
      state.products = state.products.filter(
        (products) => products.id !== itemId
      );
      return state;
    });
    // builder.addCase(createProduct.fulfilled, (state, { payload }) => {
    //   state.products = payload;
    // });
    //CREATE product v2 erp
    builder.addCase(createProductV2.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
    builder.addCase(getProductsWithVariant.fulfilled, (state, { payload }) => {
      state.myProducts = payload;
      //get a copy of myProducts in order to get used in next addCase deleteVariant
      state.productList = [payload];
    });

    builder.addCase(deleteVariant.fulfilled, (state, { payload }) => {
      if (payload.data && payload.data.length > 0) {
        const deletedVariantId = payload.data[0].id;
        state.productList = state.productList.map((product) => {
          if (product.Variant && product.Variant.length > 0) {
            //a new list filtred
            product.Variant = product.Variant.filter(
              (variant: Variant) => variant.id !== deletedVariantId
            );
          }

          return product;
        });
      }
      //update the list of  variants(myProducts)
      state.myProducts.Variant = state.productList[0].Variant;
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const { StepProducts } = productsSlice.actions;
export const productSelector = (state: productsState) => state;

export default productsSlice.reducer;

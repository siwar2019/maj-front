/**** Get All Products ****/

import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '../../_clientApi';
import { variantList } from '../../types/variants';
import { getAuthorizationHeader } from '../../common';
export const getAllProducts = createAsyncThunk(
  'users/getAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get('/get-all-products', {
        headers: getAuthorizationHeader(),

      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }





  
);

/**** delete Product ****/

export const deleteproductById = createAsyncThunk(
  'users/deleteproductById',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        'delete-product',
        { id },
        {
          headers:getAuthorizationHeader()

        }
      );
  
      return response.data;
    } catch (error) {

      return rejectWithValue(error);
    }
  }
);

/**** create  Product ****/

export const createProduct = createAsyncThunk(
  'users/createProduct',
  async ({ value }: { value: FormData }, { rejectWithValue }) => {
    try {
      const response = await clientApi.post('create-product-variants', value, {
        headers: {
          Authorization: `bearer ${localStorage.getItem('access_token')}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//create product v2
export const createProductV2 = createAsyncThunk(
  'users/createProduct',
  async ({ value }: { value: FormData }, { rejectWithValue }) => {
    try {
      const response = await clientApi.post('create-product', value, {
        headers: getAuthorizationHeader(),

      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
/****** get all products with variants***** */

export const getProductsWithVariant = createAsyncThunk(
  'users/getProductsWithVariant',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await clientApi.get(
        `/Get-product-with-variants?id=${id}`,
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//delete variant
export const deleteVariant = createAsyncThunk(
  'users/deleteVariant',
  async ({ id, variants }: variantList, { rejectWithValue }) => {
    try {
      const response = await clientApi.put(
        'delete-product-variants',
        { id, variants },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

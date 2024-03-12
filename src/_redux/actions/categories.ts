/**** Get All categories ****/

import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '../../_clientApi';
import { Categories, EditCategories } from '../../types/categories';
import { getAuthorizationHeader } from '../../common';
export const getAllCategories = createAsyncThunk(
  'users/getAllCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get('/get-all-category', {
        headers: getAuthorizationHeader(),

      }
      );
      return response.data.data
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//create category
export const createCategory = createAsyncThunk(
  'users/category',
  async ({ value }: { value: Categories }, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        '/create-category-subcategory',
        value,
        {
          headers:getAuthorizationHeader()
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//delete category
export const deleteCategory = createAsyncThunk(
  'users/deleteCategory',
  async (uuid: number, { rejectWithValue }) => {
    try {
      const response = await clientApi.put(
        '/delete-category',
        { uuid },
        {
          headers:getAuthorizationHeader()

        }
      );
      return response.data.data;
    } catch (error) {
 
      return rejectWithValue(error);
    }
  }
);
export const editCategory = createAsyncThunk(
  'users/categories',
  async ({ value }: { value: EditCategories }, { rejectWithValue }) => {
    try {
      const response = await clientApi.put(
        '/update-category-subcategory',
        value,
        {
          headers:getAuthorizationHeader()

        }
      );

      return response.data.data;
    } catch (error) { 
      return rejectWithValue(error);
    }
  }
);

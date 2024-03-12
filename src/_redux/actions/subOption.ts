import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '../../_clientApi';
import {
  IEditSize,
  ISubOptionsByOption,
  IsubOption,
} from '../../types/settings';
import { getAuthorizationHeader } from '../../common';
export const getAllSubOption = createAsyncThunk(
  'users/getAllSubOption',
  async ({ id }: { id: string | undefined }, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        '/get-suboption-by-option',
        { id },
        {
          headers: getAuthorizationHeader(),

        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//delete subOption
export const removeSubOption = createAsyncThunk(
  'users/removeSubOption',
  async (uuid: number, { rejectWithValue }) => {
    try {
      const response = await clientApi.post(
        '/delete-suboptions',
        { uuid },
        {
          headers: getAuthorizationHeader(),
        }
      );
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

//edit color subOption
export const editColor = createAsyncThunk(
  'users/editColor',
  async ({ value }: { value: ISubOptionsByOption }, { rejectWithValue }) => {
    try {
      const response = await clientApi.put('/update-subOption', value, {
        headers:getAuthorizationHeader(),
      });

      return response.data.data;
    } catch (error: any) {
 
      return rejectWithValue(error);
    }
  }
);
//edit SIZE subOption
export const editSize = createAsyncThunk(
  'users/editSize',
  async ({ value }: { value: IEditSize }, { rejectWithValue }) => {
    try {
      const response = await clientApi.put('/update-subOption', value, {
        headers: getAuthorizationHeader(),
      });

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//create subOption
export const createSubOption = createAsyncThunk(
  'users/createSubOption',
  async ({ value }: { value: IsubOption }, { rejectWithValue }) => {
    try {
      const response = await clientApi.post('/create-suboptions', value, {
        headers: getAuthorizationHeader(),
      }
      );
      return response.data.data;
    } catch (error) {

      return rejectWithValue(error);
    }
  }
);

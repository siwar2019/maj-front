import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '../../_clientApi';
import { getAuthorizationHeader } from '../../common';

///// get all option /////
export const getAllOption = createAsyncThunk(
  'users/getAllOption',
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get('/getAll-option', {
        headers: getAuthorizationHeader(),

      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

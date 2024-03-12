import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '../../_clientApi';
import { getAuthorizationHeader } from '../../common';

export const getAllReturns = createAsyncThunk(
  'users/getAllReturns',
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get('/get-all-returns', {
        headers: getAuthorizationHeader(),

      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getReturnedOrderDetails = createAsyncThunk(
  'users/getReturnedOrderDetails',
  async (orderId: number, { rejectWithValue }) => {
    try {
      const response = await clientApi.get(
        `/get-returned-order-details?orderId=${orderId}`,
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

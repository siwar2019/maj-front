import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi,clientApi2 } from '../../_clientApi';
import axios from 'axios';

import { UpdateOrderStatusArgs } from '../../types/orders';
import { getAuthorizationHeader } from '../../common';
//get all orders

export const getAllOrders = createAsyncThunk(
  'users/getAllOrders',
  async (_, { rejectWithValue }) => {
    try {
      //const response = await clientApi2.post('api/wind-stock/depot/create', {
      const response = await clientApi2.get('api/wind-stock/accessory', {
        headers: getAuthorizationHeader(),

      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const changeStatus = (orderId: number, status: string) => ({
  type: 'order/changeStatus',
  payload: { orderId, status },
});

//update order status
export const updateOrderStatus = createAsyncThunk(
  'users/updateOrderStatus',
  async (
    { orderId, updatedStatus }: UpdateOrderStatusArgs,
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.put(
        '/update-order-status',
        { orderId, updatedStatus },
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

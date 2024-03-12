import { sessionExpired } from '../../common';
import IOrders from '../../types/orders';
import { getAllOrders, updateOrderStatus } from '../actions/orders';
import { createSlice } from '@reduxjs/toolkit';
export interface optionState {
  order: IOrders[];
  loader: boolean;
}
const initialState: optionState = {
  order: [],
  loader: false,
};
export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOrders.fulfilled, (state, { payload }) => {
      state.order = payload;
      state.loader = false;
    });
    builder.addCase(getAllOrders.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getAllOrders.rejected, (state,{payload}:any) => {
      if (payload.response && payload.response.status && payload.response.status===401  ) {
        sessionExpired()
      }
    });
    builder.addCase(updateOrderStatus.fulfilled, (state, { payload }) => {
      const id = payload.returnedData.id;
      const index = state.order.findIndex((order) => order.id === id);
      if (index !== -1) {
        state.order[index].status = payload.returnedData.status;
      }
    });
  },
});
export const {} = orderSlice.actions;
export default orderSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { IReturns, IReturnsDetails } from '../../types/returns';
import { getAllReturns, getReturnedOrderDetails } from '../actions/returns';
import { sessionExpired } from '../../common';
export interface returnsState {
  returns: IReturns[];
  returnsDetails: IReturnsDetails[];
  loader: boolean;
}
const initialState = {
  returns: [],
  returnsDetails: [],
  loader: false,
};
export const returnsSlice = createSlice({
  name: 'returns',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllReturns.fulfilled, (state, { payload }) => {
      state.returns = payload;
      state.loader = false;
    });
    builder.addCase(getAllReturns.rejected, (state,{payload}:any) => {
      if (payload.response && payload.response.status && payload.response.status===401  ) {
        sessionExpired()
      }
    });

    builder.addCase(getAllReturns.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getReturnedOrderDetails.fulfilled, (state, { payload }) => {
      state.returnsDetails = payload;
    });
  },
});
export const {} = returnsSlice.actions;
export default returnsSlice.reducer;

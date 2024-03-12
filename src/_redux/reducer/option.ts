import { createSlice } from '@reduxjs/toolkit';
import { getAllOption } from '../actions/option';
import { sessionExpired } from '../../common';
export interface optionState {
  option: any;
  loader: boolean;

}
const initialState: optionState = {
  option: [],
  loader: false,

};
export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOption.fulfilled, (state, { payload }) => {
      console.log('%coption.ts line:23 payload', 'color: #007acc;', payload);

      state.option = payload;
    });
    builder.addCase(getAllOption.rejected, (state,{payload}:any) => {
      if (payload.response && payload.response.status && payload.response.status===401  ) {
        sessionExpired()
      }
    });
  builder.addCase(getAllOption.pending, (state) => {
  state.loader=true ;
});
  },
});
export const {} = optionSlice.actions;
export default optionSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const globalStoreSlice = createSlice({
  name: 'globalStore',
  initialState: {
    selectedAccordionId: null,
    connected:false
  },
  reducers: {
    setSelectedAccordionId: (state, { payload }) => {
      state.selectedAccordionId = payload;
    },
    setConnectedUser:(state, {payload}) => {
      state.connected=payload
    }
  },
});
export const { setSelectedAccordionId,setConnectedUser } = globalStoreSlice.actions;
export default globalStoreSlice.reducer;

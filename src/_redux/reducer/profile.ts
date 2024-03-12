import { createSlice } from '@reduxjs/toolkit';
import { IUpdateInfo } from '../../types/profile';
import { updatePersonalInfo } from '../actions/profile';
import { sessionExpired, showErrorToast } from '../../common';
import { showSuccessToast } from '../../common';
import { t } from 'i18next';
export interface infoState {
  personalInfo: IUpdateInfo[];
}
const initialState: infoState = {
  personalInfo: [],
};

export const profileSlice = createSlice({

  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(updatePersonalInfo.fulfilled, (state, { payload }) => {
      state.personalInfo = payload;
      const success = `${t('admin.toastNotification.successUpdate')} `;
      showSuccessToast(success);
    });
    builder.addCase(updatePersonalInfo.rejected, (state,{payload}:any) => {
      const errorMessage = `${t('admin.toastNotification.errorUpdate')}`;
      showErrorToast(`${errorMessage}`);
      if (payload.response && payload.response.status && payload.response.status===401  ) {
        sessionExpired()
      }
    });
  },
});
export const {} = profileSlice.actions;
export default profileSlice.reducer;

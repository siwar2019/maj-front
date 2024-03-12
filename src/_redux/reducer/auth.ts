import { createSlice } from '@reduxjs/toolkit';
import {ICurrentUser } from '../../types/auth';
import { ResetPassword, forgotPassword, getAllUserInformation, userLogin } from '../actions/auth';
import { showErrorToast, showSuccessToast } from '../../common';
import { t } from 'i18next';
import { IUpdateInfo } from '../../types/profile';
export interface authState {
  currentUser?: ICurrentUser;
  loader: boolean;
  username: string;
  connectedUser:IUpdateInfo |null

}

const initialState: authState = {
  loader: false,
  username: '',
  connectedUser:null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
      state.username = payload.data.user.firstName;
      localStorage.setItem('username', state.username);

    });
    builder.addCase(userLogin.rejected, () => {
      const errorMessage = `${t('admin.login.errorOccured')}`
      showErrorToast(`${errorMessage}`)

    });
    builder.addCase(userLogin.pending, (state) => {
      state.loader = true;

    });
    builder.addCase(getAllUserInformation.fulfilled,(state,action) => {
      state.connectedUser=action.payload
    })

   
 
    builder.addCase(forgotPassword.fulfilled,() => {
      const colorCreated = `${t('admin.toastNotification.emailSent')} `;
      showSuccessToast(colorCreated);
    })
    builder.addCase(forgotPassword.rejected,() => {
      const errorMessage = `${t('admin.toastNotification.verifyEmail')}`;
      showErrorToast(`${errorMessage}`);
    })

    builder.addCase(ResetPassword.fulfilled,() => {
      const  resetSuccess= `${t('admin.toastNotification.resetSuccess')} `;
      showSuccessToast(resetSuccess)
    })
    builder.addCase(ResetPassword.rejected,() => {
      const errorMessage = `${t('admin.toastNotification.expiredToken')}`;
      showErrorToast(`${errorMessage}`);
    })
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = authSlice.actions;
export default authSlice.reducer;

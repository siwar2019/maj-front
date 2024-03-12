import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '../../_clientApi';
import jwt_decode, { DecodedToken } from 'jwt-decode';

import { NavigateFunction, useNavigate } from 'react-router-dom';
import { IChangePwd, IForgotPwd, IloginUser, ResetPwd } from '../../types/auth';
import Swal from 'sweetalert2';
import { getAuthorizationHeader } from '../../common';
/////// login admin //////
export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async (
    { value }: { value: IloginUser },
    {rejectWithValue }
  ) => {
    try {
      const resData = await clientApi.post('/login-admin', value);
      localStorage.setItem('Role', resData.data.data.role);
     localStorage.setItem('access_token',"Bearer "+ resData.data.data.access_token);

      clientApi.defaults.headers.common[
        'Authorization'
      ] = `bearer ${resData.data.data.access_token}`;
      clientApi.defaults.headers.common['Role'] = resData.data.data.Role;
      // Check if the token is expired
      const decodedToken = jwt_decode(resData.data.data.access_token) as DecodedToken;
      const currentTime = Date.now() / 1000; // Convert current time to seconds

      if (decodedToken.exp && decodedToken.exp < currentTime) {
        window.location.href = '/';
        localStorage.clear();
      }
      return resData.data;

    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
export const getAllUserInformation = createAsyncThunk(
  'users/getAllUserInformation',
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get('/get-user-information', {
        headers: getAuthorizationHeader(),

      });
      return response.data.data
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
////// Forgot Password ////

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (
    { value }: { value: IForgotPwd; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.put('/forgot-password-admin', value);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

////// Reset Password ////

export const ResetPassword = createAsyncThunk(
  'auth/ResetPassword',
  async (
    { value, navigate }: { value: ResetPwd; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await clientApi.post('/reset-password-admin', value);
      if (response.status === 200) {
        setTimeout(() => navigate('/Login'), 2000);
        return response.data;
      }
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

///// Logout /////
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.clear();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

////// change Password ////

export const ChangePassword = createAsyncThunk(
  'auth/ChangePassword',
  async ({ value }: { value: IChangePwd }, { rejectWithValue }) => {
    try {
      const response = await clientApi.put('/change-password', value, {
        headers: getAuthorizationHeader(),
      });
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });

        return response.data;
      }
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });

      return rejectWithValue(error);
    }
  }
);

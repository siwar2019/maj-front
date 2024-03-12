import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUpdateInfo } from '../../types/profile';
import { clientApi } from '../../_clientApi';
import { getAuthorizationHeader } from '../../common';

//update personal info
export const updatePersonalInfo = createAsyncThunk(
  'auth/updatePersonalInfo',
  async ({ value }: { value: IUpdateInfo }, { rejectWithValue }) => {
    try {
      const response = await clientApi.put(
        '/update-personal-information',
        value,
        {
          headers: getAuthorizationHeader(),

        }
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

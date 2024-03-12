import { createSlice } from '@reduxjs/toolkit';
import {
  createSubOption,
  editColor,
  editSize,
  getAllSubOption,
  removeSubOption,
} from '../actions/subOption';
import { sessionExpired } from '../../common';
import { IOptions } from '../../types/settings';
import { showSuccessToast } from '../../common';
import { t } from 'i18next';
export interface subOption {
  subOption: IOptions[];
}

const initialState: subOption = {
  subOption: [],
};
  const colorCreated = `${t('admin.toastNotification.colorCreated')} `;
  const sizeCreated = `${t('admin.toastNotification.sizeCreated')} `;
export const subOptionSlice = createSlice({
  name: 'subOptions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSubOption.fulfilled, (state, {payload}) => {
      state.subOption =payload;
    });
    builder.addCase(getAllSubOption.rejected, (state,{payload}:any) => {
      if (payload.response && payload.response.status && payload.response.status===401  ) {
        sessionExpired()
      }
    });
    builder.addCase(
      removeSubOption.fulfilled,
      (state, { meta: { arg: subId } }) => {
        // Use filter to create a new array without the deleted item
        state.subOption = state.subOption.filter((item) => {
          const filterList = item.uuid !== subId;
          return filterList;
        });
      }
    );
    //ERP
    builder.addCase(createSubOption.fulfilled, (state, { payload }) => {
      const firstSubOption = payload;
      state.subOption = [...state.subOption, firstSubOption];
     if(payload.productOptions.name==='Size') {
      showSuccessToast(sizeCreated);
     }else {
     showSuccessToast(colorCreated);
     }

    });
    // builder.addCase(createSubOption.fulfilled, (state, { payload }) => {
    //   const firstSubOption = payload.addSubOptions[0];
    //   state.subOption = [...state.subOption, firstSubOption];
    //  if(payload.id==='1') {
    //   showSuccessToast(colorCreated);
    //  }else {
    //  showSuccessToast(sizeCreated);
    //  }

    // });
    builder.addCase(editColor.fulfilled, (state, { payload }) => {
      const editedColorId = payload.id;
      //find the index of the first element in an array that satisfies a given condition
      const editedColorIndex = state.subOption.findIndex(
        (subOption) => subOption.id === editedColorId
      );
      if (editedColorIndex !== -1) {
        // Update the properties of the edited category
        state.subOption[editedColorIndex].name = payload.name;
        state.subOption[editedColorIndex].code = payload.description;
      }
    });
    builder.addCase(editSize.fulfilled, (state, { payload }) => {
      const editedColorId = payload.id;
      //find the index of the first element in an array that satisfies a given condition
      const editedColorIndex = state.subOption.findIndex(
        (subOption) => subOption.id === editedColorId
      );
      if (editedColorIndex !== -1) {
        // Update the properties of the edited category
        state.subOption[editedColorIndex].name = payload.name;
        state.subOption[editedColorIndex].code = payload.description;
      }
    });
  },
});
export const {} = subOptionSlice.actions;
export default subOptionSlice.reducer;

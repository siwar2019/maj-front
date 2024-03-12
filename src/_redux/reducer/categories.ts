/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit';
import { ICategories } from '../../types/categories';
import { t } from 'i18next';
import {
  createCategory,
  deleteCategory,
  editCategory,
  getAllCategories,
} from '../actions/categories';
import { sessionExpired } from '../../common';
import { showErrorToast, showSuccessToast } from '../../common';
export interface categoriesState {
  categories: ICategories[];
  loader:boolean ;
}
const initialState: categoriesState = {
  categories: [],
  loader:false
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, {payload}) => {
      state.categories = payload;

    });
    builder.addCase(getAllCategories.pending, (state) => {
      state.loader=true
    });
    builder.addCase(getAllCategories.rejected, (state,{payload}:any) => {
      if (payload.response && payload.response.status && payload.response.status===401  ) {
        sessionExpired()
      }
    });
    builder.addCase(
      deleteCategory.fulfilled,
      (state, { meta: { arg: uuid } }) => {
        //remove the category from the state
        state.categories = state.categories.filter(
          (category) => category.uuid !== uuid
        );
        const deleteCategory=`${t('admin.toastNotification.categoryDeleted')} `
        showSuccessToast(deleteCategory)
      }
    );
    builder.addCase(createCategory.fulfilled, (state, { payload }) => {
      state.categories.push(payload);
      const createdCategory=`${t('admin.toastNotification.categoryCreated')} `
      showSuccessToast(createdCategory)

    });
    builder.addCase(createCategory.rejected,() => {
     const errorMessage = `${t('admin.toastNotification.categoryExist')}`
      showErrorToast(`${errorMessage}`)
    })
    builder.addCase(editCategory.fulfilled, (state, { payload }) => {
      //get the id of the edited category
      const editedCategoryId = payload.id;
      //find the index of the first element in an array that satisfies a given condition
      const editedCategoryIndex = state.categories.findIndex(
        (category) => category.id === editedCategoryId
      );
      if (editedCategoryIndex !== -1) {
        // Update the properties of the edited category
        state.categories[editedCategoryIndex].name = payload.name;
        state.categories[editedCategoryIndex].description = payload.description;
      }
      const editCategory = `${t('admin.toastNotification.updatedCreated')} `;
      showSuccessToast(editCategory);
    });
    builder.addCase(editCategory.rejected,() => {
      const errorMessage = `${t('admin.toastNotification.categoryExist')}`;
      showErrorToast(`${errorMessage}`);
    })
  },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;


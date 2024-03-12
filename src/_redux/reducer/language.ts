import { createSlice } from '@reduxjs/toolkit';
import { changeLanguage } from '../../locales';

export interface LangState {
  lang: string;
}

const initialState: LangState = {
  lang: 'en',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLangue: (state, { payload }) => {
      state.lang = payload;
    },
    changeLanguageAction: (state, { payload }) => {
      if (payload === 'fr' || payload === 'fr-FR') {
        changeLanguage();
        state.lang = 'fr';
      } else {
        changeLanguage();
        state.lang = 'en';
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLangue, changeLanguageAction } = langSlice.actions;

export default langSlice.reducer;

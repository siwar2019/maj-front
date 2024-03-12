import React, { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import RouterConfig from './routes';
import { changeLanguageAction } from './_redux/reducer/language';
import './app.css';

import './app.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from './types/theme';
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      changeLanguageAction(
        localStorage.getItem('i18nextLng')
          ? localStorage.getItem('i18nextLng')
          : 'en'
      )
    );
  }, [dispatch]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterConfig />
      </ThemeProvider>
    </>
  );
}

export default App;

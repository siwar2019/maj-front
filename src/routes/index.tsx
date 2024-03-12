import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ForgotPwd from '../pages/forgotPwd';
import ResetPwd from '../pages/resetPwd';
import SingInPage from '../pages/singInPage';
import { useAppSelector } from '../hooks';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const RouterConfig = () => {
  useAppSelector(({ auth: { currentUser } }) => currentUser);
  const isAdmin = localStorage.Role;
  switch (isAdmin) {
    case 'Admin':
      return (
        <>
          <Home />
        </>
      );
    default:
      return (
        <>
          <Routes>
            <Route path="/" element={<SingInPage />} />
            <Route path="/login" element={<SingInPage />} />
            <Route path="/forgot" element={<ForgotPwd />} />
            <Route path="/resetpassword/:token" element={<ResetPwd />} />
            <Route path="*" element={<NotFound />} />
          </Routes>{' '}
        </>
      );
  }
};

export default RouterConfig;

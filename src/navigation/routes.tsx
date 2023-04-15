import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../features/login/screen/index';

export const AppRoutes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginScreen />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

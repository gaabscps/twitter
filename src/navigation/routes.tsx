import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../features/login/screen';
import { Error } from '.././components/Error404';

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/error404" element={<Error />} />

        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </>
  );
};

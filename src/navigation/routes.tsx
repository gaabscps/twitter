import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../features/login/screen';
import { Error } from '.././components/Error404';
import { HomeScreen } from '../features/home';
import { ProtectedRoutes } from './protectedRoutes';
import useAuth from '../hooks/useAuth';

export const AppRoutes: React.FC = () => {
  // const { user, setUser } = useAuth();

  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/error404" element={<Error />} />

        <Route path="/" element={<LoginScreen />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<HomeScreen />} />
        </Route>
      </Routes>
    </>
  );
};

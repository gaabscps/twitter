import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../features/login/screen';
import { Error } from '.././components/Error404';
import { HomeScreen } from '../features/home';
import { ProtectedRoutes } from './protectedRoutes';

export const AppRoutes: React.FC = () => {
  const [user, setUser] = useState(false);

  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/error404" element={<Error />} />

        <Route path="/" element={<LoginScreen setUser={setUser} />} />
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path="/home" element={<HomeScreen />} />
        </Route>
      </Routes>
    </>
  );
};

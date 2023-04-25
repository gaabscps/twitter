import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRoutesProps {
  user: boolean;
}

const useAuth = (isLogged: boolean) => {
  const userAuth = { logged: isLogged, name: 'John Doe' };
  return userAuth && userAuth.logged;
};

export const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ user }) => {
  const isAuth = useAuth(user);
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

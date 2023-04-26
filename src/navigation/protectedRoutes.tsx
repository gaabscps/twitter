import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRoutesProps {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ user, setUser }) => {
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return user ? <Outlet /> : <Navigate to="/caca" />;
};

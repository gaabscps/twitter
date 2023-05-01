import { useState } from 'react';

const useAuth = () => {
  const loggedInUser = localStorage.getItem('user');
  const [user, setUser] = useState<boolean>(Boolean(loggedInUser));

  return { user, setUser };
};

export default useAuth;

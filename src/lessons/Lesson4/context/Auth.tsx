import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(false);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

const AuthProvider = () => {
  const [user, setUser] = useState(null);

  const login = () => {};
  const logout = () => {};
};

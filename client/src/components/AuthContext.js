import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const cookies = new Cookies();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(cookies.get('TOKEN'));
  }, []);

  const login = (newToken) => {
    cookies.set('TOKEN', newToken, { path: '/' });
    setToken(newToken);
  };

  const logout = () => {
    cookies.remove('TOKEN', { path: '/' });
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

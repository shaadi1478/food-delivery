// src/Context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Provide authentication state and logic
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);

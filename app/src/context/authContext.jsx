import { createContext, useContext, useState, useEffect } from 'react';
import users from '../data/mockUsers.json';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (email, password) => {
    const validUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    
    if (validUser) {
      const userSession = { email: validUser.email, name: validUser.name };
      
      setUser(userSession);
      localStorage.setItem('loggedInUser', JSON.stringify(userSession));
      
      return { success: true };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

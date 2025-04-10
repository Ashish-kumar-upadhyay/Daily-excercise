import { createContext, useState } from 'react';

// Create a context with a default value
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Developer',
    preferences: {
      theme: 'light',
      notifications: true
    }
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}; 
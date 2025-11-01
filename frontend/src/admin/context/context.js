import { createContext } from 'react';

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  return <AdminContext.Provider value=''>{children}</AdminContext.Provider>;
};

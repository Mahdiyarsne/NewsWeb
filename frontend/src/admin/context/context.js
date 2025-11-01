import { createContext } from 'react';

export const AdminContext = createContext();

const login = async (inputs) => {
  try {
    console.log(inputs);
  } catch (error) {
    console.log(error);
  }
};

export const AdminContextProvider = ({ children }) => {
  return (
    <AdminContext.Provider value={{ login }}>{children}</AdminContext.Provider>
  );
};

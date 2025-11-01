import axios from 'axios';
import { createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();


  const login = async (inputs) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/users/login',
        inputs
      );
      if (res.data.error) {
        setError(res.data.error);
      } else {
        navigate('/dashboard');
        toast.success(res.data.message, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        setName(res.data.name);
        setUserId(res.data.userId);
        setToken(res.data.accessToken);
        setAdmin(res.data.isAdmin);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider value={{ login, error }}>
      {children}
    </AdminContext.Provider>
  );
};

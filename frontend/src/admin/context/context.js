import axios from 'axios';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [admin, setAdmin] = useState(null);
  const [expire, SetExpire] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);
  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decode = jwtDecode(response.data.accessToken);

      setName(decode.name);
      setUserId(decode.userId);
      setAdmin(decode.setAdmin);
      SetExpire(decode.exp);
    } catch (error) {
      console.log(error);
    }
  };

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decode = jwtDecode(response.data.accessToken);

        setName(decode.name);
        setUserId(decode.userId);
        setAdmin(decode.setAdmin);
        SetExpire(decode.exp);
      }
      return config;
    },

    (error) => {
      return Promise.reject(error);
    }
  );

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
          closeOnClick: false,
          pauseOnHover: true,
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

  const getAllUsers = async () => {
    try {
      const res = await axiosJWT.get('http://localhost:5000/api/users', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const createNews = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('desc', data.desc);
    formData.append('catId', data.catId);
    formData.append('userId', userId);
    formData.append('file', data.file);
    try {
      const res = await axiosJWT.post(
        'http://localhost:5000/api/create-news',
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.msg, {
        position: 'bottom-right',
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        theme: 'colored',
      });
      navigate('/view-news')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{ login, error, getAllUsers, axiosJWT, token, createNews }}>
      {children}
    </AdminContext.Provider>
  );
};

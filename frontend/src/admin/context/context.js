import axios from 'axios';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { data, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import { baseUrl } from '../../utils/baseUrl';

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [admin, setAdmin] = useState(null);
  const [expire, SetExpire] = useState('');
  const [news, setNews] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  const [category, setCategory] = useState([]);
  const [errorVideo, setErrorVideo] = useState('');
  const [allVideo, setAllVideo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);
  const refreshToken = async () => {
    try {
      const response = await axios.get(`${baseUrl}/token`);
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
        const response = await axios.get(`${baseUrl}/token`);
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
      const res = await axios.post(`${baseUrl}/api/users/login`, inputs);
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
      const res = await axiosJWT.get(`${baseUrl}/api/users`, {
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
      const res = await axiosJWT.post(`${baseUrl}/api/create-news`, formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success(res.data.msg, {
        position: 'bottom-right',
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        theme: 'colored',
      });
      navigate('/view-news');
    } catch (error) {
      console.log(error);
    }
  };

  const handleNews = async () => {
    try {
      const res = await axiosJWT.get(`${baseUrl}/api/get-news`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setNews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNews = async (id) => {
    try {
      const res = await axiosJWT.delete(`${baseUrl}/api/delete-news/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      handleNews();
      toast.success(res.data.msg, {
        position: 'bottom-right',
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        theme: 'colored',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const singleNews = async (id) => {
    try {
      const res = await axiosJWT.get(`${baseUrl}/api/get-news/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setSinglePost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateNews = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('desc', data.desc);
    formData.append('catId', data.catId);
    formData.append('userId', userId);
    formData.append('file', data.file);
    try {
      const res = await axiosJWT.put(
        `${baseUrl}/api/update-news/${data.id}`,
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
      navigate('/view-news');
    } catch (error) {
      console.log(error);
    }
  };

  //دسته بندی

  const createCategory = async (value) => {
    try {
      const res = await axiosJWT.post(`${baseUrl}/api/create-category`, value, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success(res.data.msg, {
        position: 'bottom-right',
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        theme: 'colored',
      });
      navigate('/view-category');
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const res = await axiosJWT.get(`${baseUrl}/api/get-category`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategory = async (values) => {
    try {
      const res = await axiosJWT.put(
        `${baseUrl}/api/update-category/${values.id}`,
        values,
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
      navigate('/view-category');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = await axiosJWT.delete(
        `${baseUrl}/api/delete-category/${id}`,
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
      getCategory();
    } catch (error) {
      console.log(error);
    }
  };

  //بخش ویدیو
  const createVideo = async (data) => {
    const formData = new FormData();
    formData.append('file', data.file);
    try {
      const res = await axiosJWT.post(`${baseUrl}/api/create-video`, formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (res.data.error) {
        setErrorVideo(res.data.error);
      }
      if (res.data.msg) {
        toast.success(res.data.msg, {
          position: 'bottom-right',
          autoClose: 5000,
          closeOnClick: false,
          pauseOnHover: true,
          theme: 'colored',
        });
        navigate('/view-video');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllVideo = async () => {
    try {
      const res = await axiosJWT.get(`${baseUrl}/api/get-video`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setAllVideo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        login,
        error,
        getAllUsers,
        axiosJWT,
        token,
        createNews,
        news,
        handleNews,
        deleteNews,
        singleNews,
        singlePost,
        updateNews,
        createCategory,
        getCategory,
        category,
        updateCategory,
        deleteCategory,
        createVideo,
        errorVideo,
        getAllVideo,
        allVideo,
      }}>
      {children}
    </AdminContext.Provider>
  );
};

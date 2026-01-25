import { createContext, useEffect, useReducer, useState } from 'react';
import { videoReducer } from './reducers/reducerVideo';
import { catPostReducer } from './reducers/reducerCategory';
import { toast } from 'react-toastify';

import {
  VIDEO_FAIL,
  VIDEO_REQUEST,
  VIDEO_SUCCESS,
} from './constants/videoConstants';
import axios from 'axios';
import { baseUrl } from '../utils/baseUrl';
import { lastPostReducer } from './reducers/reducerLastPost';
import {
  LAST_POST_FAIL,
  LAST_POST_REQUEST,
  LAST_POST_SUCCESS,
} from './constants/lastPostConstants';

import {
  CATEGORY_POST_REQUEST,
  CATEGORY_POST_SUCCESS,
  CATEGORY_POST_FAIL,
} from './constants/categoryConstants';
import { useLocation, useNavigate } from 'react-router-dom';
import { popularNewsReducer } from './reducers/reducerPopular';
import {
  POPULAR_NEWS_FAIL,
  POPULAR_NEWS_REQUEST,
  POPULAR_NEWS_SUCCESS,
} from './constants/popluarConstants';

export const HomeContext = createContext();
const INITIAL_STATE = {
  loading: true,
  error: '',
  videos: [],
};

const INITIAL_STATE_LAST_POST = {
  loading: true,
  error: '',
  lastPosts: [],
};

const INITIAL_STATE_CAT_POST = {
  loading: true,
  error: '',
  news: [],
};
const INITIAL_STATE_POPULAR_NEWS = {
  loading: true,
  error: '',
  popularNews: [],
};
export const HomeContextProvider = ({ children }) => {
  const navgate = useNavigate();
  const [state, dispatch] = useReducer(videoReducer, INITIAL_STATE);
  const [stateLastPost, lastPostDispatch] = useReducer(
    lastPostReducer,
    INITIAL_STATE_LAST_POST
  );
  const [statePopularNews, popluarNewsDispatch] = useReducer(
    popularNewsReducer,
    INITIAL_STATE_POPULAR_NEWS
  );

  const [stateCatPost, catPostDispatch] = useReducer(
    catPostReducer,
    INITIAL_STATE_CAT_POST
  );

  const [category, setCategory] = useState([]);
  const [newsComment, setNewsComment] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    LoadVideo();
    LoadLastPost();
    LoadCategory();
    LoadCatPost();
    LoadMostPopular();
  }, []);

  const LoadVideo = async () => {
    try {
      dispatch({ type: VIDEO_REQUEST });
      const { data } = await axios.get(`${baseUrl}/api/single-video`);
      dispatch({ type: VIDEO_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: VIDEO_FAIL, payload: error.response.data.message });
    }
  };

  const LoadLastPost = async () => {
    try {
      lastPostDispatch({ type: LAST_POST_REQUEST });
      const { data } = await axios.get(`${baseUrl}/api/news/last-news`);
      lastPostDispatch({ type: LAST_POST_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      lastPostDispatch({
        type: LAST_POST_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  //بخش دسته بندی
  const LoadCatPost = async () => {
    try {
      catPostDispatch({ type: CATEGORY_POST_REQUEST });
      const { data } = await axios.get(`${baseUrl}/api/news/cat-news${cat}`);
      catPostDispatch({ type: CATEGORY_POST_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      catPostDispatch({
        type: CATEGORY_POST_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  const LoadCategory = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/category/home`);
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const LoadMostPopular = async () => {
    try {
      popluarNewsDispatch({ type: POPULAR_NEWS_REQUEST });
      const { data } = await axios.get(`${baseUrl}/api/news/popular`);
      popluarNewsDispatch({ type: POPULAR_NEWS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      popluarNewsDispatch({
        type: POPULAR_NEWS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  const LoadView = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}/api/news/detail/${id}`);
      console.log(res);
      LoadMostPopular();
    } catch (error) {
      console.log(error);
    }
  };

  //بخش نظرات
  const createComment = async (data) => {
    try {
      const res = await axios.post(`${baseUrl}/api/create-comment`, data);
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

  const getSingleComment = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}/api/comment/${id}`);
      setNewsComment(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  //بخش ارسال ایمیل به آدمین توسط کاربر
  const handleEmail = async (data) => {
    try {
      const res = await axios.post(`${baseUrl}/api/send-email`, data);
      toast.success(res.data.msg, {
        position: 'bottom-right',
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        theme: 'colored',
      });
      navgate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        videos: state.videos,
        loadingLastPost: stateLastPost.loading,
        errorLastPost: stateLastPost.error,
        lastPosts: stateLastPost.lastPosts,
        loadingCatPost: stateCatPost.loading,
        errorCatPost: stateCatPost.error,
        news: stateCatPost.news,
        LoadCatPost,
        category,
        laodingPopular: statePopularNews.loading,
        errorPopular: statePopularNews.error,
        popularNews: statePopularNews.popularNews,
        createComment,
        getSingleComment,
        newsComment,
        LoadView,
        handleEmail,
      }}>
      {children}
    </HomeContext.Provider>
  );
};

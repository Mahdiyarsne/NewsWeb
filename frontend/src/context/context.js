import { createContext, useEffect, useReducer, useState } from 'react';
import { videoReducer } from './reducers/reducerVideo';
import { catPostReducer } from './reducers/reducerCategory';
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

export const HomeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, INITIAL_STATE);
  const [stateLastPost, lastPostDispatch] = useReducer(
    lastPostReducer,
    INITIAL_STATE_LAST_POST
  );

  const [stateCatPost, catPostDispatch] = useReducer(
    catPostReducer,
    INITIAL_STATE_CAT_POST
  );

  const [category, setCategory] = useState([]);

  useEffect(() => {
    LoadVideo();
    LoadLastPost();
    LoadCategory();
    LoadCatPost();
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

  const LoadCatPost = async () => {
    try {
      catPostDispatch({ type: CATEGORY_POST_REQUEST });
      const { data } = await axios.get(`${baseUrl}/api/news/cat-news`);
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

        category,
      }}>
      {children}
    </HomeContext.Provider>
  );
};

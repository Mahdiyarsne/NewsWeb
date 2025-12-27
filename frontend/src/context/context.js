import { createContext, useEffect, useReducer } from 'react';
import { videoReducer } from './reducers/reducerVideo';
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
export const HomeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, INITIAL_STATE);
  const [stateLastPost, lastPostDispatch] = useReducer(
    lastPostReducer,
    INITIAL_STATE_LAST_POST
  );
  useEffect(() => {
    LoadVideo();
    LoadLastPost();
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

  return (
    <HomeContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        videos: state.videos,
        loadingLastPost: stateLastPost.loading,
        errorLastPost: stateLastPost.error,
        lastPosts: stateLastPost.lastPosts,
      }}>
      {children}
    </HomeContext.Provider>
  );
};

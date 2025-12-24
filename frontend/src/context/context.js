import { createContext, useEffect, useReducer } from 'react';
import { videoReducer } from './reducers/reducerVideo';
import {
  VIDEO_FAIL,
  VIDEO_REQUEST,
  VIDEO_SUCCESS,
} from './constants/videoConstants';
import axios from 'axios';
import { baseUrl } from '../utils/baseUrl';

export const HomeContext = createContext();
const INITIAL_STATE = {
  loading: true,
  error: '',
  videos: [],
};

export const HomeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, INITIAL_STATE);

  useEffect(() => {
    LoadVideo();
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

  return (
    <HomeContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        videos: state.videos,
      }}>
      {children}
    </HomeContext.Provider>
  );
};

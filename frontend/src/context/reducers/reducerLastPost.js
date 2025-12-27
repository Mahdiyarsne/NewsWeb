import {
  LAST_POST_FAIL,
  LAST_POST_REQUEST,
  LAST_POST_SUCCESS,
} from '../constants/lastPostConstants';

export const lastPostReducer = (state = { lastPosts: [] }, action) => {
  switch (action.type) {
    case LAST_POST_REQUEST:
      return { loading: true, lastPosts: [] };

    case LAST_POST_SUCCESS:
      return { loading: false, lastPosts: action.payload };
    case LAST_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

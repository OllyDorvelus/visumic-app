import {
  VIDEO_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { arrayOfVideos: [], list: '' };

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VIDEO_FETCH_SUCCESS:
      console.log(action);
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  VIDEO_FETCH_SUCCESS
} from './types';


export const videosFetch = (url) => {
  return (dispatch) => {
    axios.get(url || 'https://www.visumic.com/api/videos/', {
// headers:
// { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', },
    })
      .then(response => {
        console.log(response.data.next);
        dispatch({ type: VIDEO_FETCH_SUCCESS, payload: response.data });
      }).catch((error) => {
        console.log(error.message);
        console.log('No Data');
      });
  };
};

export const nextVideosFetch = () => {
  videosFetch();
};

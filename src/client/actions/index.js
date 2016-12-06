import axios from 'axios';
const ROOT_URL = 'http://localhost:1234';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_VOTES } from './types';

export function fetchVotes(){
  return function(dispatch){
    axios.get(ROOT_URL)
      .then(response => {
        dispatch({
          type: FETCH_VOTES,
          payload: response.data
        })
      })
  }
}

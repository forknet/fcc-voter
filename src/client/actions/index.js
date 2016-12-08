import axios from 'axios';
const ROOT_URL = 'http://localhost:1234';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_VOTES, CAST_VOTE } from './types';

export function fetchVotes(){
  return function(dispatch){
    axios.get(`${ROOT_URL}/newpost`)
      .then(response => {
        dispatch({
          type: FETCH_VOTES,
          payload: response.data
        })
      })
  }
}
export function castVote(props){
  console.log(props)
  return {
    type: CAST_VOTE,
    payload: props
  }
}

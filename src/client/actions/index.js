import axios from 'axios';
const ROOT_URL = 'http://localhost:1234';
import { browserHistory } from 'react-router';
import { FETCH_VOTES, CAST_VOTE } from './types';

export function fetchVotes(){
  const request = axios.get(`${ROOT_URL}/newpost`);
  return (dispatch) =>{
    request.then(({data}) => {
      dispatch({ type: FETCH_VOTES, payload: data})
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

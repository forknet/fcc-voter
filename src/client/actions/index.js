import axios from 'axios';
const ROOT_URL = 'http://localhost:1234';
import { browserHistory } from 'react-router';
import { FETCH_VOTES, CAST_VOTE, NEW_POLL } from './types';

export function fetchVotes(){
  const request = axios.get(`${ROOT_URL}/newpost`);
  return (dispatch) =>{
    request.then(({data}) => {
      dispatch({ type: FETCH_VOTES, payload: data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export function newPoll({title, description, labelOptions}){
  const request = axios.post(`${ROOT_URL}/newpost`, {title, description, labelOptions})
  return (dispatch) =>{
    request.then(({data}) =>{
      dispatch({ type: NEW_POLL, payload: data})
      browserHistory.push('/allposts')
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export function castVote(props){
  console.log(props)
  return {
    type: CAST_VOTE,
    payload: props
  }
}

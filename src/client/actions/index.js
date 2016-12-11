import axios from 'axios';
const ROOT_URL = 'http://localhost:1234';
import { browserHistory } from 'react-router';
import { FETCH_VOTES, FETCH_POLL, CAST_VOTE, NEW_POLL } from './types';

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

export function fetchPoll(id){
  const request = axios.get(`${ROOT_URL}/polls/${id}`)
  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({ type: FETCH_POLL, payload: data})
    })
    .catch(function( error){
      console.log(error)
    })
  }
}

export function newPoll({title, description, labelOptions}){
  const request = axios.post(`${ROOT_URL}/newpost`, {title, description, labelOptions})
  return (dispatch) =>{
    request.then(({data}) =>{
      dispatch({ type: NEW_POLL, payload: data})
      console.log(data)
      browserHistory.push(`/poll/${data.id}`)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export function castVote(id, {labelOption}){
  let timeDelay = 900;
  const request = axios.put(`${ROOT_URL}/polls/${id}?labelOption=${labelOption}`)
  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({ type: CAST_VOTE, payload: data })
      Materialize.toast('Thanks for casting your Vote!', timeDelay, '', ()=> window.location.reload())
    })
    .catch(function (error){
      console.log(error)
    })
  }
}

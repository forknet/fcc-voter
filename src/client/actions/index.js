import axios from 'axios';
const ROOT_URL = 'http://localhost:1234';
import { browserHistory } from 'react-router';
import { FETCH_VOTES, FETCH_POLL, FETCH_USERPOSTS, CAST_VOTE, NEW_POLL, DELETE_POLL ,
  AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './types';

export function fetchVotes(){
  const request = axios.get(`${ROOT_URL}/allpolls`);
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
export function fetchUserPosts(userName){
  const request = axios.get(`${ROOT_URL}/fetchvotes/${userName}`)
  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({ type: FETCH_USERPOSTS, payload: data})
    })
    .catch(function( error){
      console.log(error)
    })
  }
}

export function newPoll({title, description, labelOptions, userName}){
  let timeDelay = 3000;
  const request = axios.post(`${ROOT_URL}/newpost`, {title, description, labelOptions, userName})
  return (dispatch) =>{
    request.then(({data}) =>{
      dispatch({ type: NEW_POLL, payload: data})
      Materialize.toast('Poll Created!', timeDelay)
      browserHistory.push(`/poll/${data.id}`)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
export function deletePoll(id){
  let timeDelay = 3000;
  const request = axios.delete(`${ROOT_URL}/polls/${id}`)
  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({ type: DELETE_POLL})
      browserHistory.push('/')
      Materialize.toast(`Successfully removed the poll`, timeDelay)
    })
    .catch(function( error){
      console.log(error)
    })
  }
}

export function castVote(id, {labelOption}){
  let timeDelay = 900;
  const request = axios.put(`${ROOT_URL}/polls/${id}?labelOption=${labelOption}`)
  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({ type: CAST_VOTE, payload: data })
      Materialize.toast('Thanks for casting your Vote!', 1000, '', ()=> window.location.reload())
    })
    .catch(function (error){
      Materialize.toast('Sorry, something went wrong :( ...', timeDelay)
    })
  }
}

export function loginUser( {email, password}){
  let timeDelay = 4000;
  return function(dispatch){
    axios.post(`${ROOT_URL}/signin`, {email, password})
      .then(response =>{
        dispatch({type: AUTH_USER, payload: response.data.userName})
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userName', response.data.userName)
        browserHistory.push('/')
        Materialize.toast(`Welcome back ${response.data.userName}!`, timeDelay)
      })
      .catch(() =>{
        // If request is bad...
        // -Show an error to the user
        Materialize.toast('Ooops! Wrong email/password!', timeDelay)
      });
  }
}

export function signupUser( {userName, email, password}){
  let timeDelay = 4000;
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, { userName, email, password})
      .then(response =>{
        dispatch({type: AUTH_USER, payload: response.data.userName})
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.userName);
        browserHistory.push('/')
        Materialize.toast(`Welcome ${response.data.userName}!`, timeDelay)
      })
      .catch(response =>{
        console.log(response)
        Materialize.toast('Email already exist!', timeDelay)
      })
  }
}

export function signoutUser(){
  let timeDelay = 3000;
  localStorage.removeItem('token')
  localStorage.removeItem('userName')
  browserHistory.push('/')
  Materialize.toast(`See You Next Time!`, timeDelay)
  return ({
    type: UNAUTH_USER
  })
}

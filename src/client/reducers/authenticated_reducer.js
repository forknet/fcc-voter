import { AUTH_USER ,UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types'

const INITIAL = {authenticated: false}

export default function(state = INITIAL, action){
  switch (action.type) {
    case AUTH_USER:
      // this ensures that user can see whose account is currently logged in
      let currentUser = localStorage.getItem('userName')
      return { ...state, authenticated: true, userName: action.payload || currentUser }
    case UNAUTH_USER:
      return { ...state, authenticated: false, userName: ''}
  }
  return state;
}

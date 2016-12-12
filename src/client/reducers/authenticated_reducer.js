import { AUTH_USER ,UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types'

const INITIAL = {}

export default function(state = INITIAL, action){
  switch (action.type) {
    case AUTH_USER:
      return {...state, error: '', authenticated: true}
    case UNAUTH_USER:
      return { ...state, authenticated: false}
  }
  return state;
}

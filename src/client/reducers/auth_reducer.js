import { FETCH_VOTES } from '../actions/types'
export default function(state={}, action){
  switch (action.type) {
    case FETCH_VOTES:
      console.log(action.payload)
      return {...state, message: action.payload.message}
  }
  return state;
}

import { FETCH_VOTES, FETCH_POLL, CAST_VOTE, NEW_POLL, DELETE_POLL,
  FETCH_USERPOSTS } from '../actions/types'

const INITIAL = { vote: [], pollInfo: []}

export default function(state=INITIAL, action){
  switch (action.type) {
    case FETCH_VOTES:
      return {...state, vote: action.payload, pollInfo: []}
    case FETCH_POLL:
      return {...state, pollInfo: action.payload}
    case DELETE_POLL:
      return {...state, pollInfo: []}
    case FETCH_USERPOSTS:
      return {... state, vote: action.payload}
    case CAST_VOTE:
      return { ...state, castvote: action.payload}
    case NEW_POLL:
      return { ...state}
  }
  return state;
}

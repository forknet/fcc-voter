import { FETCH_VOTES, CAST_VOTE, NEW_POLL } from '../actions/types'

const INITIAL = { vote: []}

export default function(state=INITIAL, action){
  switch (action.type) {
    case FETCH_VOTES:
      return {...state, vote: action.payload}
    case CAST_VOTE:
      return { ...state, castvote: action.payload}
    case NEW_POLL:
      console.log(action, 'this is in reducer')
      return { ...state}
  }
  return state;
}

import { FETCH_VOTES, CAST_VOTE } from '../actions/types'

const INITIAL = { vote: []}

export default function(state=INITIAL, action){
  switch (action.type) {
    case FETCH_VOTES:
      return {...state, vote: action.payload}
    case CAST_VOTE:
      return { ...state, castvote: action.payload}
  }
  return state;
}

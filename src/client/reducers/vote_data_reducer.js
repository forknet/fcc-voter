import { FETCH_VOTES, FETCH_POLL, CAST_VOTE, NEW_POLL, DELETE_POLL,
  FETCH_USERPOSTS } from '../actions/types'

const INITIAL = { vote: [], pollInfo: []}

function colorPick(numberOfOptions){
  let randomColors = [];
  for(let i = 0; i < numberOfOptions; i++){
    let rbga = "";
    let red = Math.floor(Math.random() * 256 );
    let green = Math.floor(Math.random() * 256 );
    let blue = Math.floor(Math.random() * 256 );
    let opacity = 0.75
    rbga = `rgba(${red}, ${green}, ${blue}, ${opacity})`
    randomColors.push(rbga)
  }
  return randomColors
}

export default function(state=INITIAL, action){
  switch (action.type) {
    case FETCH_VOTES:
      return {...state, vote: action.payload, pollInfo: []}
    case FETCH_POLL:
      let numberOfOptions = Object.keys(action.payload.labelOptions).length;
      let colorSchemes = colorPick(numberOfOptions)
      return {...state, pollInfo: action.payload, colorSchemes: colorSchemes}
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

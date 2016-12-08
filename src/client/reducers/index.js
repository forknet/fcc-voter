import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import VoteData from './vote_data_reducer'

const rootReducer = combineReducers({
  form: formReducer,
  voteData: VoteData
});

export default rootReducer;

import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer'

const rootReducer = combineReducers({
  state: AuthReducer
});

export default rootReducer;

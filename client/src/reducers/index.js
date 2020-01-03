import { combineReducers } from 'redux';
import auth from './auth';
import question from './question';

export default combineReducers({
  auth,
  question
});
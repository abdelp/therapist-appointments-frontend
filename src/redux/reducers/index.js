import { combineReducers } from 'redux';
import session from './session';
import therapists from './therapists';

export default combineReducers({
  session,
  therapists,
});

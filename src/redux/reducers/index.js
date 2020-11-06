import { combineReducers } from 'redux';
import session from './session';
import therapists from './therapists';
import appointments from './appointments';

export default combineReducers({
  session,
  therapists,
  appointments,
});

import { LOGIN_USER } from './actionTypes';

export const loginUser = content => ({
  type: LOGIN_USER,
  payload: {
    content
  }
});

import { LOGIN_USER, LOGOUT_USER } from '../actionTypes';

const initialState = {
  username: null,
  email: null,
  token: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        ...action.payload.content,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        ...initialState,
      };
    }
    default:
      return state;
  }
}

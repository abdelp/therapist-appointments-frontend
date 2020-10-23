import { LOGIN_USER } from '../actionTypes';

const initialState = {
  username: null,
  email: null,
  token: null
};

export default function (state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        user: action.payload.content,
      };
    }
    default:
      return state;
  }
}

import { ADD_USER } from '../actionTypes';

const initialState = {

};

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_USER: {
      return state;
    }
    default:
      return state;
  }
};
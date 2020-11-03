import { ADD_APPOINTMENTS, FETCH_INIT, FETCH_FAILURE } from '../actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  appointments: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ADD_APPOINTMENTS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        appointments: action.payload.appointments,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}

import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from '../actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  therapists: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        therapists: action.payload.therapists,
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

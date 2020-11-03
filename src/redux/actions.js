import {
  FETCH_FAILURE, FETCH_INIT, FETCH_SUCCESS, LOGIN_USER, LOGOUT_USER,
  ADD_APPOINTMENTS, ADD_APPOINTMENT,
} from './actionTypes';

export const loginUser = content => ({
  type: LOGIN_USER,
  payload: {
    content,
  },
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const AddTherapists = content => ({
  type: FETCH_SUCCESS,
  payload: {
    therapists: content,
  },
});

export const FetchInit = () => ({
  type: FETCH_INIT,
});

export const FetchFailure = () => ({
  type: FETCH_FAILURE,
});

export const AddAppointment = content => ({
  type: ADD_APPOINTMENT,
  payload: {
    appointments: content,
  },
});

export const AddAppointments = content => ({
  type: ADD_APPOINTMENTS,
  payload: {
    appointments: content,
  },
});

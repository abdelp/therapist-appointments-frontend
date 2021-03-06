import * as actions from '../../redux/actions';
import * as types from '../../redux/actionTypes';
import userData from './user-data.json';
import therapists from './therapists.json';

describe('actions', () => {
  it('should create an action to login a user', () => {
    const expectedAction = {
      type: types.LOGIN_USER,
      payload: {
        content: userData,
      },
    };

    expect(actions.loginUser(userData)).toEqual(expectedAction);
  });

  it('should create an action to logout the user', () => {
    const expectedAction = {
      type: types.LOGOUT_USER,
    };

    expect(actions.logoutUser(types.LOGOUT_USER)).toEqual(expectedAction);
  });

  it('should create an action to add therapists to the store', () => {
    const expectedAction = {
      type: types.FETCH_SUCCESS,
      payload: { therapists },
    };

    expect(actions.AddTherapists(therapists)).toEqual(expectedAction);
  });

  it('should create an actions to indicate that the fetching initialized', () => {
    const expectedAction = {
      type: types.FETCH_INIT,
    };

    expect(actions.FetchInit(types.FETCH_INIT)).toEqual(expectedAction);
  });
});

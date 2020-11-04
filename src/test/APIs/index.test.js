import axios from 'axios';
import {
  createAppointment, getAppointments, getTherapists, signinUser,
} from '../../APIs';
import signedInData from './signed-in.json';
import therapists from './therapists.json';

jest.mock('axios');

describe('index API', () => {
  it('fetches successfully pokemons data from the API', async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve(signedInData));

    await expect(signinUser({ username: 'abdel', password: '123456' })).resolves.toEqual(signedInData);
  });

  it('fetches erroneously data from the API', async () => {
    const errorMessage = 'Network Error';
    // eslint-disable-next-line prefer-promise-reject-errors
    axios.post.mockImplementationOnce(() => Promise.reject({
      response: {
        data: {
          error: errorMessage,
        },
      },
    }));

    await expect(signinUser({ username: 'abdel', password: '123456' })).rejects.toThrow(errorMessage);
  });

  it('gets appointments of user', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(therapists));

    await expect(getTherapists()).resolves.toEqual(therapists.data);
  });
});

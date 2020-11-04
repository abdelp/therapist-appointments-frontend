import axios from 'axios';
import {
  createAppointment, getAppointments, getTherapists, signinUser,
} from '../../APIs';
import signedInData from './signed-in.json';
// import pokemon from './pokemon.json';
// import result from './result.json';

jest.mock('axios');

describe('index API', () => {
  it('fetches successfully pokemons data from the API', async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve(signedInData));

    await expect(signinUser({ username: 'abdel', password: '123456' })).resolves.toEqual(signedInData);
  });

  // it('fetches erroneously data from the API', async () => {
  //   const errorMessage = 'Network Error';

  //   axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

  //   await expect(getPokemons()).rejects.toThrow(errorMessage);
  // });
});

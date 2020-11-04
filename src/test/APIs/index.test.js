import axios from 'axios';
import {
  createAppointment, getAppointments, getTherapists, signinUser,
} from '../../APIs';
import signedInData from './signed-in.json';
import therapists from './therapists.json';
import newAppointment from './new-appointment.json';

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

  it('gets therapists', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(therapists.data));

    await expect(getTherapists()).resolves.toEqual(therapists.data.data);
  });

  it('creates a new appointment', async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve(newAppointment.data));
    const appointmentData = {
      userId: 1,
      therapistId: 2,
      date: new Date(),
      token: '123456',
    };

    await expect(createAppointment(appointmentData)).resolves.toEqual(newAppointment.data);
  });
});

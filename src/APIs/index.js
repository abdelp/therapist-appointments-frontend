import axios from 'axios';

const API_BASE = 'https://hidden-falls-17981.herokuapp.com';

const signinUser = async (username, password) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const res = await axios.post('https://hidden-falls-17981.herokuapp.com/login', {
      username,
      password,
    },
    headers);
    return res;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};

const getTherapists = async token => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const { data } = await axios
      .get(
        `${API_BASE}/therapists`,
        {
          headers,
        },
      );

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const createAppointment = async ({ userId, therapistId, date, token }) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const res = await axios
      .post(
        `${API_BASE}/users/${userId}/appointments`,
        {
          start_at: date,
          user_id: userId,
          therapist_id: therapistId,
        },
        {
          headers,
        },
      );

    return res;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};

const getAppointments = async (userId, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const { data } = await axios
      .get(
        `${API_BASE}/users/${userId}/appointments`,
        {
          headers,
        },
      );

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export { signinUser, getTherapists, createAppointment, getAppointments };

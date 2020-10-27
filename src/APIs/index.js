import axios from 'axios';

const API_BASE = 'https://hidden-falls-17981.herokuapp.com';

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
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export { getTherapists };

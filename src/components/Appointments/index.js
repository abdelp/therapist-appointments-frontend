import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAppointments } from '../../APIs';

import { AddAppointments } from '../../redux/actions';

const Appointments = ({
  appointments, userId, token, AddAppointments,
}) => {
  const handleFetch = async () => {
    try {
      const result = await getAppointments(userId, token);
      AddAppointments(result);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div id="appointments-page">
      <h1 className="text-center">Appointments</h1>
      <div className="appointments-container">
        <div className="titles">
          <div>
            <h3>
              Therapist
            </h3>
          </div>
          <div>
            <h3>
              Date
            </h3>
          </div>
        </div>
        <div className="appointments-list">
          {appointments.map(a => (
            <div className="appointment-item" key={a.id}>
              <div>{a.therapist_name}</div>
              <div>{a.start_at}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const {
    appointments: {
      appointments,
      isLoading,
      isError,
    },
    session: {
      token,
      id: userId,
    },
  } = state;

  return {
    appointments, isLoading, isError, token, userId,
  };
};

Appointments.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object),
  userId: PropTypes.number,
  token: PropTypes.string,
  AddAppointments: PropTypes.func.isRequired,
};

Appointments.defaultProps = {
  appointments: [],
  userId: null,
  token: '',
};

export default connect(
  mapStateToProps,
  { AddAppointments },
)(Appointments);

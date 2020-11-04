import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AddAppointment } from '../../redux/actions';
import { createAppointment } from '../../APIs';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  date: new Date().toISOString(),
  therapistId: 1,
};

const NewAppointmentFormBase = ({
  userId, token, therapists, history, AddAppointment, location,
}) => {
  const [state, setState] = useState({ ...INITIAL_STATE, therapistId: location.state.therapistId });

  const onSubmit = event => {
    const { date, therapistId } = state;

    event.preventDefault();

    createAppointment({
      userId, therapistId, date, token,
    })
      .then(res => {
        AddAppointment({ userId, token: res.data.token });

        setState({ ...INITIAL_STATE });
        history.push(ROUTES.APPOINTMENTS);
      })
      .catch(() => history.push(ROUTES.LOGIN));
  };

  const onChange = e => {
    e.persist();
    setState(
      state => ({ ...state, [e.target.name]: e.target.value }),
    );
  };

  const isInvalid = !state.date
    || !state.therapistId;

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="date">
        <Form.Control
          name="date"
          value={state.date}
          onChange={onChange}
          placeholder="Appointment date"
          type="datetime-local"
        />
      </Form.Group>
      <Form.Group controlId="therapists">
        <select
          className="custom-select"
          name="therapistId"
          onChange={onChange}
          required
          value={state.therapistId}
        >
          { therapists.map(therapist => (
            <option key={therapist.user_id} value={therapist.user_id}>
              {therapist.fullname}
            </option>
          ))}
        </select>
      </Form.Group>
      <button disabled={isInvalid} type="submit" className="book-appointment-btn">
        Book Appointment
      </button>
      {state.error && <p className="error-msg">{state.error.message}</p>}
    </Form>
  );
};

const mapStateToProps = state => {
  const { session: { token, id: userId }, therapists: { therapists } } = state;

  return { userId, token, therapists };
};

const NewAppointmentForm = connect(
  mapStateToProps,
  { AddAppointment },
)(withRouter(NewAppointmentFormBase));

const NewAppointmentPage = () => (
  <div id="new-appointment-page">
    <div className="content text-center">
      <h1>New Appointment</h1>
      <NewAppointmentForm />
    </div>
  </div>
);

NewAppointmentFormBase.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  userId: PropTypes.number,
  token: PropTypes.string,
  therapists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      fullname: PropTypes.string,
      user_id: PropTypes.number,
      img_url: PropTypes.string,
    }),
  ),
  AddAppointment: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      therapistId: PropTypes.number,
    }),
  }),
};

NewAppointmentFormBase.defaultProps = {
  userId: null,
  token: '',
  therapists: [],
  location: { state: { therapistId: null } },
};

export default NewAppointmentPage;

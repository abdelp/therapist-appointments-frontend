import React, { useState } from 'react';
import {
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import { loginUser } from '../../redux/actions';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  error: null,
};

const SignUpFormBase = props => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const onSubmit = event => {
    const { username, email, password } = state;
    event.preventDefault();

    fetch('https://hidden-falls-17981.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    })
      .then(resp => resp.json())
      .then(res => {
        props.loginUser({ ...res.user, token: res.token });

        setState({ ...INITIAL_STATE });
        props.history.push(ROUTES.HOME);
      })
      .catch(error => setState(state => ({ ...state, error })));
  };

  const onChange = e => {
    e.persist();
    setState(
      state => ({ ...state, [e.target.name]: e.target.value }),
    );
  };

  const isInvalid = state.password !== state.passwordConfirmation
    || !state.password
    || !state.email
    || !state.username;

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Control
          name="username"
          type="text"
          value={state.username}
          onChange={onChange}
          placeholder="Full Name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="email"
          type="email"
          value={state.email}
          onChange={onChange}
          placeholder="Email Address"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="password"
          type="password"
          value={state.password}
          onChange={onChange}
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="passwordConfirmation"
          type="password"
          value={state.passwordConfirmation}
          onChange={onChange}
          placeholder="Confirm Password"
        />
      </Form.Group>
      <Button
        type="submit"
        disabled={isInvalid}
        className="control-btn"
      >
        Sign Up
      </Button>

      {state.error && <p>{state.error.message}</p>}
    </Form>
  );
};

const SignUpForm = connect(
  null,
  { loginUser },
)(withRouter(SignUpFormBase));

const SignUpPage = () => (
  <div id="signup-page" className="text-center">
    <div className="content">
      <h1 className="text-white">Sign Up</h1>
      <SignUpForm />
    </div>
  </div>
);

SignUpFormBase.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  loginUser: PropTypes.func.isRequired,
};

SignUpFormBase.defaultProps = {
  history: {},
};

export default SignUpPage;

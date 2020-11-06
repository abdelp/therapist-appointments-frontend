import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { loginUser } from '../../redux/actions';
import { signinUser } from '../../APIs';

import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  username: '',
  password: '',
  error: null,
};

const SignInFormBase = ({ history, loginUser }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const onSubmit = event => {
    const { username, password } = state;
    event.preventDefault();

    signinUser(username, password)
      .then(res => {
        loginUser({ ...res.data.user, token: res.data.token });

        setState({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch(error => setState(state => ({ ...state, error })));
  };

  const onChange = e => {
    e.persist();
    setState(
      state => ({ ...state, [e.target.name]: e.target.value }),
    );
  };

  const isInvalid = !state.password
    || !state.username;

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Control
          name="username"
          value={state.username}
          onChange={onChange}
          placeholder="Username"
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Control
          name="password"
          type="password"
          value={state.password}
          onChange={onChange}
          placeholder="Password"
        />
      </Form.Group>
      <button disabled={isInvalid} type="submit" className="control-btn">
        Sign In
      </button>
      {state.error && <p className="error-msg">{state.error.message}</p>}
    </Form>
  );
};

const SignInForm = connect(
  null,
  { loginUser },
)(withRouter(SignInFormBase));

const SignInPage = () => (
  <div id="login-page" className="text-center">
    <div className="content">
      <h1 className="text-white">Sign In</h1>
      <SignInForm />
    </div>
  </div>
);

SignInFormBase.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default SignInPage;

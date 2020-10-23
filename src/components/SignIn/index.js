import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { loginUser } from '../../redux/actions';

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

    fetch('https://hidden-falls-17981.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(resp => resp.json())
      .then(data => {
        loginUser({ ...data.user, token: data.token });

        setState({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch(e => console.log(e));
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
      <Button disabled={isInvalid} type="submit">
        Sign In
      </Button>
      {state.error && <p>{state.error.message}</p>}
    </Form>
  );
};

const SignInForm = connect(
  null, // Add mapStateToProps to redirect
  { loginUser },
)(withRouter(SignInFormBase));

const SignInPage = () => (
  <div className="text-center">
    <h1>Sign In</h1>
    <SignInForm />
  </div>
);

SignInFormBase.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default SignInPage;

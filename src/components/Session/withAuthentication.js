import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthUserContext from './context';

const withAuthentication = Component => {
  const WithAuthentication = props => {
    const [state, setState] = useState({
      authUser: JSON.parse(localStorage.getItem('username')),
    });

    useEffect(() => {
      localStorage.getItem('username');

      const authListener = () => {
        localStorage.removeItem('authUser');
        setState({ authUser: null });
      };

      return () => authListener();
    }, []);
  
    return (
      <AuthUserContext.Provider value={state.authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };

  return WithAuthentication;
};

export default withAuthentication;

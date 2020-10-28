import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './index.css';

import Container from 'react-bootstrap/Container';
import * as ROUTES from '../../constants/routes';

import Sidebar from '../Sidebar';

import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import HomePage from '../Home';
import TherapistsPage from '../Therapists';

const App = () => (
  <Container fluid>
    <Router>
      <Sidebar />
      <div className="page-container">
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.LOGIN} component={SignInPage} />
          <Route exact path={ROUTES.SIGNUP} component={SignUpPage} />
          <Route exact path={ROUTES.THERAPISTS} component={TherapistsPage} />
        </Switch>
      </div>
    </Router>
  </Container>
);

export default App;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ROUTES from '../../constants/routes';

import twitterLogo from '../../assets/icons/twitter.svg';
import facebookLogo from '../../assets/icons/facebook.svg';
import googleplusLogo from '../../assets/icons/google-plus.svg';
import vimeoLogo from '../../assets/icons/vimeo.svg';
import pinterestLogo from '../../assets/icons/pinterest.svg';

import { logoutUser } from '../../redux/actions';

const Sidebar = ({ username, logoutUser }) => (
  <nav className="sidebar">
    <label htmlFor="hamburger" className="hamburger-icon">&#9776;</label>
    <input type="checkbox" id="hamburger" name="hamburger" />

    <div className="nav-items">
      <div className="links-container">
        <NavLink exact to={ROUTES.HOME} activeClassName="active">HOME</NavLink>
        <NavLink to={ROUTES.THERAPISTS} activeClassName="active">THERAPISTS</NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">APPOINTMENTS</NavLink>
        {!username ? (
          <>
            <NavLink to={ROUTES.LOGIN} activeClassName="active">LOGIN</NavLink>
            <NavLink to={ROUTES.SIGNUP} activeClassName="active">SIGNUP</NavLink>
          </>
        )
          : <button type="button" onClick={logoutUser} className="logout-btn">LOGOUT</button>}
      </div>
    </div>

    <footer className="sm-links">
      <div>
        <ul className="nav">
          <li>
            <a href="www.twitter.com">
              <img src={twitterLogo} alt="twitter-logo" />
            </a>
          </li>
          <li>
            <a href="www.twitter.com">
              <img src={facebookLogo} alt="facebook-logo" />
            </a>
          </li>
          <li>
            <a href="www.twitter.com">
              <img src={googleplusLogo} alt="googleplus-logo" />
            </a>
          </li>
          <li>
            <a href="www.twitter.com">
              <img src={vimeoLogo} alt="vimeo-logo" />
            </a>
          </li>
          <li>
            <a href="www.twitter.com">
              <img src={pinterestLogo} alt="pinterest-logo" />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; 2015 PIAGGIO & C.S.P.A - P.IVA</p>
      </div>
    </footer>
  </nav>
);

const mapStateToProps = state => {
  const { session: { username } } = state;

  return { username };
};

Sidebar.propTypes = {
  username: PropTypes.string,
  logoutUser: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  username: null,
};

export default connect(
  mapStateToProps,
  { logoutUser },
)(Sidebar);

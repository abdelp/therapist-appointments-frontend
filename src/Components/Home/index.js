import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const HomePage = () => (
  <div id="home-page">
    <header>
      <form className="search-form">
        <label htmlFor="search">
          <input name="search" type="text" placeholder="Search" className="search-input" />
        </label>
      </form>
    </header>
    <div className="home-content">
      <div className="content">
        <h2>BOOK A MASSAGE SESSION</h2>
        <hr />
        <p>
          We utilize the latest techniques to provide cost-effective and time conscious care.
          A variety of treatment modalities are utilized as needed for symptom reduction.
          We are participating providers for Blue Cross and Blue Shield of North Dakota, ND PERS,
          Medicare, and a variety of other managed care plans.
        </p>
        <div className="controls">
          <div className="select">
            <select name="slct" id="slct">
              <option value="1">London</option>
              <option value="2">Paris</option>
              <option value="3">New York</option>
              <option value="4">Rio</option>
            </select>
          </div>
          <NavLink exact to={ROUTES.THERAPISTS}>
            Book Now
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(HomePage);

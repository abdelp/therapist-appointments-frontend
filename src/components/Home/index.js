import React from 'react';
import { withRouter } from 'react-router-dom';

import searchIcon from '../../assets/icons/search.svg';

const HomePage = () => (
  <div id="home-page">
    <header>
      <form className="search-form">
        <label htmlFor="search">
          <input name="search" type="text" placeholder="Search" className="search-input" />
        </label>
      </form>
    </header>
    <div className='home-content'>
      <h1>Schedule your appointment with the best professionals</h1>
    </div>
  </div>
);

export default withRouter(HomePage);

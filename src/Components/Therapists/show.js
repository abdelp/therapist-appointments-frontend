import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const TherapistDetailsPage = props => {
  const { location: { state: { t } } } = props;

  return (
    <div id="therapist-details-page" className="therapist-details-container">
      <div className="img-container">
        <img src={t.img_url} alt={t.fullname} />
      </div>
      <div className="details-container">
        <h2>{t.fullname}</h2>

        <div className="fees">
          <div className="line">
            <div>Finance fee</div>
            <div>$129</div>
          </div>
          <div className="line">
            <div>Option to purchase fee</div>
            <div>$249</div>
          </div>
          <div className="line">
            <div>Total ammount payable</div>
            <div>$9,879</div>
          </div>
          <div className="line">
            <div>Duration</div>
            <div>48 Months</div>
          </div>
        </div>
        <NavLink exact to={ROUTES.NEW_APPOINTMENT} className="book-appointment-btn">
          Book Now
        </NavLink>
      </div>
    </div>
  );
};

TherapistDetailsPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      t: PropTypes.shape({
        fullname: PropTypes.string,
        img_url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default TherapistDetailsPage;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SocialMediaFooter from '../SocialMediaFooter';

const groupItems = arr => {
  const result = [];

  for (let i = 0; i < arr.length / 3; i += 1) {
    result.push(arr.slice(i * 3, (i * 3) + 3));
  }

  return result;
};

const TherapistsCarousel = ({
  therapists,
}) => (
  <Carousel interval={null}>
    { groupItems(therapists).map(group => (
      <Carousel.Item key={`g-${group[0].user_id}`}>
        <div className="slide-group">
          {
            group.map(t => (
              <div key={t.user_id}>
                <div className="therapist-item">
                  <Link
                    to={{
                      pathname: `/therapists/${t.user_id}`,
                      state: { t },
                    }}
                    className="therapist-link"
                  >
                    <div className="img-container">
                      <img
                        src={t.img_url}
                        alt="Third slide"
                      />
                    </div>
                    <div className="therapist-details">
                      <h5>{t.fullname}</h5>
                      <hr />
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                  </Link>
                  <SocialMediaFooter />
                </div>
              </div>
            ))
            }
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
);

TherapistsCarousel.propTypes = {
  therapists: PropTypes.arrayOf(
    PropTypes.shape({
      user_id: PropTypes.number,
      img_url: PropTypes.string,
      fullname: PropTypes.string,
    }),
  ),
};

TherapistsCarousel.defaultProps = {
  therapists: [],
};

export default TherapistsCarousel;

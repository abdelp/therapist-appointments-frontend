import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TherapistCarousel from '../TherapistsCarousel';
import { getTherapists } from '../../APIs';

import { AddTherapists, FetchInit, FetchFailure } from '../../redux/actions';

const TherapistsPage = ({
  therapists, token, isLoading, isError, AddTherapists, FetchInit, FetchFailure,
}) => {
  const handleFetch = async () => {
    FetchInit();

    try {
      const result = await getTherapists(token);
      AddTherapists(result);
    } catch (e) {
      FetchFailure();
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div id="therapists-page">
      <h1 className="text-center">Therapists</h1>
      <h4 className="text-center">List of our professionals</h4>
      <hr />
      <div>
        {isError && <p className="error-msg">Something went wrong...</p>}

        {isLoading ? (
          <div className="loader-container">
            Loading...
          </div>
        ) : (
          <TherapistCarousel therapists={therapists} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const {
    therapists: {
      therapists,
      isLoading,
      isError,
    },
    session: {
      token,
    },
  } = state;

  return {
    therapists, isLoading, isError, token,
  };
};

TherapistsPage.propTypes = {
  therapists: PropTypes.arrayOf(PropTypes.object),
  token: PropTypes.string,
  AddTherapists: PropTypes.func.isRequired,
  FetchFailure: PropTypes.func.isRequired,
  FetchInit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

TherapistsPage.defaultProps = {
  therapists: [],
  token: null,
  isLoading: false,
  isError: false,
};

export default connect(
  mapStateToProps,
  { AddTherapists, FetchInit, FetchFailure },
)(TherapistsPage);

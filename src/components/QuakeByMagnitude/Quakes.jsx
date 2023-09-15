import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchQuakeMag, setMinMagnitude, setMaxMagnitude } from '../../Redux/QuakeSlice';
import MagnitudeMap from './MagnitudeMap';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import backBtn from '../../assets/left.svg';

const FiveSix = () => {
  const { minMagnitude, maxMagnitude } = useParams();
  const dispatch = useDispatch();
  const { earthquakes, isLoading, error } = useSelector((state) => state.earthquake);

  useEffect(() => {
    dispatch(setMinMagnitude(minMagnitude));
    dispatch(setMaxMagnitude(maxMagnitude));
    dispatch(FetchQuakeMag());
  }, [dispatch, minMagnitude, maxMagnitude]);

  return (
    <div>
      {isLoading === 'loading' && <p>Loading...</p>}
      {isLoading === 'failed' && <p>Error: {error}</p>}
      {isLoading === 'succeeded' && earthquakes.length > 0 ? (
        <div className="mapContainer">
          <a href="../../" className="back-button">
            <img className="TL_Img" src={backBtn} alt="Back" />
          </a>
          <MagnitudeMap earthquakes={earthquakes} />
        </div>
      ) : (
        // Display an <h2> element when there's no data fetched
        <h2>No earthquake data available with selected Magnitude</h2>
      )}
    </div>
  );
};
FiveSix.propTypes = {
  // minMagnitude: PropTypes.number.isRequired,
  // maxMagnitude: PropTypes.number.isRequired,
};

export default FiveSix;

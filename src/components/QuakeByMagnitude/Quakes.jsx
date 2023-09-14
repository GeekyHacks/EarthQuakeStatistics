import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchQuakeMag, setMinMagnitude, setMaxMagnitude } from '../../Redux/QuakeSlice';
import MagnitudeMap from './MagnitudeMap';
import PropTypes from 'prop-types';

const FiveSix = ({ minMagnitude, maxMagnitude }) => {
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
        <div>
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
  minMagnitude: PropTypes.number.isRequired,
  maxMagnitude: PropTypes.number.isRequired,
};

export default FiveSix;

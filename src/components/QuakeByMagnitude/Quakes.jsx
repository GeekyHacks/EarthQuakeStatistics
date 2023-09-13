import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchQuakeMag, setMinMagnitude, setMaxMagnitude } from '../../Redux/QuakeSlice';
import MagnitudeMap from './MagnitudeMap';

const FiveSix = ({ minMagnitude, maxMagnitude }) => {
  // Accept minMagnitude and maxMagnitude as props
  const dispatch = useDispatch();
  const { earthquakes, isLoading, error } = useSelector((state) => state.earthquake);

  useEffect(() => {
    // Fetch earthquake data when the component mounts and whenever min/max magnitude changes
    dispatch(setMinMagnitude(minMagnitude)); // Set minMagnitude from props
    dispatch(setMaxMagnitude(maxMagnitude)); // Set maxMagnitude from props
    dispatch(FetchQuakeMag());
  }, [dispatch, minMagnitude, maxMagnitude]);

  return (
    <div>
      <h1>Earthquake Map</h1>
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

export default FiveSix;

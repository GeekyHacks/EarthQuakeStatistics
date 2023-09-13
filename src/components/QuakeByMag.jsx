// QuakeByMag.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchQuakeMag, setMinMagnitude, setMaxMagnitude } from '../Redux/QuakeSlice';
import MagnitudeMap from './MagnitudeMap';

const QuakeByMag = () => {
  const dispatch = useDispatch();
  const { earthquakes, isLoading, error, minMagnitude, maxMagnitude } = useSelector((state) => state.earthquake);

  useEffect(() => {
    // Fetch earthquake data when the component mounts
    dispatch(FetchQuakeMag());
  }, [dispatch]);

  const handleMinMagnitudeChange = (e) => {
    // Dispatch the action to set minMagnitude
    dispatch(setMinMagnitude(parseFloat(e.target.value)));
  };

  const handleMaxMagnitudeChange = (e) => {
    // Dispatch the action to set maxMagnitude
    dispatch(setMaxMagnitude(parseFloat(e.target.value)));
  };

  const handleMapRender = () => {
    // Dispatch the action to fetch earthquakes based on the input values
    dispatch(FetchQuakeMag());
  };

  return (
    <div>
      <h1>Earthquake Map</h1>
      <div>
        <label htmlFor="minMagnitude">Minimum Magnitude:</label>
        <input type="number" id="minMagnitude" value={minMagnitude} onChange={handleMinMagnitudeChange} />
      </div>
      <div>
        <label htmlFor="maxMagnitude">Maximum Magnitude:</label>
        <input type="number" id="maxMagnitude" value={maxMagnitude} onChange={handleMaxMagnitudeChange} />
      </div>
      <button onClick={handleMapRender}>Submit</button>
      {isLoading === 'loading' && <p>Loading...</p>}
      {isLoading === 'failed' && <p>Error: {error}</p>}
      {isLoading === 'succeeded' && (
        <div>
          <MagnitudeMap earthquakes={earthquakes} />
        </div>
      )}
    </div>
  );
};

export default QuakeByMag;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchQuakeMag, setMinMagnitude, setMaxMagnitude } from '../../Redux/QuakeSlice';
import MagnitudeMap from './MagnitudeMap';

const QuakeByMag = () => {
  const dispatch = useDispatch();
  const { earthquakes, isLoading, error, minMagnitude, maxMagnitude } = useSelector((state) => state.earthquake);

  useEffect(() => {
    dispatch(FetchQuakeMag());
  }, [dispatch, minMagnitude, maxMagnitude]);

  const handleMinMagnitudeChange = (e) => {
    dispatch(setMinMagnitude(parseFloat(e.target.value)));
  };

  const handleMaxMagnitudeChange = (e) => {
    dispatch(setMaxMagnitude(parseFloat(e.target.value)));
  };

  return (
    <div className='QuakeByMap'>
      <h1>Earthquake Map</h1>
      <div>
        <label htmlFor="minMagnitude">Minimum Magnitude:</label>
        <input type="number" id="minMagnitude" value={minMagnitude} onChange={handleMinMagnitudeChange} />
      </div>
      <div>
        <label htmlFor="maxMagnitude">Maximum Magnitude:</label>
        <input type="number" id="maxMagnitude" value={maxMagnitude} onChange={handleMaxMagnitudeChange} />
      </div>
      {isLoading === 'loading' && <p>Loading...</p>}
      {isLoading === 'failed' && <p>Error: {error}</p>}
      {isLoading === 'succeeded' && earthquakes.length > 0 ? (
        <div>
          <MagnitudeMap earthquakes={earthquakes} />
        </div>
      ) : null}
    </div>
  );
};

export default QuakeByMag;

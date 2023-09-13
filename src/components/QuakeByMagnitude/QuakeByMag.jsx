// QuakeByMag.js

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { FetchQuakeMag, setMinMagnitude, setMaxMagnitude } from '../../Redux/QuakeSlice';
// import MagnitudeMap from './MagnitudeMap';
// // import ContinentSelector from '../ContinentSelector'; // Import the ContinentSelector component

// const QuakeByMag = () => {
//   const dispatch = useDispatch();
//   const { earthquakes, isLoading, error, minMagnitude, maxMagnitude } = useSelector((state) => state.earthquake);
//   const [selectedContinent, setSelectedContinent] = useState(''); // Add selectedContinent state

//   useEffect(() => {
//     // Fetch earthquake data when the component mounts
//     dispatch(FetchQuakeMag());
//   }, [dispatch]);

//   const handleMinMagnitudeChange = (e) => {
//     dispatch(setMinMagnitude(parseFloat(e.target.value)));
//   };

//   const handleMaxMagnitudeChange = (e) => {
//     dispatch(setMaxMagnitude(parseFloat(e.target.value)));
//   };

//   const handleMapRender = () => {
//     dispatch(FetchQuakeMag());
//   };

//   // const handleContinentChange = (continent) => {
//   //   setSelectedContinent(continent);
//   // };

//   return (
//     <div>
//       <h1>Earthquake Map</h1>
//       {/* <ContinentSelector onContinentChange={handleContinentChange} /> Include ContinentSelector */}
//       <div>
//         <label htmlFor="minMagnitude">Minimum Magnitude:</label>
//         <input type="number" id="minMagnitude" value={minMagnitude} onChange={handleMinMagnitudeChange} />
//       </div>
//       <div>
//         <label htmlFor="maxMagnitude">Maximum Magnitude:</label>
//         <input type="number" id="maxMagnitude" value={maxMagnitude} onChange={handleMaxMagnitudeChange} />
//       </div>
//       <button onClick={handleMapRender}>Submit</button>
//       {isLoading === 'loading' && <p>Loading...</p>}
//       {isLoading === 'failed' && <p>Error: {error}</p>}
//       {isLoading === 'succeeded' && (
//         <div>
//           <MagnitudeMap earthquakes={earthquakes} selectedContinent={selectedContinent} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuakeByMag;

// QuakeByMag.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchQuakeMag, setMinMagnitude, setMaxMagnitude } from '../../Redux/QuakeSlice';
import MagnitudeMap from './MagnitudeMap';

const QuakeByMag = () => {
  const dispatch = useDispatch();
  const { earthquakes, isLoading, error, minMagnitude, maxMagnitude } = useSelector((state) => state.earthquake);

  useEffect(() => {
    // Fetch earthquake data when the component mounts and whenever min/max magnitude changes
    dispatch(FetchQuakeMag());
  }, [dispatch, minMagnitude, maxMagnitude]);

  const handleMinMagnitudeChange = (e) => {
    dispatch(setMinMagnitude(parseFloat(e.target.value)));
  };

  const handleMaxMagnitudeChange = (e) => {
    dispatch(setMaxMagnitude(parseFloat(e.target.value)));
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
      <button onClick={() => dispatch(FetchQuakeMag())}>Submit</button>
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

// // FiveSix.jsx

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { FetchQuakeMag, setMinMagnitude, setMaxMagnitude } from '../../Redux/QuakeSlice';
// import MagnitudeMap from './MagnitudeMap';

// const FiveSix = () => {
//   const dispatch = useDispatch();
//   let { earthquakes, isLoading, error, minMagnitude, maxMagnitude } = useSelector((state) => state.earthquake);
//   minMagnitude = 5;
//   maxMagnitude = 6;
//   useEffect(() => {
//     // Fetch earthquake data when the component mounts and whenever min/max magnitude changes
//     dispatch(FetchQuakeMag());
//   }, [dispatch, minMagnitude, maxMagnitude]);

//   const handleMinMagnitudeChange = () => {
//     dispatch(setMinMagnitude(parseFloat(minMagnitude)));
//   };

//   const handleMaxMagnitudeChange = () => {
//     dispatch(setMaxMagnitude(parseFloat(maxMagnitude)));
//   };
//   handleMinMagnitudeChange();
//   handleMaxMagnitudeChange();
//   return (
//     <div>
//       <h1>Earthquake Map</h1>
//       {isLoading === 'loading' && <p>Loading...</p>}
//       {isLoading === 'failed' && <p>Error: {error}</p>}
//       {isLoading === 'succeeded' && earthquakes.length > 0 ? (
//         <div>
//           <MagnitudeMap earthquakes={earthquakes} />
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default FiveSix;

// FiveSix.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchQuakeMag, setMinMagnitude, setMaxMagnitude } from '../../Redux/QuakeSlice';
import MagnitudeMap from './MagnitudeMap';

const FiveSix = ({ minMagnitude, maxMagnitude }) => {
  // Accept minMagnitude and maxMagnitude as props
  const dispatch = useDispatch();
  let { earthquakes, isLoading, error } = useSelector((state) => state.earthquake);

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
      ) : null}
    </div>
  );
};

export default FiveSix;

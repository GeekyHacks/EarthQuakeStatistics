import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FetchQuakeByContinent } from '../Redux/QuakeSlice';
import ContinentMap from './QuakeByContinent/ContinentMap'; // Import the ContinentMap component

const ContinentSelector = () => {
  const dispatch = useDispatch();
  const [selectedContinent, setSelectedContinent] = useState('');
  const [earthquakesByContinent, setEarthquakesByContinent] = useState([]); // State to store earthquakes by continent

  const handleContinentSelect = (continent) => {
    setSelectedContinent(continent);
    dispatch(FetchQuakeByContinent(continent)).then((action) => {
      if (action.payload) {
        setEarthquakesByContinent(action.payload);
      }
    });
  };

  return (
    <div>
      <h2>Select a Continent:</h2>
      <button onClick={() => handleContinentSelect('Africa')}>Africa</button>
      <button onClick={() => handleContinentSelect('Asia')}>Asia</button>
      <button onClick={() => handleContinentSelect('Europe')}>Europe</button>
      {/* Add more buttons for other continents */}
      <div id="map-container">{selectedContinent && <ContinentMap earthquakes={earthquakesByContinent} />}</div>
    </div>
  );
};

export default ContinentSelector;

// QuakeCard.jsx

import React, { useEffect, useState } from 'react';
import MagnitudeMap from './MagnitudeMap';
import ContinentSelector from '../ContinentSelector'; // Import the ContinentSelector component

const QuakeCard = () => {
  const apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';
  const minMagnitude = 4;
  const maxMagnitude = 5;
  const [filteredEarthquakes, setFilteredEarthquakes] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState(''); // Add selectedContinent state

  useEffect(() => {
    // Fetch earthquake data and filter by magnitude
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Filter earthquakes by magnitude
        const filteredQuakes = data.features.filter(
          (quake) => quake.properties.mag > minMagnitude && maxMagnitude > quake.properties.mag
        );
        setFilteredEarthquakes(filteredQuakes);
      })
      .catch((error) => {
        console.error('Error fetching earthquake data:', error);
      });
  }, [apiUrl, minMagnitude]);

  const handleContinentChange = (continent) => {
    setSelectedContinent(continent);
  };

  return (
    <div>
      <h1>Earthquake Map</h1>
      <ContinentSelector onContinentChange={handleContinentChange} /> {/* Include ContinentSelector */}
      <MagnitudeMap earthquakes={filteredEarthquakes} selectedContinent={selectedContinent} />
    </div>
  );
};

export default QuakeCard;

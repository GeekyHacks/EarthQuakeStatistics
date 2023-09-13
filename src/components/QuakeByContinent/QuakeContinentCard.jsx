// QuakeCard.jsx

import React, { useEffect, useState } from 'react';
import ContinentMap from './ContinentMap';

const QuakeCard = () => {
  const apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';
  const [filteredEarthquakes, setFilteredEarthquakes] = useState([]);

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
        // Handle any errors that occur during the fetch
        console.error('Error fetching earthquake data:', error);
      });
  }, [apiUrl, minMagnitude]);

  return (
    <div>
      <h1>Earthquake Map</h1>
      <ContinentMap earthquakes={filteredEarthquakes} />
    </div>
  );
};

export default QuakeCard;

import React, { useEffect, useState } from 'react';
import EarthquakeMap from './QuakeMap';

const QuakeCard = () => {
  const apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';
  const minMagnitude = 4; // Set your minimum magnitude threshold
  const [filteredEarthquakes, setFilteredEarthquakes] = useState([]);

  useEffect(() => {
    // Fetch earthquake data and filter by magnitude
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Filter earthquakes by magnitude
        const filteredQuakes = data.features.filter((quake) => quake.properties.mag > minMagnitude);
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
      <EarthquakeMap earthquakes={filteredEarthquakes} />
    </div>
  );
};

export default QuakeCard;

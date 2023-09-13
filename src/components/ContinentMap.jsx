import React, { useEffect } from 'react';
import L from 'leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';
import geolib from 'geolib'; // Import the geolib library

function QuakeMap({ earthquakes }) {
  useEffect(() => {
    // Check if the map container exists
    const mapContainer = document.getElementById('map');

    if (!mapContainer) {
      return;
    }

    // Initialize the map
    const map = L.map('map').setView([0, 0], 1);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Create an object to store earthquakes by continent
    const earthquakesByContinent = {};

    // Iterate through earthquakes and categorize them by continent
    earthquakes.forEach((earthquake) => {
      const { geometry, properties } = earthquake;
      const { coordinates } = geometry;
      const [longitude, latitude] = coordinates;

      // Use geolib to get the continent based on coordinates
      const continent = geolib.getContinent({ latitude, longitude });

      // Create a new array for the continent if it doesn't exist
      if (!earthquakesByContinent[continent]) {
        earthquakesByContinent[continent] = [];
      }

      // Add earthquake to the respective continent array
      earthquakesByContinent[continent].push({
        latitude,
        longitude,
        magnitude: properties.mag,
        location: properties.place,
      });

      L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup(`Magnitude: ${properties.mag}<br>Location: ${properties.place}`);
    });

    // Now you have earthquakes categorized by continent in the 'earthquakesByContinent' object
    console.log(earthquakesByContinent);

    // Cleanup: Remove the map and its event listeners when the component unmounts
    return () => {
      map.remove();
    };
  }, [earthquakes]);

  return <div id="map" style={{ height: '100vh', width: '100vw' }}></div>;
}

export default QuakeMap;

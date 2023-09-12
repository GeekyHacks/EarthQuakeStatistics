// EarthquakeMap.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';

function EarthquakeMap({ earthquakes }) {
  useEffect(() => {
    if (earthquakes.length === 0) {
      return; // Don't initialize the map if there are no earthquakes
    }

    // Initialize the map
    const map = L.map('map').setView([0, 0], 1); // Set an initial view and zoom level

    // Add a tile layer to the map (you can choose a different one)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add earthquake pinpoints to the map
    earthquakes.forEach((earthquake) => {
      const { geometry, properties } = earthquake;
      const { coordinates } = geometry;
      const [longitude, latitude] = coordinates;

      // Create a marker for each earthquake
      const marker = L.marker([latitude, longitude]).addTo(map);

      // Add a popup with earthquake information
      marker.bindPopup(`Magnitude: ${properties.mag}<br>Location: ${properties.place}`);
    });
  }, [earthquakes]);

  return <div id="map" style={{ height: '768px' }}></div>;
}

export default EarthquakeMap;

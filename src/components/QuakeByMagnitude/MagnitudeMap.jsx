// MagnitudeMap.jsx

import React, { useEffect } from 'react';
import L from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';

function MagnitudeMap({ earthquakes }) {
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

    // Add earthquake markers and popups to the map
    earthquakes.forEach((earthquake) => {
      const { geometry, properties } = earthquake;

      const { coordinates } = geometry;
      const [longitude, latitude] = coordinates;

      L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup(`Magnitude: ${properties.mag}<br>Location: ${properties.place}`);
    });

    // Cleanup: Remove the map and its event listeners when the component unmounts
    return () => {
      map.remove();
    };
  }, [earthquakes]);

  return <div id="map" style={{ height: '100vh', width: '100vw' }}></div>;
}

export default MagnitudeMap;

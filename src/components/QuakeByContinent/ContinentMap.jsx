//ContinentMap.jsx;

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import geolib from 'geolib';

function ContinentMap({ earthquakes }) {
  useEffect(() => {
    // Check if the map container exists
    const mapContainer = document.getElementById('map');

    if (!mapContainer) {
      return;
    }
  }, []);

  return (
    <div id="map" style={{ height: '500px', width: '100%' }}>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {earthquakes.map((earthquake, index) => {
          const { latitude, longitude, magnitude, location } = earthquake;

          // Use geolib to get the continent based on coordinates
          const continent = geolib.getContinent({ latitude, longitude });

          return (
            <Marker key={index} position={[latitude, longitude]}>
              <Popup>
                <div>
                  <strong>Magnitude:</strong> {magnitude}
                </div>
                <div>
                  <strong>Location:</strong> {location}
                </div>
                <div>
                  <strong>Continent:</strong> {continent}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default ContinentMap;

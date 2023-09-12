import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const QuakeCard=()=> {
  const earthquakes = [
    /* your earthquake data */
  ];

  return (
    <MapContainer center={[latitude, longitude]} zoom={zoomLevel} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {earthquakes.map((quake, index) => (
        <Marker key={index} position={[quake.latitude, quake.longitude]}>
          <Popup>
            Magnitude: {quake.magnitude}
            <br />
            Location: {quake.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default QuakeCard;
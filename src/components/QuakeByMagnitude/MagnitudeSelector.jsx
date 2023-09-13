// MagnitudeSelector.jsx
import React, { useState } from 'react';
import FiveSix from './Quakes'; // Import the FiveSix component

const MagnitudeSelector = () => {
  const [selectedMagnitude, setSelectedMagnitude] = useState(null);

  return (
    <div className="MagnitudeSelector">
      <h2>Select a Magnitude Range:</h2>
      <button onClick={() => setSelectedMagnitude({ min: 4, max: 5 })}>Four to Five Magnitude</button>
      <button onClick={() => setSelectedMagnitude({ min: 5, max: 6 })}>Five to Six Magnitude</button>
      <button onClick={() => setSelectedMagnitude({ min: 6, max: 7 })}>Six to Seven Magnitude</button>
      <button onClick={() => setSelectedMagnitude({ min: 7, max: 8 })}>Seven to Eight Magnitude</button>
      <button onClick={() => setSelectedMagnitude({ min: 8, max: 9 })}>Eight to Nine Magnitude</button>
      <button onClick={() => setSelectedMagnitude({ min: 9, max: 10 })}>Nine to Ten Magnitude</button>

      <div id="map-container">
        {selectedMagnitude && <FiveSix minMagnitude={selectedMagnitude.min} maxMagnitude={selectedMagnitude.max} />}
      </div>
    </div>
  );
};

export default MagnitudeSelector;

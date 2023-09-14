import React, { useState } from 'react';
import FiveSix from './Quakes';

const MagnitudeSelector = () => {
  const [selectedMagnitude, setSelectedMagnitude] = useState(null);

  return (
    <div className="MagnitudeSelector">
      <div id="map-container">
        {selectedMagnitude && <FiveSix minMagnitude={selectedMagnitude.min} maxMagnitude={selectedMagnitude.max} />}
      </div>

      <h2>Select a Magnitude Range:</h2>
      <div className="button-container">
        <button
          className="magnitude-button"
          style={{ backgroundImage: 'url(your-image-url)' }}
          onClick={() => setSelectedMagnitude({ min: 4, max: 5 })}
        >
          Four to Five Magnitude
        </button>
        <button
          className="magnitude-button"
          style={{ backgroundImage: 'url(your-image-url)' }}
          onClick={() => setSelectedMagnitude({ min: 5, max: 6 })}
        >
          Five to Six Magnitude
        </button>
        <button
          className="magnitude-button"
          style={{ backgroundImage: 'url(your-image-url)' }}
          onClick={() => setSelectedMagnitude({ min: 6, max: 7 })}
        >
          Six to Seven Magnitude
        </button>
      </div>
      <div className="button-container">
        <button
          className="magnitude-button"
          style={{ backgroundImage: 'url(your-image-url)' }}
          onClick={() => setSelectedMagnitude({ min: 7, max: 8 })}
        >
          Seven to Eight Magnitude
        </button>
        <button
          className="magnitude-button"
          style={{ backgroundImage: 'url(your-image-url)' }}
          onClick={() => setSelectedMagnitude({ min: 8, max: 9 })}
        >
          Eight to Nine Magnitude
        </button>
        <button
          className="magnitude-button"
          style={{ backgroundImage: 'url(your-image-url)' }}
          onClick={() => setSelectedMagnitude({ min: 9, max: 10 })}
        >
          Nine to Ten Magnitude
        </button>
      </div>
    </div>
  );
};

export default MagnitudeSelector;

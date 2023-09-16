import { useState } from 'react';
import { useSelector } from 'react-redux';

const MagnitudeSelector = () => {
  const [selectedMagnitude, setSelectedMagnitude] = useState(null);
  const QuakesNum = useSelector((state) => state.earthquake.earthquakes);

  const handleButtonClick = (min, max) => {
    setSelectedMagnitude({ min, max });
  };

  // Function to render buttons with dynamic magnitude ranges
  const renderMagnitudeButton = (min, max, label) => (
    <div className="button-container">
      <a
        href={`/EarthquakesTracker/Details/${min}/${max}`}
        className="magnitude-button"
        style={{ backgroundImage: 'url(your-image-url)' }}
        onClick={() => handleButtonClick(min, max)}
      >
        {label}
        <span className="BR_Span">
          {QuakesNum.filter((quake) => quake.properties.mag >= min && quake.properties.mag < max).length}
        </span>
      </a>
    </div>
  );

  return (
    <div className="MagnitudeSelector">
      <h2>Select a Magnitude Range:</h2>
      <div className="button-container">
        {renderMagnitudeButton(4, 5, 'Four to Five Magnitude')}
        {renderMagnitudeButton(5, 6, 'Five to Six Magnitude')}
        {renderMagnitudeButton(6, 7, 'Six to Seven Magnitude')}
        {renderMagnitudeButton(7, 8, 'Seven to Eight Magnitude')}
        {renderMagnitudeButton(8, 9, 'Eight to Nine Magnitude')}
        {renderMagnitudeButton(9, 10, 'Nine to Ten Magnitude')}
      </div>
      {selectedMagnitude && (
        <p>
          Selected Magnitude Range: {selectedMagnitude.min} - {selectedMagnitude.max}
        </p>
      )}
    </div>
  );
};

export default MagnitudeSelector;

import { useState } from 'react';
import { useSelector } from 'react-redux';
import FiveSix from './Quakes';
import backBtn from '../../assets/left.svg';

const MagnitudeSelector = () => {
  const [selectedMagnitude, setSelectedMagnitude] = useState(null);
  const [isMapVisible, setIsMapVisible] = useState(false); // State to control rendering of the map
  const QuakesNum = useSelector((state) => state.earthquake.earthquakes);

  const handleButtonClick = (min, max) => {
    setSelectedMagnitude({ min, max });
    setIsMapVisible(true);
  };

  const handleBackButtonClick = () => {
    setIsMapVisible(false);
  };

  // Function to render buttons with dynamic magnitude ranges
  const renderMagnitudeButton = (min, max, label) => (
    <div className="button-container">
      {isMapVisible ? (
        <button
          className="magnitude-button with-back-button"
          style={{ backgroundImage: 'url(your-image-url)' }}
          onClick={handleBackButtonClick}
        >
          <span className="back-button">
            <img className="TL_Img" src={backBtn} alt="Back" />
          </span>
          {label}
          <span className="BR_Span">
            {QuakesNum.filter((quake) => quake.properties.mag >= min && quake.properties.mag < max).length}
          </span>
        </button>
      ) : (
        <button
          className="magnitude-button"
          style={{ backgroundImage: 'url(your-image-url)' }}
          onClick={() => handleButtonClick(min, max)}
        >
          {label}
          <span className="BR_Span">
            {QuakesNum.filter((quake) => quake.properties.mag >= min && quake.properties.mag < max).length}
          </span>
        </button>
      )}
    </div>
  );

  return (
    <div className="MagnitudeSelector">
      <div id="map-container">
        {isMapVisible && selectedMagnitude && (
          <FiveSix minMagnitude={selectedMagnitude.min} maxMagnitude={selectedMagnitude.max} />
        )}
      </div>

      <h2>Select a Magnitude Range:</h2>
      <div className="button-container">
        {renderMagnitudeButton(4, 5, 'Four to Five Magnitude')}
        {renderMagnitudeButton(5, 6, 'Five to Six Magnitude')}
        {renderMagnitudeButton(6, 7, 'Six to Seven Magnitude')}
        {renderMagnitudeButton(7, 8, 'Seven to Eight Magnitude')}
        {renderMagnitudeButton(8, 9, 'Eight to Nine Magnitude')}
        {renderMagnitudeButton(9, 10, 'Nine to Ten Magnitude')}
      </div>
    </div>
  );
};

export default MagnitudeSelector;

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const MagnitudeSelector = () => {
  const mags = [
    { x: 4, y: 5, text: 'Four to Five Magnitude' },
    { x: 5, y: 6, text: 'Five to Six Magnitude' },
    { x: 6, y: 7, text: 'Six to Seven Magnitude' },
    { x: 7, y: 8, text: 'Seven to Eight Magnitude' },
    { x: 8, y: 9, text: 'Eight to Nine Magnitude' },
    { x: 9, y: 10, text: 'Nine to Ten Magnitude' },
  ];
  const [selectedMagnitude, setSelectedMagnitude] = useState(null);
  const [filteredMags, setFilteredMag] = useState([]);
  const QuakesNum = useSelector((state) => state.earthquake.earthquakes);
  const [searchValue, setSearchValue] = useState('');
  const handleButtonClick = (min, max) => {
    setSelectedMagnitude({ min, max });
  };

  /* eslint-disable-next-line */
  useEffect(() => {
    // Filter objects by keys matching searchValue
    if (searchValue === '') {
      setFilteredMag(mags);
    } else {
      // Filter the original data object by keys (case-insensitive)
      const filteredData = mags.filter(
        (x) => x.text.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilteredMag(filteredData);
    }
  }, [searchValue]);

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
      <input
        type="text"
        className="form-control"
        placeholder="Search by category"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // Cancel the default action, if needed
            e.preventDefault();
            // Trigger the button element with a click
            setSearchValue(e.target.value);
          }
        }}
      />
      <h2>Select a Magnitude Range:</h2>
      <div className="button-container">
        {filteredMags.map((x) => renderMagnitudeButton(x.x, x.y, x.text))}
        {/* {renderMagnitudeButton(4, 5, 'Four to Five Magnitude')}
        {renderMagnitudeButton(5, 6, 'Five to Six Magnitude')}
        {renderMagnitudeButton(6, 7, 'Six to Seven Magnitude')}
        {renderMagnitudeButton(7, 8, 'Seven to Eight Magnitude')}
        {renderMagnitudeButton(8, 9, 'Eight to Nine Magnitude')}
        {renderMagnitudeButton(9, 10, 'Nine to Ten Magnitude')} */}
      </div>
      {selectedMagnitude && (
        <p>
          Selected Magnitude Range:
          {' '}
          {selectedMagnitude.min}
          {' '}
          -
          {' '}
          {selectedMagnitude.max}
        </p>
      )}
    </div>
  );
};

export default MagnitudeSelector;

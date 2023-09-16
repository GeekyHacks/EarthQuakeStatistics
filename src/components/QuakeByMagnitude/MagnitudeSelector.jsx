import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
    if (searchValue === '') {
      setFilteredMag(mags);
    } else {
      const filteredData = mags.filter((x) => x.text.toLowerCase().includes(searchValue.toLowerCase()));
      setFilteredMag(filteredData);
    }

    /* eslint-disable-next-line */
  }, [searchValue]);

  const renderMagnitudeButton = (min, max, label) => (
    <div className="button-container">
      <Link
        to={`/EarthquakesTracker/Details/${min}/${max}`}
        className="magnitude-button"
        style={{ backgroundImage: 'url(your-image-url)' }}
        onClick={() => handleButtonClick(min, max)}
      >
        {label}
        <span className="BR_Span">
          {QuakesNum.filter((quake) => quake.properties.mag >= min && quake.properties.mag < max).length}
        </span>
      </Link>
    </div>
  );

  return (
    <div className="MagnitudeSelector">
      <input
        type="text"
        className="form-control"
        placeholder="Search by magnitude"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setSearchValue(e.target.value);
          }
        }}
      />
      <h2>Select a Magnitude Range:</h2>
      <div className="button-container">{filteredMags.map((x) => renderMagnitudeButton(x.x, x.y, x.text))}</div>
      {selectedMagnitude && (
        <p>
          Selected Magnitude Range: {selectedMagnitude.min} - {selectedMagnitude.max}
        </p>
      )}
    </div>
  );
};

export default MagnitudeSelector;

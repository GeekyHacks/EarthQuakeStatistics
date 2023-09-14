// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import FiveSix from './Quakes';
// import backBtn from '../../assets/left.svg';
// const MagnitudeSelector = () => {
//   const [selectedMagnitude, setSelectedMagnitude] = useState(null);
//   const [isFiveSixVisible, setIsFiveSixVisible] = useState(false); // State to control rendering of FiveSix

//   const handleButtonClick = (min, max) => {
//     setSelectedMagnitude({ min, max });
//     setShowFiveSix(true);
//   };

//   const handleBackButtonClick = () => {
//     setIsFiveSixVisible(false); // Hide the FiveSix map
//   };
//   const QuakesNum = useSelector((state) => state.earthquake.earthquakes);
//   console.log(QuakesNum.length);
//   return (
//     <div className="MagnitudeSelector">
//       <div id="map-container">
//         {selectedMagnitude && <FiveSix minMagnitude={selectedMagnitude.min} maxMagnitude={selectedMagnitude.max} />}
//       </div>

//       <h2>Select a Magnitude Range:</h2>
//       <div className="button-container">
//         <button
//           className="magnitude-button"
//           style={{ backgroundImage: 'url(your-image-url)' }}
//           onClick={() => {
//             handleButtonClick(4, 5);
//           }}
//         >
//           <img className="TL_Img" src={backBtn} alt="" onClick={{ handleBackButtonClick }} />
//           Four to Five Magnitude
//           <span className="BR_Span">
//             {QuakesNum.filter((quake) => quake.properties.mag >= 4 && quake.properties.mag < 5).length}
//           </span>
//         </button>
//         <button
//           className="magnitude-button"
//           style={{ backgroundImage: 'url(your-image-url)' }}
//           onClick={() => setSelectedMagnitude({ min: 5, max: 6 })}
//         >
//           <img className="TL_Img" src={backBtn} alt="" />
//           Five to Six Magnitude
//           <span className="BR_Span ">
//             {QuakesNum.filter((quake) => quake.properties.mag >= 5 && quake.properties.mag < 6).length}
//           </span>
//         </button>
//         <button
//           className="magnitude-button"
//           style={{ backgroundImage: 'url(your-image-url)' }}
//           onClick={() => setSelectedMagnitude({ min: 6, max: 7 })}
//         >
//           <img className="TL_Img" src={backBtn} alt="" />
//           Six to Seven Magnitude
//           <span className="BR_Span ">
//             {QuakesNum.filter((quake) => quake.properties.mag >= 6 && quake.properties.mag < 7).length}
//           </span>
//         </button>
//       </div>
//       <div className="button-container">
//         <button
//           className="magnitude-button"
//           style={{ backgroundImage: 'url(your-image-url)' }}
//           onClick={() => setSelectedMagnitude({ min: 7, max: 8 })}
//         >
//           <img className="TL_Img" src={backBtn} alt="" />
//           Seven to Eight Magnitude
//           <span className="BR_Span ">
//             {QuakesNum.filter((quake) => quake.properties.mag >= 7 && quake.properties.mag < 8).length}
//           </span>
//         </button>
//         <button
//           className="magnitude-button"
//           style={{ backgroundImage: 'url(your-image-url)' }}
//           onClick={() => setSelectedMagnitude({ min: 8, max: 9 })}
//         >
//           <img className="TL_Img" src={backBtn} alt="" />
//           Eight to Nine Magnitude
//           <span className="BR_Span ">
//             {QuakesNum.filter((quake) => quake.properties.mag >= 8 && quake.properties.mag < 9).length}
//           </span>
//         </button>
//         <button
//           className="magnitude-button"
//           style={{ backgroundImage: 'url(your-image-url)' }}
//           onClick={() => setSelectedMagnitude({ min: 9, max: 10 })}
//         >
//           <img className="TL_Img" src={backBtn} alt="" />
//           Nine to Ten Magnitude
//           <span className="BR_Span ">
//             {QuakesNum.filter((quake) => quake.properties.mag >= 9 && quake.properties.mag < 10).length}
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// // export default MagnitudeSelector;
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import FiveSix from './Quakes';
// import backBtn from '../../assets/left.svg';

// const MagnitudeSelector = () => {
//   const [selectedMagnitude, setSelectedMagnitude] = useState(null);
//   const [isFiveSixVisible, setIsFiveSixVisible] = useState(false); // State to control rendering of FiveSix
//   const QuakesNum = useSelector((state) => state.earthquake.earthquakes);

//   const handleButtonClick = (min, max) => {
//     setSelectedMagnitude({ min, max });
//     setIsFiveSixVisible(true);
//   };

//   const handleBackButtonClick = () => {
//     setIsFiveSixVisible(false); // Hide the FiveSix map
//   };

//   // Function to render buttons with dynamic magnitude ranges
//   const renderMagnitudeButton = (min, max, label) => (
//     <button
//       className="magnitude-button"
//       style={{ backgroundImage: 'url(your-image-url)' }}
//       onClick={() => handleButtonClick(min, max)}
//     >
//       <img className="TL_Img" src={backBtn} alt="" onClick={handleBackButtonClick} />
//       {label}
//       <span className="BR_Span">
//         {QuakesNum.filter((quake) => quake.properties.mag >= min && quake.properties.mag < max).length}
//       </span>
//     </button>
//   );

//   return (
//     <div className="MagnitudeSelector">
//       <div id="map-container">
//         {selectedMagnitude && <FiveSix minMagnitude={selectedMagnitude.min} maxMagnitude={selectedMagnitude.max} />}
//       </div>

//       <h2>Select a Magnitude Range:</h2>
//       <div className="button-container">
//         {renderMagnitudeButton(4, 5, 'Four to Five Magnitude')}
//         {renderMagnitudeButton(5, 6, 'Five to Six Magnitude')}
//         {renderMagnitudeButton(6, 7, 'Six to Seven Magnitude')}
//       </div>
//       <div className="button-container">
//         {renderMagnitudeButton(7, 8, 'Seven to Eight Magnitude')}
//         {renderMagnitudeButton(8, 9, 'Eight to Nine Magnitude')}
//         {renderMagnitudeButton(9, 10, 'Nine to Ten Magnitude')}
//       </div>
//     </div>
//   );
// };

// export default MagnitudeSelector;

// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import FiveSix from './Quakes';
// import backBtn from '../../assets/left.svg';

// const MagnitudeSelector = () => {
//   const [selectedMagnitude, setSelectedMagnitude] = useState(null);
//   const QuakesNum = useSelector((state) => state.earthquake.earthquakes);

//   const handleButtonClick = (min, max) => {
//     setSelectedMagnitude({ min, max });

//   };

//   // const handleBackButtonClick = () => {
//   //   setIsFiveSixVisible(false); // Hide the FiveSix map
//   // };

//   // Function to render buttons with dynamic magnitude ranges
//   const renderMagnitudeButton = (min, max, label) => (
//     <button
//       className="magnitude-button"
//       style={{ backgroundImage: 'url(your-image-url)' }}
//       onClick={() => handleButtonClick(min, max)}
//     >
//       <img className="TL_Img" src={backBtn} alt="" />
//       {label}
//       <span className="BR_Span">
//         {QuakesNum.filter((quake) => quake.properties.mag >= min && quake.properties.mag < max).length}
//       </span>
//     </button>
//   );

//   return (
//     <div className="MagnitudeSelector">
//       <div id="map-container">
//         {selectedMagnitude && <FiveSix minMagnitude={selectedMagnitude.min} maxMagnitude={selectedMagnitude.max} />}
//       </div>

//       <h2>Select a Magnitude Range:</h2>
//       <div className="button-container">
//         {renderMagnitudeButton(4, 5, 'Four to Five Magnitude')}
//         {renderMagnitudeButton(5, 6, 'Five to Six Magnitude')}
//         {renderMagnitudeButton(6, 7, 'Six to Seven Magnitude')}
//       </div>
//       <div className="button-container">
//         {renderMagnitudeButton(7, 8, 'Seven to Eight Magnitude')}
//         {renderMagnitudeButton(8, 9, 'Eight to Nine Magnitude')}
//         {renderMagnitudeButton(9, 10, 'Nine to Ten Magnitude')}
//       </div>
//     </div>
//   );
// };

// export default MagnitudeSelector;
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

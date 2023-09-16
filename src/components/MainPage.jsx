import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import QuakeByMag from './QuakeByMagnitude/QuakeByMag';
import Contact from './Contact';
import MagnitudeSelector from './QuakeByMagnitude/MagnitudeSelector';
import FiveSix from './QuakeByMagnitude/Quakes';

export default function MainPage() {
  return (
    <div className="MainPage">
      <NavBar />
      <Routes>
        <Route path="/EarthquakesTracker/" element={<MagnitudeSelector />}>
          Select Continent
        </Route>
        <Route path="/EarthquakesTracker/Details/:minMagnitude/:maxMagnitude" element={<FiveSix />} />
        <Route path="/EarthquakesTracker/DynamicMagnitude" element={<QuakeByMag />}>
          Dynamic Magnitude
        </Route>
        <Route path="/EarthquakesTracker/Contact" element={<Contact />}>
          Contact
        </Route>
      </Routes>
    </div>
  );
}

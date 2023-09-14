import '../styles/css/NavBar.css';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import QuakeByMag from './QuakeByMagnitude/QuakeByMag';
import Contact from './Contact';

import MagnitudeSelector from './QuakeByMagnitude/MagnitudeSelector';

export default function MainPage() {
  return (
    <div className="MainPage">
      <NavBar />
      <Routes>
        <Route path="/quakes/" element={<MagnitudeSelector />}>
          Select Continent
        </Route>
        <Route path="/quakes/DynamicMagnitude" element={<QuakeByMag />}>
          Dynamic Magnitude
        </Route>
        <Route path="/quakes/Contact" element={<Contact />}>
          Contact
        </Route>
      </Routes>
    </div>
  );
}

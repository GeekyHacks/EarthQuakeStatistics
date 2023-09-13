import React from 'react';
import '../styles/css/NavBar.css';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import QuakeByMag from './QuakeByMag';
import Contact from './Contact';

export default function MainPage() {
  return (
    <div className="MainPage">
      {' '}
      {/* Removed the extra space */}
      <NavBar />
      <Routes>
        <Route path="/quakes/EarthquakeMagnitude" element={<QuakeByMag />}>
          Earthquake with magnitude
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

{
  /* <Routes>
<Route path="/quakes/Africa" element={<QuakeByMag />}>
  Africa
</Route>
<Route path="/quakes/Asia" element={<QuakeByMag />}>
  Asia
</Route>
<Route path="/quakes/SouthAmerica" element={<QuakeByMag />}>
  South America
</Route>
<Route path="/quakes/Australia" element={<QuakeByMag />}>
  Australia
</Route>
<Route path="/quakes/NorthAmerica" element={<QuakeByMag />}>
  North America
</Route>
<Route path="/quakes/Europe" element={<QuakeByMag />}>
  Europe
</Route>
</Routes> */
}

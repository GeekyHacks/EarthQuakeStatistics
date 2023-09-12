import React from 'react';
import '../styles/css/NavBar.css';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import QuakeByMag from './QuakeByMag';

export default function MainPage() {
  return (
    <div className="MainPage">
      {' '}
      {/* Removed the extra space */}
      <NavBar />
      <Routes>
        <Route path="/quakes/Africa" element={<QuakeByMag />}>
          {' '}
          {/* Corrected the casing of "Africa" */}
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
      </Routes>
    </div>
  );
}

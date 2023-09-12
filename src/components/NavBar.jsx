import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/css/NavBar.css';

const NavBar = () => {
  const result = (
    <>
      <nav>
        <NavLink className="quakeItem" to="/quakes/Africa">
          Africa
        </NavLink>
        <NavLink className="quakeItem" to="/quakes/Asia">
          Asia
        </NavLink>
        <NavLink className="quakeItem" to="/quakes/Australia">
          Australia
        </NavLink>
        <NavLink className="quakeItem" to="/quakes/SouthAmerica">
          South America
        </NavLink>
        <NavLink className="quakeItem" to="/quakes/NorthAmerica">
          North America
        </NavLink>
        <NavLink className="quakeItem" to="/quakes/Europe">
          Europe
        </NavLink>
      </nav>
    </>
  );

  return result;
};

export default NavBar;

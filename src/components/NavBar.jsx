import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/css/NavBar.css';

const NavBar = () => {
  const result = (
    <>
      <nav>
        <NavLink className="navItem" to="/quakes/">
          Select Magnitude
        </NavLink>
        <NavLink className="navItem" to="/quakes/DynamicMagnitude">
          Dynamic Magnitude
        </NavLink>
        <NavLink className="navItem" to="/quakes/Contact">
          Contact
        </NavLink>
      </nav>
    </>
  );

  return result;
};

export default NavBar;

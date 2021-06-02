import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" style={links}>Home</NavLink>
      <NavLink to="/dogs" style={links}>Dogs</NavLink>
      <NavLink to="/dogInfo" style={links}>Dog Info</NavLink>
      <NavLink to="/resources" style={links}>Resources</NavLink>
     </div>
  );
};

export default NavBar;

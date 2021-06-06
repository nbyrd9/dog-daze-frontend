import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dogs" >Dogs</NavLink>
      <NavLink to="/dogInfo"  >Dog Info</NavLink>
      <NavLink to="/resources"  >Resources</NavLink>
     </div>
  );
};

export default NavBar;

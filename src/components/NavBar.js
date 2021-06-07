import React from 'react';
import { NavLink } from 'react-router-dom';


const links = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#abb8c3',
  color: 'white',
  borderRadius: '5px'
}


const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/"style={links}>Home</NavLink>
      <NavLink to="/dogs"style={links} >Dogs</NavLink>
      <NavLink to="/dogInfo"style={links}  >Dog Info</NavLink>
      <NavLink to="/resources" style={links} >Resources</NavLink>
     </div>
  );
};

export default NavBar;

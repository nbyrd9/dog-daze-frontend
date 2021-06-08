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


export function NavBar() {
  return (
    <div className="topnav" style={{textAlign: "center"}} >
      <br></br>
      <NavLink to="/"style={links}>Home</NavLink>
      <NavLink to="/dogs"style={links} >Dogs</NavLink>
      <NavLink to="/dogInfo"style={links}  >All Dogs</NavLink>
      <NavLink to="/resources" style={links} >Resources</NavLink>
     </div>
  );
};

export default NavBar;

import React from 'react';
import {NavLink} from 'react-router-dom';
function Header() {
  const activeStyle = {color:"orange"};
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
      <span> | </span>
      <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>
      <span> | </span>
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    </nav>
  );
}
export default Header;

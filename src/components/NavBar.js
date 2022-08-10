import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="header">
    <div className="logo">
      <Link to>Math Magicians</Link>
    </div>
    <div className="navSection">
      <Link className="navItem" to="/">Home</Link>
      <Link className="navItem" to="/calculator">Calculator</Link>
      <Link className="navItem" to="/quote">Quote</Link>
    </div>
  </nav>
);

export default NavBar;

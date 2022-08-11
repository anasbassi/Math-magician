import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => (
  <nav className="header">
    <div className="logo">
      <h2>Math Magicians</h2>
    </div>
    <div className="navSection">
      <Link className="navItem" to="/">Home |</Link>
      <Link className="navItem" to="/calculator"> Calculator |</Link>
      <Link className="navItem" to="/quote"> Quote</Link>
    </div>
  </nav>
);

export default NavBar;

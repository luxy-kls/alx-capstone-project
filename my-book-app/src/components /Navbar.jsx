import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav  className='navbar'>
      <div className="navbar-container">
      <Link className="navbar-logo" to="/" >Bookhub</Link>
      <ul className="navbar-menu">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/library">My Library</Link>
      </ul>
      <div className="navbar-search">
      <input type="text" placeholder="search" className="search-input" />
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
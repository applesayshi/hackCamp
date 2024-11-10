import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation without reloading the page
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/Shop">Shop</Link>
      <Link to="/">Home</Link>
      <Link to="/Inventory">Inventory</Link>
    </div>
  );
}

export default Navbar;

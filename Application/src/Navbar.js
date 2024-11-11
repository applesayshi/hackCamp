import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation without reloading the page
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/Shop"><img src="/imgs/nav_shop.png"></img></Link>
      <Link to="/"><img src="/imgs/nav_home.png"></img></Link>
      <Link to="/Inventory"><img src="/imgs/nav_inventory.png"></img></Link>
    </div>
  );
}

export default Navbar;

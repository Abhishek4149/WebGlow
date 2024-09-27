
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add your CSS here

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

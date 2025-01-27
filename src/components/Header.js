import React from "react";
import { Link } from 'react-router-dom'; 


import '../App.css';

function HeaderComponents({hireMeIcon,logo}) {
  return (
    <div id="headerComponents" className="headerComponents">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    {/* Hire Me Icon */}
    <div className="hireMeIcon" style={{ display: 'flex', paddingRight:'80px'}}>
      <a href="mailto:egulti4128@conestogac.on.ca" className="hireMeIconLink" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img
          src={hireMeIcon}
          alt="Hire Me Icon"
          className="hireMeIcon"
          style={{ width: '80px', height: '70px' }}
        />
        <span style={{ marginLeft: '25px' }}>Hire Me</span>
      </a>
    </div>


      {/* Navigate to the Menu Page */}
      <div id="menuButton" className="menuBtn">
        <Link to="/menu" className="tablink">Menu</Link> {/* Link to the Menu page */}
      </div>
    </div>
  );
}

export default HeaderComponents;

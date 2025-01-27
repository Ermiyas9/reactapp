import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import simpsonImage from '../images/homerSimpson/simpson.png';
import '../App.css';

function MenuLists() {
  
  // Start with menu open
  const [menuOpen, setMenuOpen] = useState(true); 
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    if (menuOpen) {
      // When the user clicks 'Close', navigate to the previous page
      navigate(-1);
    } else {
      // Open the menu
      setMenuOpen(true);
    }
  };

  return (
    <div id="menuButton">
      {/* Menu is open initially, button will display 'Close' */}
      <div style={{paddingTop:'50px',paddingLeft:'50px',fontWeight: 'bold', fontFamily: 'Arial, monospace', fontSize: '70px',alignSelf:'center'}}
        className={`tablink ${menuOpen ? "active" : ""}`}
        onClick={handleMenuToggle} 
      >
        {/* Showing Close and display menu lists  from the start cos i have menu button on the prev page */}
        Close
      </div>

      <div className="simpsonImage">
        <img 
          src={simpsonImage} 
          alt="simsonnns"
        />
      </div>

      {/* Menu is open initially, showing menu list */}
      <div className="menuItems">
        <ul className="firstList">
          <li><Link to="/">HOME </Link></li>
          <li><p className="listMsg">Back to Home page? </p></li>
          <li><Link to="/AboutMe">ABOUT ME</Link></li>
          <li><p className="listMsg">Little Things to know About me... </p></li>
          <li><Link to="/projects">MY PROJECTS</Link></li>
          <li><p className="listMsg" >Few of my Acadamic & Personal Projects</p></li>
        </ul>
        <ul className="secondList">
          <li><Link to="/Doggo">MEET MY DOG</Link></li>
          <li><p className="listMsg">Meet my bestie </p></li>
          <li><Link to="/WorkExprience">MY EXPERIENCE</Link></li>
          <li><p className="listMsg">My Experience in Software Development </p></li>
          <li><Link to="/Hobbies">HOBBIES</Link></li>
          <li><p className="listMsg" >Things I love to do ... </p></li>
        </ul>
      </div>
    </div>
  );
}

export default MenuLists;

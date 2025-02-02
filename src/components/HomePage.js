// HomePage.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderComponents from './Header';
import FooterComponents from './Footer';
import contentImage from '../images/contentImage.jpg';
import logoIcon from '../images/homePage/logoIcon.png';
import hireMe from '../images/homePage/hireMeIcon.png';
import bankTellerImage from '../images/homePage/bankAndTeller.png';
import askingForResume from '../images/homePage/askingForResume.png';
import outlookImageIcon from '../images/homePage/outlookIcon.png';
import ermiyasPicture from '../images/ermiPics/picsInToronto.JPG';
import emailIcon from '../images/homePage/gmailIcon.png';
import instaImageIcon from '../images/homePage/instaIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 

// this import will be for animated stuff and animate library
import "animate.css/animate.min.css"; 
//import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import '../App.css';
import "./HobbiesPage.css";
// import { AlignHorizontalCenter } from '@mui/icons-material';

function HomePage() {

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={
          <HeaderComponents 
            hireMeIcon={hireMe} 
            logo={logoIcon} 
          />
        } />
      </Routes>

      {/* Pass the appropriate icons as props */}
      <SocialMediaIconsDisplay 
        outlookIcon={outlookImageIcon} 
        gmailIcon={emailIcon} 
        instaIcon={instaImageIcon}
      />
      
      <div className="icon-container">
        <div className="logo">
        </div>
      </div>

      <div>
        <div className="headerNavLink">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/AboutMe" className="nav-link">About Me</Link>
          <Link to="/workExprience" className="nav-link">Experience</Link>
        </div>
      </div>

      <div>
        <p style={{paddingLeft:"80px", textAlign: "left", color: "Black", fontSize: "50px", fontFamily: "Arial, monospace" }}>
          Hi, My name is 
          <p><b>Ermiyas.</b></p>
        </p>
        <p style={{paddingLeft:"80px", textAlign: "left", color: "Black", fontSize: "25px", fontFamily: "Arial, monospace" }}>
          I'm an <b>independent and creative developer </b>from Kitchener, Ontario,
          <p> <b> with a quick learning ability </b>to adapt and innovate.</p>
        </p>

        {/* Added border and border-radius for my photo... more like a frame */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <img 
            src={ermiyasPicture} 
            alt="Content" 
            style={{
              width: '350px', 
              height: 'auto',
              border: '8px solid #4FBEF2', 
              borderRadius: '10px', 
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'
            }} 
          />
        </div>
      </div>

      <div className="imageAndIntroPara" style={{
        height: 'auto', 
        marginTop: '30px', 
        marginRight: '30px', 
        paddingLeft: "80px", 
        fontFamily: "Arial, monospace", 
        color: "Black"
      }}>
        <span> 
          <p> I’ve been passionate about technology since I was a teenager.</p> 
          <p>My love for computers and programming has only grown over the years, </p>
          <p> leading me to pursue my dream in the software development field. </p>
          <p>I truly enjoy writing code, designing front-end interfaces, </p>
          <p>and managing back-end systems... all while finding new ways to build applications that make life easier.</p>
          <p>I could spend hours solving bugs or refining web designs because it’s what I love to do. </p>
          <p><span>Ready to collaborate? </span>
            <a
              href="mailto:egulti4128@conestogac.on.ca"
              style={{
                textDecoration: 'none',
                color: 'Blue',
                fontWeight: 'bold'
              }}
            >
              HIRE ME
            </a>
            <span>, and let’s build something amazing together!</span>
          </p>
        </span>
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{ fontWeight: "bolder", fontStyle: "italic", color: "Black", fontSize: "30px", fontFamily: "Arial, monospace", marginRight: '100px' }}>
          Feel free to explore my achievements and access my resume.
        </p>
        <p style={{ fontWeight: "bolder", fontStyle: "italic", color: "Black", fontSize: "30px", marginTop: "25px", fontFamily: "Arial, monospace", marginRight: '200px' }}>
          And see how my skills align with your goals!
        </p>

        <img 
          src={askingForResume} 
          alt="Content"  
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            marginRight: '25px',
            marginLeft: '550px',
            marginTop: '25px'
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          {/* Top Section */}
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href={`${process.env.PUBLIC_URL}/ErmiyasResume.pdf`} target="_blank" rel="noopener noreferrer">
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '35px',
                  color: 'blue',
                  fontWeight: 'bold',
                  fontFamily: "'Arial', monospace",
                  boxShadow: '1px 5px 5px -3px green',
                  textDecoration: 'none',
                  padding: '10px 40px',
                  borderRadius: '50px',
                  cursor: 'pointer',
                }}
              >
                View My Resume
              </p>
            </a>

            <a href={`${process.env.PUBLIC_URL}/StudentAchievement.pdf`} target="_blank" rel="noopener noreferrer">
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '35px',
                  color: 'blue',
                  fontWeight: 'bold',
                  fontFamily: "'Arial', monospace",
                  boxShadow: '1px 5px 5px -3px green',
                  textDecoration: 'none',
                  padding: '10px 40px',
                  borderRadius: '50px',
                  cursor: 'pointer',
                }}
              >
                View My Achievements
              </p>
            </a>
          </div>
        </div>
      </div>

      <div>
        <img 
          src={bankTellerImage} 
          alt="Content"  
          className="contentImage"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            marginRight: '25px',
            marginLeft: '5px',
            marginTop: '25px'
          }}
        />
      </div>

      <div style={{ marginRight: '80px', color: "Black", fontSize: "20px", marginTop: '15px', marginLeft: '50px', fontFamily: "Arial, monospace" }}>
        <p><h1>About Wealthy Wave Web Bank Application</h1></p>
        <p>Creating a bank web application was one of my most challenging but rewarding school projects.</p>
        <p>As a second-year Software Engineering student, our Software Quality professor assigned us a project where we could design our web application,</p> 
        <p>with a few options to choose from. It was a group project, </p>
        <p>so my partner Saje and I decided to build a website for a bank, which involved both front-end and back-end design as well as rigorous testing. </p>
        <p>Even with all the challenges, I thoroughly enjoyed the process of designing and testing the application, and the knowledge I gained has been invaluable.</p>
        <p>It was a major learning experience for me, and I'm excited to continue building my skills!</p>
      </div>

      <div style={{paddingLeft: '250px',fontFamily: "'Arial', monospace ",fontWeight:'bolder',fontSize:'35px' }}>
        <p><a href='https://github.com/srose0040/WealthWave'style={{boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none'}}> Git Hub Repo </a></p>
        <p><a href='https://wealthwave.azurewebsites.net/'style={{ boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none',}}>Wealthy Wave Bank </a></p>
        <p><Link to="/Projects" style={{ boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none',}}>More Of My Projects </Link></p>
      </div>


      <div className="contentImage" >
        <img 
          src={contentImage} 
          alt="Content"  
          style={{ width: '400px', height: 'auto', marginRight: '25px', marginLeft: '5px' ,marginTop: '25px'}}
        />
      </div>


      <div style={{ marginRight: '80px', color: "Black", fontSize: "20px", marginTop: '15px', marginLeft: '50px', fontFamily: "Arial, monospace" }}>

        <p><h1>Recent Project...! Under PROCESS</h1></p>
        <p>While working at Conestoga College's Doon campus for my first co-op term, I developed an idea for improving the kiosk that loans laptops to students </p> 
        <p>for a limited period.This kiosk is powered by software with limited functionality despite its regular use.</p>
        <p>I plan to upgrade the kiosk software to improve its functions and to write its code using Python Django and Assembly language,</p>
        <p> which will help me improve my knowledge while writing the code.</p>
        <p>My idea was to design a kiosk system with three indicator lights to communicate the laptop's status: red for when a laptop is successfully returned, blue for </p> 
        <p>when a laptop is currently charging or in the process of being loaned out, and green to indicate that a laptop is ready for checkout.</p>
        <p>The current software only uses two indicator lights, so I planned to upgrade the version to offer better functionality and a more user-friendly interface.</p>
        <p>Assembly language seems to be an excellent tool for designing the software lights.</p>
      </div>

      <div style={{paddingTop: '75px',paddingBottom: '75px',paddingLeft: '250px',fontFamily: "'Arial', monospace ",fontWeight:'bolder',fontSize:'35px' }}>
        <p><a href='https://github.com/Ermiyas9/LaptopRentalKiosk'style={{boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none'}}> Git Hub Repo </a></p>
        <p><a href='https://github.com/Ermiyas9'style={{ boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none',}}>Laptop Rental Kiosk </a></p>
        <p><Link to="/Projects" style={{ boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none',}}>More Of My Projects </Link></p>
      </div>

      <div className="footerNavLink" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <Link to="/Projects" className="nav-link">Projects</Link>
        <Link to="/Hobbies" className="nav-link">Hobbies</Link>
        <Link to="/Doggo"  className="nav-link">Meet Doggo</Link>
      </div>

      <div>
        <FooterComponents />
      </div>
    </div>
  );
}

export default HomePage;


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


import outlookImageIcon from '../images/homePage/outlookIcon.png';
import ermiyasPicture from '../images/ermiPics/picsInToronto.JPG';
import emailIcon from '../images/homePage/gmailIcon.png';
import instaImageIcon from '../images/homePage/instaIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 

// this importt wll be for animated stuff and animate library ff
import "animate.css/animate.min.css"; 
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import '../App.css';
// import { AlignHorizontalCenter } from '@mui/icons-material';

function HomePage() {

   // ScrollDownAnimation function defined within HomePage this wil be called when I want the scroll down letter to be displayd 
   const ScrollDownAnimation = () => {

     // Split the phrase into individual letters
    const letters = "|||||||||||||".split("");

    return (

      <span className="pageScroller">

        {letters.map((letter, index) => (

          <AnimatedOnScroll

           // Use index as a key
            key={index}

             // Animation effect
            animateIn="bounceInRight"

            // Stagger each letter's animation
            delay={index * 100} 
            style={{
               // vertically displayyy
              display: 'block',
              // space btwn letters verticallyyy 
              marginTop: '25px',
              marginLeft: '500px',
              color: "Black",
              fontweight:"Bold",
              fontSize: "30px",
              fontfamily: "Arial, monospace"
            }}
          >
            {letter}

          </AnimatedOnScroll>
        ))}
      </span>
    );
  };

  return (
    <div className="app-container">
        <Routes>
          <Route path="/" element=
          {   
            <HeaderComponents 
                hireMeIcon={hireMe} 
                logo={logoIcon} 
          />} />
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
      <p style={{paddingLeft:"80px",textAlign: "lrgy", color: "Black", fontSize: "25px", fontFamily: "Arial, monospace" }}>
        I'm an <b>independent and creative developer </b>from Kitchener, Ontario,
        <p> <b> with a quick learning ability </b>to adapt and innovate.</p>
      </p>


        {/* added border and bordr radius for my photo .. more like frame by adding inline cs styling */}
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


      <div 
        className="imageAndIntroPara"style={{
        height: 'auto',
        marginTop: '30px',
        marginRight: '30px',
        paddingLeft:"80px",
        fontFamily: "Arial, monospace",
        color: "Black"}}
              >
                <span> 
                  <p> I’ve been passionate about technology since I was a teenager.</p> 
                  <p>My love for computers and programming has only grown over the years, </p>
                  <p> leading me to pursue my dream in software development field. </p>
                  <p>I truly enjoy writing code, designing front-end interfaces, </p>
                  <p>and managing back-end systems—all while finding new ways to build applications that make life easier.</p>
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
        <p style={{ fontweight:"Bold",color: "Black",fontSize: "30px",marginTop: '25px',marginLeft: '450px',fontFamily: "Arial, monospace"}}>
          SCROLL
        </p>

      {/* calling the function to display the animated scroll letters n */}
      <ScrollDownAnimation /> 


      <div>
        <img 
        
          src={bankTellerImage } 
          alt="Content"  
          className="contentImage"
          style={{ width: '400px',height: '400px',borderRadius: '50%',marginRight: '25px',marginLeft: '5px',marginTop: '25px'

          }}
        />
      </div>

     
      <div style={{ fontweight:"Bold",color: "Black",fontSize: "20px",marginTop: '15px',marginLeft: '50px',fontFamily: "Arial, monospace"}}>
        <p><h1> Creating a bank web application was one of my most challenging but rewarding school projects.</h1></p>
        <p>As a second-year Software Engineering student, our Software Quality professor assigned us a project where we could design our web application, with a few options to choose from. It was a group project, </p>
        <p>so my partner Saje and I decided to build a banking application. We started by dividing our tasks and creating a project board using Trillo. </p>
        <p>We used GitHub version control as an additional tool to keep track of our project. We followed the seven software development life cycles to meet all software quality requirements.</p>
        <p>My primary role was front-end development, but I also contributed to the back-end. This bank application provides basic banking functionality, and we developed it using C# and ASP.NET. </p>
        <p>You can visit our WealthWave bank application website here, which is connected to a database for full functionality.</p> 
        <p>Try it out by registering with WealthWave Bank! You can also explore our GitHub repository for more details.</p>
        <p>Thank you for taking the time to check out our project!</p>
      </div>

      <div style={{paddingLeft: '250px',fontFamily: "'Arial', monospace ",fontWeight:'bolder',fontSize:'35px' }}>
        <p><a href='https://github.com/srose0040/WealthWave'style={{boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none'}}> Git Hub Repo </a></p>
        <p><a href='https://wealthywave.Azurewebsites.net'style={{ boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none',}}>Wealthy Wave Bank </a></p>
        <p><Link to="/Projects" style={{ boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none',}}>More Of My Projects </Link></p>
      </div>


      <div className="contentImage" >
        <img 
          src={contentImage} 
          alt="Content"  
          style={{ width: '400px', height: 'auto', marginRight: '25px', marginLeft: '5px' ,marginTop: '25px'}}
        />
      </div>


      <div style = {{ fontweight:"Bold",color: "Black",fontSize: "20px",marginTop: '15px',marginLeft: '50px',fontFamily: "Arial, monospace"}}>

        <p><h1>Recent Project...! Under PROCESS</h1></p>
        <p>While working at Conestoga College's Doon campus for my first co-op term, I developed an idea for improving the kiosk that loans laptops to students for a limited period.</p>
        <p>This kiosk is powered by software with limited functionality despite its regular use.</p>
        <p>I plan to upgrade the kiosk software to improve its functions and to write its code using Python Django and Assembly language, which will help me improve my knowledge while writing the code.</p>
        <p>My idea was to design a kiosk system with three indicator lights to communicate the laptop's status: red for when a laptop is successfully returned, blue for when a laptop is currently charging or in the process of being loaned out, and green to indicate that a laptop is ready for checkout.</p>
        <p>The current software only uses two indicator lights, so I planned to upgrade the version to offer better functionality and a more user-friendly interface.</p>
        <p>Assembly language seems to be an excellent tool for designing the software lights.</p>
      </div>

      <div style={{paddingTop: '75px',paddingBottom: '75px',paddingLeft: '250px',fontFamily: "'Arial', monospace ",fontWeight:'bolder',fontSize:'35px' }}>
        <p><a href='https://github.com/Ermiyas9/LaptopRentalKiosk'style={{boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none'}}> Git Hub Repo </a></p>
        <p><a href='https://wealthywave.Azurewebsites.net'style={{ boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none',}}>Laptop Rental Kiosk </a></p>
        <p><Link to="/Projects" style={{ boxShadow:" 1px 5px 5px -3px #F71B9D",textDecoration: 'none',}}>More Of My Projects </Link></p>
      </div>

      <div className="footerNavLink" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <Link to="/Projects" className="nav-link">Projects</Link>
        <Link to="/Hobbies" className="nav-link">Hobbies</Link>
        <Link to="/Doggo"  className="nav-link">Meet Doggo</Link>
      </div>


      {/* calling footer component for the webste footer contents */}
      <FooterComponents/>

    </div>
  );
}

export default HomePage;
// WorkExprience.js
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponents from './Header';
import FooterComponents from './Footer';
import logoIcon from '../images/workPage/logoIcon.png';
import hireMe from '../images/workPage/hireMeIcon.png';
import outlookImageIcon from '../images/workPage/outlookIcon.png';
import emailIcon from '../images/workPage/gmailIcon.png';
import instaImageIcon from '../images/workPage/instaIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay'; 

// programming languages icons
import cSharpIcon from '../images/workPage/cSharpIcon.png'; 
import cPlusPlusIcon from '../images/workPage/cPlusIcon.png'; 
import pythonIcon from '../images/workPage/pythonIcon.png';
import reactIcon from '../images/workPage/reactIcon.png'; 
import djangoIcon from '../images/workPage/djangoIcon.png'; 
import cIcon from '../images/workPage/cIcon.png'; 
import htmlIcon from '../images/workPage/htmlIcon.png'; 
import androidIcon from '../images/workPage/androidIcon.png'; 
import phpIcon from '../images/workPage/phpIcon.png'; 
import sqlIcon from '../images/workPage/sqlIcon.png'; 
import mySqlIcon from '../images/workPage/mySqlIcon.png'; 
import assemblyIcon from '../images/workPage/assemblyIcon.png'; 
import blackDudeImage from '../images/workPage/blackDudeImage.png'; 
import youngBlackMan from '../images/workPage/youngBlackMan.png'; 

function WorkExpriencePage() {

  return (
    <div className="Exprience">
      {/* passing the props to the header component(func) */}
      <HeaderComponents hireMeIcon={hireMe} logo={logoIcon} />

      {/* Pass the appropriate icons as props */}
      <SocialMediaIconsDisplay
        outlookIcon={outlookImageIcon}
        gmailIcon={emailIcon}
        instaIcon={instaImageIcon}
      />

      <img
        src={blackDudeImage}
        alt="Content"
        className="contentImage"
        style={{ paddingLeft: '550px', width: '400px', height: '400px' }}
      />

      <div>
        <p className="titles"> <span role="img" aria-label="computer emoji">💻</span> Technical Skills </p>
        <p className="subTitles">Programming Languages / Frameworks</p>

        <img
          src={cIcon}
          alt="Content"
          className="contentImage"
          style={{ paddingTop: '15', paddingRight: '5', paddingLeft: '5', width: '50px', height: '50px' }}
        />

        <img
          src={cPlusPlusIcon}
          alt="Content"
          className="contentImage"
          style={{ paddingTop: '15', paddingRight: '5', paddingLeft: '5', width: '50px', height: '50px' }}
        />

        <img
          src={cSharpIcon}
          alt="Content"
          className="contentImage"
          style={{ paddingTop: '5', paddingRight: '5', paddingLeft: '5', width: '50px', height: '50px' }}
        />

        <img
          src={assemblyIcon}
          alt="Content"
          className="contentImage"
          style={{ paddingTop: '5', paddingRight: '5', paddingLeft: '5', width: '50px', height: '50px' }}
        />
      </div>

      <div>
        <img
          src={reactIcon}
          alt="Content1"
          className="contentImage"
          style={{ paddingTop: '5', paddingRight: '5', paddingLeft: '5', width: '50px', height: '50px' }}
        />

        <img
          src={pythonIcon}
          alt="Content2"
          className="contentImage"
          style={{ paddingTop: '5', paddingRight: '5', paddingLeft: '5', width: '50px', height: '50px' }}
        />

        <img
          src={androidIcon}
          alt="Content3"
          className="contentImage"
          style={{ paddingTop: '5', paddingRight: '5', paddingLeft: '5', width: '50px', height: '50px' }}
        />

        <img
          src={phpIcon}
          alt="Content4"
          className="contentImage"
          style={{ paddingTop: '5', paddingRight: '5', paddingLeft: '5', width: '50px', height: '50px' }}
        />
      </div>

      <div>
        <img
          src={djangoIcon}
          alt="Content5"
          className="contentImage"
          style={{ paddingTop: '15', paddingRight: '5', paddingLeft: '5', width: '50px', height: '50px' }}
        />

        <img
          src={htmlIcon}
          alt="Content6"
          className="contentImage"
          style={{ paddingTop: '5', paddingRight: '5', paddingLeft: '5', width: '50px', height: '50px' }}
        />

        <img
          src={mySqlIcon}
          alt="Content7"
          className="contentImage"
          style={{ paddingTop: '5', paddingRight: '5', paddingLeft: '5', width: '50px', height: '50px' }}
        />

        <img
          src={sqlIcon}
          alt="Content8"
          className="contentImage"
          style={{ paddingTop: '5', paddingRight: '5', paddingLeft: '5', width: '50px', height: '50px' }}
        />
      </div>

      <div>
        <p className="titles"> <span role="img" aria-label="Table tennis">🔍</span> Learning Skills </p>
        <p className="subTitles">From Documentation and Online Recourses </p>
        <p className="subSecTitle" style={{ paddingLeft: '150px' }}> <span role="img" aria-label="books maybe">📚</span>Succeed in solving code issues and bugs efficiently</p>
        <p className="subSecTitle" style={{ paddingLeft: '150px' }}> <span role="img" aria-label="books maybe">📚</span> Draw on a quick learning ability to navigate documentation, Stack Overflow, and other online resources easily</p>
        <p className="subSecTitle" style={{ paddingLeft: '150px' }}> <span role="img" aria-label="books maybe">📚</span> Troubleshoot complex problems and optimize code effectively</p>
        <p className="subSecTitle" style={{ paddingLeft: '150px' }}> <span role="img" aria-label="books maybe">📚</span>  Find solutions fast to keep projects moving forward smoothly</p>
      </div>

      <p className="titles"><span role="img" aria-label="books maybe">📝 </span>Education </p>
      <p className="subTitles">Advanced Diploma in Software Engineering Candidate</p>
      <p style={{ paddingLeft: '150px' }} className="subSecTitle"> <span role="img" aria-label="graduation icon">🎓</span> Conestoga College, Waterloo | Sep. 2022 – Present | GPA 3.81</p>
      <p className="subTitles">Diploma in Information Communication Technology</p>
      <p style={{ paddingLeft: '150px' }} className="subSecTitle"><span role="img" aria-label="graduation icon">🎓</span> Royal University College—Nazareth Ethiopia and Asella TVET Institute | Sep 2007 – July 2010 | GPA 3.85</p>

      <p className="titles"><span role="img" aria-label="graduation icon">🚀</span>Technical Experience </p>
      <p className="subTitles"> Career Highlights in Technical & Client-Focused Roles</p>
      <p className="subSecTitle" style={{ paddingLeft: '150px' }}> <span role="img" aria-label="yellow star emoji">🌟</span>Tech Representative, Conestoga College (Co-op) | Sep 2024 – Present</p>
      <p className="subSecTitle" style={{ paddingLeft: '150px' }}> <span role="img" aria-label="yellow star emoji">🌟</span> Warehouse Worker, Grand River Personnel, Kitchener, ON | 2023</p>
      <p className="subSecTitle" style={{ paddingLeft: '150px' }}> <span role="img" aria-label="yellow star emoji">🌟</span> Crew Member, McDonald’s, Kitchener, ON | 2020 – 2021</p>
      <p className="subSecTitle" style={{ paddingLeft: '150px' }}> <span role="img" aria-label="yellow star emoji">🌟</span>Customer Service & Delivery Driver, Carriage & Talabat Delivery Company | 2016 - 2019</p>
      <p className="subSecTitle" style={{ paddingLeft: '150px' }}> <span role="img" aria-label="yellow star emoji">🌟</span> Salesperson, Avenue Mall, Kuwait | 2014 - 2015</p>
      <p className="subSecTitle" style={{ paddingLeft: '150px' }}> <span role="img" aria-label="yellow star emoji">🌟</span>IT Instructor, National College Addis Abeba, Ethiopia | 2012</p>
      <p className="subSecTitle" style={{ paddingLeft: '150px' }}> <span role="img" aria-label="yellow star emoji">🌟</span>Assistant IT Instructor, Rehoboth Medical College Asella, Ethiopia | 2010 – 2011</p>
      <p className="subSecTitle" style={{ paddingLeft: '150px' }}>
       <span role="img" aria-label="star emoji">🌟</span> Assistant IT Instructor, Rehoboth Medical College Asella, Ethiopia | 2010 – 2011
</p>

      <img
        src={youngBlackMan}
        alt="Content"
        className="contentImage"
        style={{ paddingLeft: '550px', width: '500px', height: '400px' }}
      />

        <div
        style={{
            display: 'flex',
            paddingTop: '75px',
            paddingBottom: '75px',
            paddingLeft: '250px',
            fontFamily: "'Arial', monospace",
            fontWeight: 'bolder',
            fontSize: '35px',
            flexDirection: 'column',
        }}
        >
        {/* Open the PDF in a new tab instead of downloading */}
        <a href="/ErmiyasResume.pdf" target="_blank" rel="noopener noreferrer">
            <p
            style={{
                display: 'inline-block',
                fontSize: '35px',
                color: 'blue',
                fontWeight: 'bold',
                fontFamily: "'Arial', monospace",
                boxShadow: '1px 5px 5px -3px green',
                textDecoration: 'none',
                padding: '10px 20px',
                marginBottom: '20px',
                backgroundColor: '#C6B1F3',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
            >
            Resume
            </p>
        </a>

        <a href="/StudentAchievement.pdf" target="_blank" rel="noopener noreferrer">
            <p
            style={{
                display: 'inline-block',
                fontSize: '35px',
                color: 'blue',
                fontWeight: 'bold',
                fontFamily: "'Arial', monospace",
                boxShadow: '1px 5px 5px -3px green',
                textDecoration: 'none',
                padding: '10px 20px',
                marginBottom: '20px',
                backgroundColor: '#C6B1F3',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
            >
            Achievement Paper
            </p>
        </a>

        <p>
            <Link
            to="/Projects"
            style={{
                color: 'blue',
                boxShadow: '1px 5px 5px -3px green',
                textDecoration: 'none',
            }}
            >
            More Of My Projects
            </Link>
        </p>
        </div>

    

      {/* passing the props to the header component(func) */}
      <FooterComponents hireMeIcon={hireMe} logo={logoIcon} />
    </div>
  );
}

export default WorkExpriencePage;
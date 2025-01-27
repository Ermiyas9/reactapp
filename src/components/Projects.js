// Project.js

import React, { useState } from 'react';
import HeaderComponents from './Header';
import FooterComponents from "./Footer";
import SocialMediaIconsDisplay from './socialMediaDisplay'; 


import logoIcon from '../images/projectsPage/logoIcon.png';
import hireMe from '../images/projectsPage/hireMeIcon.png';
import outlookImageIcon from '../images/projectsPage/outlookIcon.png';
import emailIcon from '../images/projectsPage/gmailIcon.png';
import instaImageIcon from "../images/projectsPage/instaIcon.png";
import reactIcon from '../images/projectsPage/reactIcon.png'; 
import cSharpIcon from '../images/projectsPage/csharpIcon.png'; 
import pythonIcon from '../images/projectsPage/pythonIcon.png';
import djangoIcon from '../images/projectsPage/djangoIcon.png'; 
import cIcon from '../images/projectsPage/cIcon.png'; 
import htmlIcon from '../images/projectsPage/htmlIcon.png'; 
import androidIcon from '../images/projectsPage/androidIcon.png'; 
import subBuzzPic from '../images/homerSimpson/subBuzz.png';
import icons8 from '../images/projectsPage/icons8.png';

import './ProjectPage.css';


function ProjectsPage() {

    const [showTechStack, setShowTechStack] = useState(false);

    const handleClick = () => {
        setShowTechStack(!showTechStack);
    };


    return (
        <div>

            <HeaderComponents 
                hireMeIcon={hireMe} 
                logo={logoIcon}
            />
            <SocialMediaIconsDisplay 
                outlookIcon={outlookImageIcon} 
                gmailIcon={emailIcon} 
                instaIcon={instaImageIcon}
            />

            <div className='projects'>

                <h1 className="welcome-text">printf( "Hello World!! \n ");</h1>

                <div className="profile-pic-container">
                    <img src={subBuzzPic} alt="Content" className="profile-pic" />
                </div>

                <div className="projects-list">
                    <ProjectBox
                        name='1' 
                        icon={reactIcon} 
                        title="My Personal Portfolio Website"
                        description="Tech Stack: JavaScript, Icons8, GitHub (for version control)"
                        gitHubButton="GitHup Repo"
                        websiteRender="Personal Website"
                        showTechStack={showTechStack}
                        handleClick={handleClick}

                        
                        // here i will put a button and when the button clicked 
                        // call another js function to invoke the button
                        // depending on the project type it should call or render that page..???
                        // prob need to btns .   
                    />

                    <ProjectBox 
                        name ='2'
                        icon={cSharpIcon} 
                        title="Banking Web Application"
                        description="Tech Stack: C#, ASP.NET, MySQL, GitHub"
                        gitHubButton="GitHup Repo"
                        websiteRender="Wealthy Wave Bank"
                        showTechStack={showTechStack}
                        handleClick={handleClick}
                    />

                    <ProjectBox 
                        name ='3'
                        icon={pythonIcon} 
                        title="Fully Functional Network Web App"
                        description="Tech Stack: Python Django, JavaScript, AJAX, GitHub"
                        gitHubButton="GitHup Repo"
                        websiteRender="Network Appllication"
                        showTechStack={showTechStack}
                        handleClick={handleClick}
                    />

                    <ProjectBox 
                        name ='4'
                        icon={androidIcon} 
                        title="Android Trip Planner Mobile Application"
                        description="Tech Stack: Android Studio, JavaScript, GitHub"
                        gitHubButton="GitHup Repo"
                        websiteRender="Trip Planner"
                        showTechStack={showTechStack}
                        handleClick={handleClick}
                    />

                    <ProjectBox 
                        name ='5'
                        icon={cIcon} 
                        title="Chat System App"
                        description="Tech Stack: C, GitHub"
                        gitHubButton="GitHup Repo"
                        websiteRender="Chatting App"
                        showTechStack={showTechStack}
                        handleClick={handleClick}
                    />

                    <ProjectBox 
                        name ='6'
                        icon={htmlIcon} 
                        title="Pizza Shop Website"
                        description="Tech Stack: JavaScript, HTML, GitHub"
                        gitHubButton="GitHup Repo"
                        websiteRender="Set Piza Shop"
                        showTechStack={showTechStack}
                        handleClick={handleClick}
                    />
                </div>

                <img src={icons8} alt="Icon of coding" className="coding-icon" />
                
                <h1 className="progress-text">
                    <p>A Project Currently</p> 
                    <p>in Progress</p>
                </h1>

                <div  className="centered-project-box">

                    <ProjectBox 
                        name = '7'
                        icon={djangoIcon} 
                        title="Laptop Rental Kiosk Web Application"
                        description="Tech Stack: React, Python Django, MySQL, GitHub"
                        gitHubButton="GitHup Repo"
                        websiteRender="Laptop Rental Kiosk"
                        showTechStack={showTechStack}
                        handleClick={handleClick} 
                    />
                </div>
                
                <FooterComponents/>
            </div>
        </div>
    );
}

function ProjectBox({ name, icon, title, description, showTechStack, handleClick }) {

    // Define the links dynamically based on the name
    let gitHubLink = "";
    let websiteLink = "";

    if (name === "1") {
        gitHubLink = "https://github.com/Ermiyas9/PersonalPortfolio";
        websiteLink = "https://google.com";
    } else if (name === "2") {
        gitHubLink = "https://github.com/srose0040/WealthWave";
        websiteLink = "https://google.com";
    } else if (name === "3") {
        gitHubLink = "https://github.com/Ermiyas9/NetworkApplicationAssignment4";
        websiteLink = "https://google.com";
    } else if (name === "4") {
        gitHubLink = "https://github.com/Ermiyas9/AndroidTripPlannerAppB";
        websiteLink = "https://google.com";
    } else if (name === "5") {
        gitHubLink = "https://github.com/Ermiyas9/Hoochamacallit";
        websiteLink = "https://google.com";
    } 
    else if (name === "6") {
        gitHubLink = "https://github.com/Ermiyas9/FinalPizzaShop";
        websiteLink = "https://google.com";
    } 
    
    else {
        gitHubLink = "https://github.com/Ermiyas9/LaptopRentalKiosk";
        websiteLink = "https://google.com";
    }

    return (
        <div className="project-box" onClick={handleClick}>
            <img src={icon} alt={`${title} Icon`} className="project-icon" />
            <h2 className="project-title">{title}</h2>
            {showTechStack && (
                <>
                    <p className="tech-stack">{description}</p>
                    <p className="links">
                        <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                            View on GitHub Repo
                        </a>
                    </p>
                    <p className="links">
                        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </p>
                </>
            )}
        </div>
    );
}



export default ProjectsPage;

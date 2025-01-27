// AboutMe.js page new ddgit commit adding toddd git .. with new repcccocccc
import React from 'react';
import "animate.css/animate.min.css"; 
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import { Link } from 'react-router-dom';

import HeaderComponents from './Header';
import FooterComponents from './Footer';
import logoIcon from '../images/aboutMePage/logoIcon.png';
import hireMe from '../images/aboutMePage/hireMeIcon.png';
import outlookImageIcon from '../images/aboutMePage/outlookIcon.png';
import emailIcon from '../images/aboutMePage/gmailIcon.png';
import instaImageIcon from '../images/aboutMePage/instaIcon.png';
import myPhoto from '../images/aboutMePage/myPhoto.JPG';
import SocialMediaIconsDisplay from './socialMediaDisplay';

function AboutMePage() {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 80px',
        backgroundColor:'#FCDCF1',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        margin: '20px 50px',
    };

    const textStyle = {
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#2B3A67',
        fontSize: '40px',
        fontFamily: 'Arial, monospace',
    };

    const subTextStyle = {
        color: '#2B3A67',
        fontSize: '20px',
        fontFamily: 'Arial, monospace',
        maxWidth: '500px',
        marginTop: '15px',
    };

    const imageStyle = {
        width: '350px',
        height: '450px',
        borderRadius: '50%',
        marginRight: '35px',
        transition: 'transform 0.5s ease',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    };

    const scrollDownStyle = {
        color: "#2B3A67",
        fontWeight: "Bold",
        fontSize: "30px",
        fontFamily: "Arial, monospace",
        marginTop: '25px',
        display: 'flex',
        justifyContent: 'center',
    };

    const animatedTextStyle = {
        paddingLeft: "80px",
        color: "#2B3A67",
        fontSize: "20px",
        fontFamily: "Arial, monospace",
        lineHeight: "1.5",
        margin: "15px 0",
    };

    const ScrollDownAnimation = () => {
        const letters = " ||||||| ||||||| ".split("");
        return (
            <span className="pageScroller">
                {letters.map((letter, index) => (
                    <AnimatedOnScroll
                        key={index}
                        animateIn="bounceInRight"
                        delay={index * 100}
                        style={{
                            display: 'block',
                            marginTop: '5px',
                            textAlign: 'center',
                            color: "#2B3A67",
                            fontWeight: "Bold",
                            fontSize: "30px",
                            fontFamily: "Arial, monospace"
                        }}
                    >
                        {letter}
                    </AnimatedOnScroll>
                ))}
            </span>
        );
    };

    return (
        <div className="AboutMe">
            <HeaderComponents hireMeIcon={hireMe} logo={logoIcon} />
            <SocialMediaIconsDisplay outlookIcon={outlookImageIcon} gmailIcon={emailIcon} instaIcon={instaImageIcon} />

            <div className="introduction" style={containerStyle}>
                <div>
                    <p style={textStyle}>Hi, I am Ermiyas.</p>
                    <p style={subTextStyle}>I'm an independent creative developer from Kitchener, Ontario.</p>
                </div>
                <img src={myPhoto} alt="Programmer" style={imageStyle} />
            </div>

            <div style={scrollDownStyle}>Scroll</div>
            <ScrollDownAnimation />

            <div style={{ padding: '0 80px' }}>
                <p style={animatedTextStyle}>
                    <span role="img" aria-label="books">📚</span>- I am a second-year student pursuing an Advanced Diploma in Software Engineering at Conestoga College.
                </p>
                <p style={animatedTextStyle}>
                    <span role="img" aria-label="heart">🫶🏾</span>- After my first year, I secured a co-op spot, gaining real-world experience in software development.
                </p>
                <p style={animatedTextStyle}>
                    <span role="img" aria-label="heart">🫶🏾</span>- If you'd like to collaborate, feel free to <a href="mailto:egulti4128@conestogac.on.ca" style={{ color: 'Blue', fontWeight: 'bold' }}>hire me</a>!
                </p>
                <p style={animatedTextStyle}>
                    <span role="img" aria-label="books">📚</span>- Currently working in my co-op role as a Tech Representative at Conestoga College's Doon Campus.
                </p>
                <p style={animatedTextStyle}>
                    <span role="img" aria-label="man-technologist">🧑🏾‍💻</span>- My Conestoga experience revealed my passion for solving complex problems through creative solutions and systematic planning.
                </p>
                <p style={animatedTextStyle}>
                    <span role="img" aria-label="laptop">💻</span>- Skilled in C, C#, C++, JavaScript, Python, and web development, I’ve completed various projects and excel in software testing and collaboration tools like GitHub. My experiences in Ethiopia, Kuwait, and Canada enrich my perspective and adaptability.
                </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '50px', paddingBottom: '250px' }}>
                <Link to="/Projects" style={{ fontWeight:'Bold',color:'Blue',fontFamily: "Arial, monospace",textDecoration: 'none',  fontSize: '30px' }}>
                    Visit My Projects
                </Link>
            </div>

            <FooterComponents />
        </div>
    );
}

export default AboutMePage;

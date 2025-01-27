import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponents from './Header';
import FooterComponents from './Footer';

import logoIcon from '../images/hobbiesPage/logoIcon.png';
import hireMe from '../images/hobbiesPage/hireMeIcon.png';
import outlookImageIcon from '../images/hobbiesPage/outlookIcon.png';
import emailIcon from '../images/hobbiesPage/gmailIcon.png';
import instaImageIcon from '../images/hobbiesPage/instaIcon.png';
import SocialMediaIconsDisplay from './socialMediaDisplay';
import coding from '../images/hobbiesPage/coding.png';
import running from '../images/hobbiesPage/running.png';
import movies from '../images/hobbiesPage/movies.png';
import doggg from '../images/hobbiesPage/ermiAndAaron2.png';
import musika from '../images/hobbiesPage/music.png';
import coffee from '../images/hobbiesPage/coffee.mp4';
import food from '../images/hobbiesPage/food.png';

import './HobbiesPage.css'; // Make sure to add some CSS for styling

function HobbiesPage() {
    return (
        <div>
            {/* Header with logo and hire me icon */}
            <HeaderComponents 
                hireMeIcon={hireMe} 
                logo={logoIcon} 
            />

            {/* Social media icons for interaction */}
            <SocialMediaIconsDisplay 
                outlookIcon={outlookImageIcon} 
                gmailIcon={emailIcon} 
                instaIcon={instaImageIcon}
            />

            <div className="hobbies-container">
                
                <div className="intro-section">
                    <h1>Things I do as Hobby</h1>
                    <p> 
                    Let's explore my hobbies.
                    I've had many hobbies since childhood, and one that I particularly enjoy is running. 
                    Not only does it have numerous physical and psychological benefits, 
                    but it's something I always find myself coming back to.

                    In addition to running, I'm passionate about coding and creating visually appealing websites. 
                    I love bringing ideas to life and developing applications that make people's lives easier. 
                    For me, pursuing hobbies is a fantastic way to stay inspired and constantly learn new things.
                    </p>
                </div>

                <div className="hobbies-list">
                    <p style={{fontSize:'30px', color:'purple', fontWeight:'bolder'}}>What I Love Doing</p>
                    
                    <div className="hobby-item">
                        <img src={coding} alt="Coding" className="hobby-image" />
                        <div className="hobby-description">
                            <h3>Coding & Tech</h3>
                            <p>
                                I love exploring new technologies, working on personal projects, and reading Articles about new technology.
                            </p>
                        </div>
                    </div>

                    <div className="hobby-item">
                        <img src={running} alt="Runners" className="hobby-image" />
                        <div className="hobby-description">
                            <h3>Running </h3>
                            <p>
                                Running is a hobby that I’ve always gained benefits from.
                                I was an athlete as a teenager, so I often returned to running whenever possible. Running offers considerable physical and psychological benefits, so I greatly enjoy it.

                                Feel free to read the essay I wrote in high school about running.
                                </p>
                        </div>
                    </div>

                    <div className="hobby-item">
                        <img src={movies} alt='love watching movies' className="watching" />
                        <div className="hobby-description">
                            <h3>Watching Movies</h3>
                            <p>
                                I enjoy watching movies and documenteries. I always find myself relaxed while I watch movies.  
                            </p>
                        </div>
                    </div>

                    <div className="hobby-item">
                        <img src={doggg}  alt='spending time with dog' className="hobby-image" />
                        <div className="hobby-description">
                            <h3>Spending Time With Dogs </h3>
                            <p>
                                Spending time with my dog, Aaron, is one of my favourite hobbies. 
                                My dog brings so much joy into my life, and we have a special connection. 
                                Visit his page and see How wonderful he is. 
                            </p>
                        </div>
                    </div>

                    <div className="hobby-item">
                        <img src={musika} alt="musika" className="hobby-image" />
                        <div className="hobby-description">
                            <h3>Music </h3>
                            <p>
                                Music is another hobby I genuinely enjoy. Whether listening to my favourite songs, exploring new genres, 
                                or just unwinding with a good melody, music can calm the mind and spark creativity. 
                                It’s a perfect way to express emotions and connect with others, making it an essential part of my free time.
                            </p>
                        </div>
                    </div>

                    <div className="hobby-item">
                        <img src={food} alt="food" className="hobby-image" />
                        <div className="hobby-description">
                            <h3>Preparing Food </h3>
                            <p>
                                My other favourite thing to do is prepare meals. 
                                Either traditional foods or new recipes, I enjoy making delicious foods and enjoy their taste, 
                                which gives me a calm mind and quality time. I often prepare my meals, 
                                and the process of preparing meals is like a hobby for me. 
                            </p>
                        </div>
                    </div>
                    <div className="hobby-item">
                        <iframe src={coffee} className="hobby-image" title="Ethiopian Coffee" />
                        <div className="hobby-description">
                            <h3>Preparing an Ethiopian Coffee</h3>
                            <p>
                                One of my favourite Hobbies is making Ethiopian coffee. 
                                The ritual brings me back to my Ethiopian roots and helps me reconnect to my culture. 
                                The process of roasting the coffee bean and brewing and pouring it gives me a sense of relaxation, 
                                and the Ethiopian coffee ceremony's flavour and smell make it unique from other cultural coffee ceremonies. 
                                This ritual is about preparing the perfect cup and sharing an experience, 
                                as the preparation in history and often brings people close friends together in a communal setting.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer with copyright and links */}
                <FooterComponents />
            </div>
        </div>
    );
}

export default HobbiesPage;

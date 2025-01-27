
// doggie pageth
import React from "react"; 
import HeaderComponents from './Header';
import FooterComponents from './Footer';
import logoIcon from '../images/dogoPage/logoIcon.png';
import hireMe from '../images/dogoPage/hiremeIcon.png';
import instaImageIcon from '../images/dogoPage/instaIcon.png';
import outlookImageIcon from '../images/dogoPage/outlookIcon.png';
import emailIcon from '../images/dogoPage/gmailIcon.png';

import dogPic from '../images/dogoPage/Aaron1.JPG';
import dogPic1 from '../images/dogoPage/Aaron2.JPG';
import dogPic2 from '../images/dogoPage/Aaron3.JPG';
import dogMovie from '../images/dogoPage/aaronChill.mp4';

import SocialMediaIconsDisplay from './socialMediaDisplay'; 

function DoggoPage() {
    return (
        <div>
            {/* Header component */}
            <HeaderComponents 
                hireMeIcon={hireMe} 
                logo={logoIcon} 
            />

            {/* Social Media Icons */}
            <SocialMediaIconsDisplay 
                outlookIcon={outlookImageIcon} 
                gmailIcon={emailIcon} 
                instaIcon={instaImageIcon}
            />

            {/* Introduction Section */}
            <div
                className="doggoContents"
                style={{
                    fontSize: '40px',
                    fontWeight: 'bolder',
                    fontFamily: 'Arial, monospace',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                }}
            >
                <h1>Hey There!</h1>
                <img 
                    src={dogPic} 
                    alt="arron"  
                    style={{
                        width: '420px',
                        height: '500px',
                        borderRadius: '50%',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        marginBottom: '20px',
                    }}
                />
                <p style={{ fontSize: '20px', textAlign: 'center' }}>
                    Meet Aaron, my adorable 1.5-year-old pup who loves to have fun and take long naps! He's my loyal companion and keeps me company throughout my adventures.<span role="img" aria-label="dog paw">🐾</span>
                </p>
            </div>

            {/* Fun Message from Aaron */}
            <div
                className="dogMsg"
                style={{
                    fontSize: '25px',
                    fontFamily: 'Arial, monospace',
                    textAlign: 'center',
                    lineHeight: '1.5',
                    marginBottom: '50px',
                }}
            >
                <p>
                    Yo, what's up <span role="img" aria-label="hugging face emoji">🤗</span>? I'm Aaron, a year-and-a-half-old dog who's still a playful puppy <span role="img" aria-label="smiling face with hearts emoji">🥰</span>. I live with my best friend Ermiyas, but let me tell you, he takes up way too much of my space!
                </p>
                <p>
                    If you don’t hire him, I won’t be able to enjoy my long afternoon naps <span role="img" aria-label="unamused face emoji">😒</span>
                </p>
                <p>
                    Please, <a href="mailto:egulti4128@conestogac.on.ca" style={{ color: 'blue', fontWeight: 'bold' }}>HIRE HIM</a>, and let me sleep peacefully all day long. <span role="img" aria-label="sleeping face emoji">😴</span>
                </p>
            </div>

            {/* Fun Video Section */}
            <div
                style={{
                    fontSize: '30px',
                    fontWeight: 'bolder',
                    fontFamily: 'Arial, monospace',
                    textAlign: 'center',
                    marginBottom: '50px',
                }}
            >
                <h3>
                    Look at me... If Ermiyas doesn't get a job, I’ll be the one getting bored! <span role="img" aria-label="winking face with tongue emoji">😜</span>
                </h3>
                <iframe
                    width="600"
                    height="400"
                    src={dogMovie}
                    title="Dog Video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        border: '5px solid #ccc',
                        borderRadius: '15px',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
                        marginTop: '20px',
                    }}
                ></iframe>
            </div>

            {/* Image Gallery */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    marginBottom: '50px',
                }}
            >
                <img 
                    src={dogPic1} 
                    alt="Cute Dog"  
                    style={{
                        width: '400px',
                        height: '600px',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    }}
                />
                <img 
                    src={dogPic2} 
                    alt="Cute Dog"  
                    style={{
                        width: '400px',
                        height: '600px',
                        borderRadius: '15px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    }}
                />
            </div>

            {/* Footer */}
            <FooterComponents />
        </div>
    );
}

export default DoggoPage;

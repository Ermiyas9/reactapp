import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';



import '../App.css'

function socialMediaIconsDisplay({ outlookIcon, gmailIcon,instaIcon}) {
    return (
        <div className="socialMediaIconsContainer"  >

            {/* Social media icons */}
            <div className="githubIcon">
                <a
                    href="https://github.com/Ermiyas9"
                    className="socialMediaIcons"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    <FontAwesomeIcon icon={faGithub}
                        alt="GitHub"
                        className="socialMediaIcons"
                        style={{ verticalAlign: 'middle',paddingLeft: '10px',paddingTop: '5px' }}
                    />
                </a>
            </div>

            <div className="linkedInIcon">
                <a
                    href="https://www.linkedin.com/in/ermiyas-gulti-4ab51521a/"
                    className="socialMediaIcons"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    <FontAwesomeIcon icon={faLinkedin} 
                        alt="LinkedIn"
                        className="socialMediaIcons"
                        style={{ color:'#0077B5',verticalAlign: 'middle',paddingLeft: '10px' ,paddingTop: '5px'}}
                    />
                </a>
            </div>

            <div className="emailIcon">
                <a
                    href="https://www.instagram.com/Ermiyas_g9"
                    className="socialMediaIcons"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    <img
                        src={instaIcon}
                        alt="Instagram"
                        className="socialMediaIcons"
                        style={{ verticalAlign: 'middle',paddingLeft: '10px',paddingTop: '5px' }}
                    />
                </a>
            </div>

            <div className="emailIcon">
                <a
                    href="mailto:egulti4128@conestogac.on.ca"
                    className="socialMediaIcons"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    <img
                        src={outlookIcon}
                        alt="School Email"
                        className="socialMediaIcons"
                        style={{ verticalAlign: 'middle',paddingLeft: '10px', paddingTop: '5px' }}
                    />
                </a>
            </div>

            <div className="emailIcon">
                <a
                    href="mailto:enduethio@gmail.com"
                    className="socialMediaIcons"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    <img
                        src={gmailIcon}
                        alt="Personal Email"
                        className="socialMediaIcons"
                        style={{ verticalAlign: 'middle',paddingLeft: '10px',paddingTop: '5px' }}
                    />
                </a>
            </div>

        </div>
    );
}

export default socialMediaIconsDisplay;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';
import { faStrava } from '@fortawesome/free-brands-svg-icons/faStrava';
import "./footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Mao</h1>
            <u1 className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Previous Experience</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </u1>

            <div className="footer__social">
                <a href="https://www.instagram.com/andrewmao9" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i class="uil uil-instagram-alt" style={{color: "#D8BF2A"}}></i>
                </a>
                <a href="https://open.spotify.com/user/drewnasaur?si=ee0f298f9a4a4482" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSpotify} style={{color: "#63E6BE",}} />
                </a>
                <a href="https://www.linkedin.com/in/andrewmao9/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i class="uil uil-linkedin" style={{color: "#3A47E2"}}></i>
                </a>
                <a href="https://github.com/andrewmao2" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i class="uil uil-github" style={{color: "#8F17AF"}}></i>
                </a>
                <a href="https://www.strava.com/athletes/128959047" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faStrava} style={{color: "#FDB208",}} />
                </a>
            </div>
            <span className="footer__copy">&#169; Andrew Mao
            </span>
        </div>
    </footer>
        
  )
}

export default Footer

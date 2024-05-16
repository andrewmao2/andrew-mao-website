import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';


const Social = () => {
  return (
    <div className="home__social">
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
      </div>
  )
}

export default Social
import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add
        ("scroll-header");
        else header.classList.remove("scroll-header");
    })
    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState ("#home");

    return (
        <header className="header">
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Mao</a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" 
                            onClick={() => setActiveNav('#home')} 
                            className={activeNav === "#home" ? 
                                "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} 
                            className={activeNav === "#about" ? 
                                "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} 
                            className={activeNav === "#skills" ? 
                                "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" onClick={() => setActiveNav('#services')} 
                            className={activeNav === "#services" ? 
                                "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Previous Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} 
                            className={activeNav === "#contact" ? 
                                "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <div className="nav__close" onClick={() => setToggle(!toggle)}>
                        <i className="uil uil-times"></i>
                    </div>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;

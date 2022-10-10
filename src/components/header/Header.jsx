import React, { createContext, useState } from 'react'
import "./header.css";
import App from '../../App';



const Header = () => {
    /*==================change background header =================*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
    /*=========================Toggle Menu========================*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");


    return (

        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    Doyoung
                </a>
                <div className="nav__menupanel">
                    <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className='nav__list grid'>
                            <li className='nav__item'>
                                <a href="#home" className='nav__link' onClick={() => setActiveNav('#home')}>
                                    <i className="uil uil-estate nav__icon"></i>Home
                                </a>
                            </li>

                            <li className='nav__item'>
                                <a href="#about" className='nav__link' onClick={() => setActiveNav('#about')}>
                                    <i className="uil uil-user nav__icon"></i>About
                                </a>
                            </li>

                            <li className='nav__item'>
                                <a href="#path" className='nav__link' onClick={() => setActiveNav('#path')}>
                                    <i className="uil uil-briefcase-alt nav__icon"></i>Path
                                </a>
                            </li>

                            <li className='nav__item'>
                                <a href="#skills" className='nav__link' onClick={() => setActiveNav('#skills')}>
                                    <i className="uil uil-file-alt nav__icon"></i>Skills
                                </a>
                            </li>


                            <li className='nav__item'>
                                <a href="#post" className='nav__link' onClick={() => setActiveNav('#post')}>
                                    <i className="uil uil-scenery nav__icon"></i>Post
                                </a>
                            </li>

                            <li className='nav__item'>
                                <a href="#contact" className='nav__link' onClick={() => setActiveNav('#contact')}>
                                    <i className="uil uil-message nav__icon"></i>Contact
                                </a>
                            </li>
                        </ul>
                        {/* close button */}
                        <div className="nav__close">
                            <i className="uil uil-times" onClick={() => showMenu(!Toggle)}></i>
                        </div>
                    </div>
                    <div className="nav__buttons">
                        {/* theme change button */}
                        <i className="uil uil-moon change-theme" id="theme-button" ></i>

                        {/* toggle button */}
                        <div className='nav__toggle'>
                            <i className="uil uil-apps" onClick={() => showMenu(!Toggle)}></i>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}
export default Header
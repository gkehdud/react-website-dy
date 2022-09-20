import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Doyoung</h1>
                <ul className="footer__list">

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#journey" className="footer__link">Journey</a>
                    </li>

                    <li>
                        <a href="#post" className="footer__link">Post</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/doyoun_g" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.facebook.com/gkehdud" className="footer__social-link" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.twitter.com" className="footer__social-link" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>

                </div>
                <span className="footer__copy">
                    &#169; Doyoung ha. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer
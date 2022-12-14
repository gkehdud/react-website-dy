import React  from 'react'
import './about.css';
import CV from "../../assets/RESUME_DOYOUNGHA.pdf";

// import { useInView } from 'react-intersection-observer';
// import { Color } from 'three';
// import { useRef, useState } from 'react'
// import AboutImg from "../../assets/about.jpg";
// import Info from './Info';

const About = () => {
    // const { ref: myRef, inView: myElementIsVisible } = useInView();
    // const { ref: soccerRef, inView: SoccerIsVisible } = useInView();


    return (
        <section className="about section" id="about">
            <div>
                <h2 className="section__title" data-aos="fade-down">About Me</h2>
                <span className="section__subtitle"></span>

                {/* <p ref={soccerRef}>
                    <span className={SoccerIsVisible ? 'soccer animateSoccer' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="194" height="194" version="1.1">
                            <circle fill="#000000" cx="97" cy="97" r="97" />
                            <path fill="#ffffff" d="m 94,9.2 a 88,88 0 0 0 -55,21.8 l 27,0 28,-14.4 0,-7.4 z m 6,0 0,7.4 28,14.4 27,0 a 88,88 0 0 0 -55,-21.8 z m -67.2,27.8 a 88,88 0 0 0 -20,34.2 l 16,27.6 23,-3.6 21,-36.2 -8.4,-22 -31.6,0 z m 96.8,0 -8.4,22 21,36.2 23,3.6 15.8,-27.4 a 88,88 0 0 0 -19.8,-34.4 l -31.6,0 z m -50,26 -20.2,35.2 17.8,30.8 39.6,0 17.8,-30.8 -20.2,-35.2 -34.8,0 z m -68.8,16.6 a 88,88 0 0 0 -1.8,17.4 88,88 0 0 0 10.4,41.4 l 7.4,-4.4 -1.4,-29 -14.6,-25.4 z m 172.4,0.2 -14.6,25.2 -1.4,29 7.4,4.4 a 88,88 0 0 0 10.4,-41.4 88,88 0 0 0 -1.8,-17.2 z m -106,57.2 -15.4,19 L 77.2,182.6 a 88,88 0 0 0 19.8,2.4 88,88 0 0 0 19.8,-2.4 l 15.4,-26.6 -15.4,-19 -39.6,0 z m -47.8,2.6 -7,4 A 88,88 0 0 0 68.8,180.4 l -14,-24.6 -25.4,-16.2 z m 135.2,0 -25.4,16.2 -14,24.4 a 88,88 0 0 0 46.4,-36.6 l -7,-4 z" />
                        </svg>
                    </span>
            </p> */}
                <div className="about__container container grid">
                    {/* <img src={AboutImg} alt="" className="about__img" /> */}

                    <img className="about__img" data-aos = "fade-right"  data-aos-duration = "1000" />
                    <div className="about__data" data-aos = "fade-left" data-aos-duration = "1000" >
                        {/* <Info /> */}

                        {/* <i class="uil uil-football" className={SoccerIsVisible ? 'soccer animateSoccer' : ''} ref={soccerRef} style={{ fontSize: '150px' }} >
                    </i> */}
                        {/* <p>{myElementIsVisible ? 'Yes' : 'No'}</p> */}
                        <p className="about__description">I'm a Software Developer from Korea, based in Queens, NY.
                            <br /><br />I Developed ERP system, iOS Apps for wms, sales. Recently I'm really into developing website and learning Frontend.
                            <br /><br />Fan of soccer, TV series and animals. Especially cat.
                            {/* <br /><br />Interested in the entire backend specturm especially database,sql and working on ambitious projects with positive people. */}
                            {/* <br/><br/>Not all those who wander are lost:) */}
                        </p>

                        <a download="" href={CV} className="button button--flex">
                            Download CV
                            <svg
                                class="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                    fill="var(--container-color)"
                                ></path>
                            </svg>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About
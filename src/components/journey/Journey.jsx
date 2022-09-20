import React from 'react';
import { useState } from 'react';
import './journey.css';

const Journey = () => {
    const[toggleState,setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <section className="journey" id="journey">
            <h2 className="section__title">We are all on a journey</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="journey__container container">
                <div className="journey__tabs">
                    <div className={toggleState === 1 ? "journey__button journey__active button--flex" : 
                    "journey__button button--flex"} onClick = {() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap journey__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "journey__button journey__active button--flex" : 
                    "journey__button button--flex"} onClick = {() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt journey__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="journey__sections">
                    <div className={toggleState == 1 ? "journey__content journey__content-active": "journey__content"}>
                        <div className="journey__data">
                            <div>
                                <h3 className="journey__title">Web Development</h3>
                                <span className="journey__subtitle">Spain - Institute</span>
                                <div className="journey__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>
                        </div>

                        <div className="journey__data">
                            <div></div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>

                            <div>
                                <h3 className="journey__title">UX Expert</h3>
                                <span className="journey__subtitle">Korea - Keimyung University</span>
                                <div className="journey__calender">
                                    <i className="uil uil-calendar-alt"></i>2017 - 2018
                                </div>
                            </div>

                        </div>

                        <div className="journey__data">
                            <div>
                                <h3 className="journey__title">Web Design</h3>
                                <span className="journey__subtitle">Spain - Institute</span>
                                <div className="journey__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>
                        </div>

                        <div className="journey__data">
                            <div>

                            </div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>

                            <div>
                                <h3 className="journey__title">Art Director</h3>
                                <span className="journey__subtitle">Korea - Keimyung University</span>
                                <div className="journey__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={toggleState == 2 ? "journey__content journey__content-active": "journey__content"}>
                        <div className="journey__data">
                            <div>
                                <h3 className="journey__title">Product Designer</h3>
                                <span className="journey__subtitle">Spain - Institute</span>
                                <div className="journey__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>
                        </div>

                        <div className="journey__data">
                            <div></div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>

                            <div>
                                <h3 className="journey__title">UX Designer</h3>
                                <span className="journey__subtitle">Korea - Keimyung University</span>
                                <div className="journey__calender">
                                    <i className="uil uil-calendar-alt"></i>2017 - 2018
                                </div>
                            </div>

                        </div>

                        <div className="journey__data">
                            <div>
                                <h3 className="journey__title">Web Design</h3>
                                <span className="journey__subtitle">Spain - Institute</span>
                                <div className="journey__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
            
        </section>
    )
}

export default Journey
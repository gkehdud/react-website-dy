import React from 'react';
import { useState } from 'react';
import './career.css';
import "aos/dist/aos.css";
import military from "./military.jpg"
import { BufferGeometryLoader } from 'three';


const Career = () => {
    const [toggleState, setToggleState] = useState(1);
    const Swal = require('sweetalert2')

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const IwasCute = () => {
        Swal.fire({
            position: 'center',
            text: 'Pretty cute right?',
            // icon: 'error',
            // text: 'Please input your valid name, email, story.',
            imageUrl: military,
            imageWidth: 300,
            imageHeight: 250,
            imageAlt: 'Custom Image',
            showConfirmButton: true,
            confirmButtonText: 'I agree',
            showClass: {
                popup: 'animate__animated animate__fadeInDown faster'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp faster'
            }
        })


    };
    return (
        <section className="career section" id="career">
            <div data-aos="fade-down">
                <h2 className="section__title">Journey</h2>
                <span className="section__subtitle">My personal journey</span>

                <div className="career container">
                    <div className="career__content">
                        <div className="career__data">

                            <div>
                                <h3 className="career__title">Computer Science Engineer</h3>
                                <span className="career__subtitle">Keimyung University (Korea)</span>
                                <div className="career__calender">
                                    <i className="uil uil-calendar-alt"></i> 2013 - 2018
                                </div>
                            </div>
                            <div className='career__description'>
                                {/* <span className="career__datatext">
                            Library management system(C# project), Package management system (Java with Raspberry Pi & Arduino), Unity game project (Leap Motion), Shopping website project(PHP)
                            </span> */}
                                <span className="career__datatext-underline">Shopping website project</span>
                                <span className="career__datatext-underline">Library management project</span>
                                <span className="career__datatext-underline">Clock alarm project</span>
                                <span className="career__datatext-underline">Unity game project</span>
                                <span className="career__datatext-underline">Package management system</span>
                            </div>
                        </div>

                        <div className="career__data">
                            <div>
                                <h3 className="career__title">Military</h3>
                                <span className="career__subtitle">Army (Korea)</span>
                                <div className="career__calender">
                                    <i className="uil uil-calendar-alt"></i> 2014 - 2016
                                </div>
                            </div>
                            <div className='career__description'>
                                <span onClick={IwasCute} className="career__datatext-underline">
                                    It was quite fun I guess 🇰🇷</span>
                            </div>
                        </div>

                        <div className="career__data">
                            <div>
                                <h3 className="career__title">Qualcomm Campus Program</h3>
                                <span className="career__subtitle">Institute (UCSD,US)</span>
                                <div className="career__calender">
                                    <i className="uil uil-calendar-alt"></i> Jul 2017 - Oct 2017
                                </div>
                            </div>
                            <div className='career__description'>
                                {/* <span className='career__datatext'>Android app project(Building escape app using fire alarm sensor)</span> */}
                                <span className='career__datatext-underline'>Android app project</span>
                            </div>
                        </div>

                        <div className="career__data">
                            <div>
                                <h3 className="career__title">ERP Developer</h3>
                                <span className="career__subtitle">BCS International Corporation (NY,US)</span>
                                <div className="career__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2022
                                </div>
                            </div>
                            <div className='career__description'>
                                <span className="career__datatext">Developed a proprietary ERP program</span>
                                <span className="career__datatext">Implemented a barcode scanner WMS program</span>
                                <span className="career__datatext">IPad app for the sales team to send order</span>
                                <span className="career__datatext">Network solution, Windows server</span>
                                <span className="career__datatext-underline">More description</span>
                                {/* <span className="career__datatext">
                                    1. Developed a proprietary ERP program from the ground up using C# Winforms for 
                                    all departments in the company, including sales, AR, AP, PO, stock, logistics, and Accounting.
                                    <br></br><br></br>
                                    2. Created an iPad app for the sales team to send order through a private server, increasing the rate of processing sales and cut back on necessary manual labor.
                                    <br></br><br></br>
                                    3. Implemented a barcode scanner for the warehouse and a fully digitized inventory management by LOT number system as well as automation of delivery route planning with Google Map API to cut back on half of the AR and Logistics team members and time unnecessarily spent online.
                                    <br></br><br></br>
                                    4. Duplicated the windows server with a Windows Server Virtual Machine in LA to safeguard and back up our server to minimize date loss in case of an emergency
                                    <br></br><br></br>
                                    5. Constantly develop, maintain, and review the ERP program and the server to increase functionality, stability, and efficiency of all departments to maximize the productivity of the company
                                    <br></br><br></br>
                                    6.  Lead collaboration with third party auditing company to assess and certify the ERP program’s safety standards
                                </span> */}

                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </section >
    )
}

export default Career
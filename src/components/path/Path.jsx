import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react'
import './path.css'
import military from "./military.jpg"


const Path = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    const Swal = require('sweetalert2');

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
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3500,
            confirmButtonText: 'I agree',
            customClass: {
                popup: 'swal'
            },
            // showClass: {
            //     popup: 'animate__animated animate__fadeInDown faster'
            // },
            // hideClass: {
            //     popup: 'animate__animated animate__fadeOutUp faster'
            // }
        })

    };

    return (
        <div className='path section' id="path">
            <div className='path__container container'>
                <div className='path__name'>
                <h2 className="section__title">Path</h2>
                <span className="section__subtitle">My personal path</span>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>
                            <p className="path__list">ERP Developer</p>
                        </Tab>
                        <Tab>
                            <p className="path__list">Qualcomm Campus Program</p>
                        </Tab>
                        <Tab>
                            <p className="path__list">Military</p>
                        </Tab>
                        <Tab>
                            <p className="path__list">Computer Science Engineer</p>
                        </Tab>

                    </TabList>

                    <TabPanel>
                        <div className="panel-content">
                            <h3>
                                <span className="path__title">ERP Developer</span>
                                <span className="path__subtitle">BCS International Corporation </span>
                            </h3>
                            <div className="path__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2022 (NY, US)
                            </div>
                            <div className='path__description'>
                                <span className="path__datatext-underline"><i class="uil uil-angle-right-b"></i>
                                Developed a proprietary ERP program from the ground up using C# Winforms for 
                                    all departments in the company, including sales, AR, AP, PO, stock, logistics, and Accounting.
                                    </span>
                                    <span className="path__datatext-underline"><i class="uil uil-angle-right-b"></i>
                                    Created an iPad app for the sales team to send order through a private server, increasing the rate of processing sales and cut back on necessary manual labor.
                                    </span>
                                    <span className="path__datatext-underline"><i class="uil uil-angle-right-b"></i>
                                    Implemented a barcode scanner iPod app for the warehouse and a fully digitized inventory management by LOT number system as well as automation of delivery route planning with Google Map API to cut back on half of the AR and Logistics team members and time unnecessarily spent online.
                                    </span>
                                    <span className="path__datatext-underline"><i class="uil uil-angle-right-b"></i>
                                    Duplicated the windows server with a Windows Server Virtual Machine in LA to safeguard and back up our server to minimize date loss in case of an emergency
                                    </span>
                                    <span className="path__datatext-underline"><i class="uil uil-angle-right-b"></i>
                                    Constantly develop, maintain, and review the ERP program and the server to increase functionality, stability, and efficiency of all departments to maximize the productivity of the company
                                    </span>
                                    <span className="path__datatext-underline"><i class="uil uil-angle-right-b"></i>
                                    Lead collaboration with third party auditing company to assess and certify the ERP program’s safety standards</span>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <h3>
                                <span className="path__title">Qualcomm Campus Program</span>
                                <span className="path__subtitle">Institute </span>
                            </h3>
                            <div className="path__calender">
                                <i className="uil uil-calendar-alt"></i> Jul 2017 - Sep 2017 (UCSD, US)
                            </div>
                            <div className='path__description'>
                                <span className="path__datatext-underline">
                                    Android app project(Building escape app using fire alarm sensor)</span>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <h3>
                                <span className="path__title">Military</span>
                                <span className="path__subtitle">Army </span>
                            </h3>
                            <div className="path__calender">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2016 (Korea)
                            </div>
                            <div className='path__description'>
                                <span onClick={IwasCute} className="path__datatext-underline">
                                    It was fun though 🇰🇷</span>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">

                            <h3>
                                <span className="path__title">Computer Science Engineer</span>
                                <span className="path__subtitle">Keimyung University</span>
                            </h3>
                            <div className="path__calender">
                                <i className="uil uil-calendar-alt"></i> 2013 - 2018 (Korea)
                            </div>
                            <div className='path__description'>
                                <span className="path__datatext-underline"><i class="uil uil-angle-right-b"></i>Shopping website project</span>
                                <span className="path__datatext-underline"><i class="uil uil-angle-right-b"></i>Library management project</span>
                                <span className="path__datatext-underline"><i class="uil uil-angle-right-b"></i>Clock alarm project</span>
                                <span className="path__datatext-underline"><i class="uil uil-angle-right-b"></i>Unity game project</span>
                                <span className="path__datatext-underline"><i class="uil uil-angle-right-b"></i>Package management system</span>
                            </div>
                        </div>
                    </TabPanel>

                </Tabs>


                

            </div>
        </div>
    )
}

export default Path
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// import { Box, Tab, Tabs, Typography } from '@mui/material';

import React, { useState } from 'react'
import './journeys.css'
import military from "./military.jpg"



const Journeys = () => {


    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    const Swal = require('sweetalert2')
    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'top-right',
    //     iconColor: 'white',
    //     customClass: {
    //       popup: 'colored-toast'
    //     },
    //     showConfirmButton: false,
    //     timer: 1500,
    //     timerProgressBar: true
    //   })
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
        <div className='journeys section' id='journeys'>
            <div className='journeys__container container'>
                <div className='journeys__name'>
                <h2 className="section__title">Path</h2>
                <span className="section__subtitle">My personal path</span>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>
                            <p className="journeys__list">ERP Developer</p>
                        </Tab>
                        <Tab>
                            <p className="journeys__list">Qualcomm Campus Program</p>
                        </Tab>
                        <Tab>
                            <p className="journeys__list">Military</p>
                        </Tab>
                        <Tab>
                            <p className="journeys__list">Computer Science Engineer</p>
                        </Tab>

                    </TabList>

                    <TabPanel>
                        <div className="panel-content">
                            <h3>
                                <span className="journeys__title">ERP Developer</span>
                                <span className="journeys__subtitle">BCS International Corporation </span>
                            </h3>
                            <div className="journeys__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2022 (NY, US)
                            </div>
                            <div className='journeys__description'>
                                <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>
                                Developed a proprietary ERP program from the ground up using C# Winforms for 
                                    all departments in the company, including sales, AR, AP, PO, stock, logistics, and Accounting.
                                    </span>
                                    <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>
                                    Created an iPad app for the sales team to send order through a private server, increasing the rate of processing sales and cut back on necessary manual labor.
                                    </span>
                                    <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>
                                    Implemented a barcode scanner for the warehouse and a fully digitized inventory management by LOT number system as well as automation of delivery route planning with Google Map API to cut back on half of the AR and Logistics team members and time unnecessarily spent online.
                                    </span>
                                    <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>
                                    Duplicated the windows server with a Windows Server Virtual Machine in LA to safeguard and back up our server to minimize date loss in case of an emergency
                                    </span>
                                    <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>
                                    Constantly develop, maintain, and review the ERP program and the server to increase functionality, stability, and efficiency of all departments to maximize the productivity of the company
                                    </span>
                                    <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>
                                    Lead collaboration with third party auditing company to assess and certify the ERP program’s safety standards</span>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <h3>
                                <span className="journeys__title">Qualcomm Campus Program</span>
                                <span className="journeys__subtitle">Institute </span>
                            </h3>
                            <div className="journeys__calender">
                                <i className="uil uil-calendar-alt"></i> Jul 2017 - Oct 2017 (UCSD, US)
                            </div>
                            <div className='journeys__description'>
                                <span className="journeys__datatext-underline">
                                    Android app project(Building escape app using fire alarm sensor)</span>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <h3>
                                <span className="journeys__title">Military</span>
                                <span className="journeys__subtitle">Army </span>
                            </h3>
                            <div className="journeys__calender">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2016 (Korea)
                            </div>
                            <div className='journeys__description'>
                                <span onClick={IwasCute} className="journeys__datatext-underline">
                                    It was fun though 🇰🇷</span>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">

                            <h3>
                                <span className="journeys__title">Computer Science Engineer</span>
                                <span className="journeys__subtitle">Keimyung University</span>
                            </h3>
                            <div className="journeys__calender">
                                <i className="uil uil-calendar-alt"></i> 2013 - 2018 (Korea)
                            </div>
                            <div className='journeys__description'>
                                <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>Shopping website project</span>
                                <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>Library management project</span>
                                <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>Clock alarm project</span>
                                <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>Unity game project</span>
                                <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>Package management system</span>
                            </div>
                        </div>
                    </TabPanel>

                </Tabs>


                {/* 

                <Box>
                    <Box sx={{ display: 'flex' }}>
                        <Tabs 
                            value={tabIndex}
                            onChange={handleTabChange}
                            orientation="vertical"
                            textColor='inherit'
                        >
                            <Tab label="ERP Developer" />
                            <Tab label="Qualcomm Campus Program" />
                            <Tab label="Military" />
                            <Tab label="Computer Science Engineer" />
                        </Tabs>
                        <Box sx={{ margin: 2 }}>
                            {tabIndex === 0 && (
                                <Box>
                                    <Typography>
                                    <h3>
                                <span className="journeys__title">Computer Science Engineer</span>
                                <span className="journeys__subtitle">@ Keimyung University (Korea)</span>
                            </h3>
                            <div className="journeys__calender">
                                <i className="uil uil-calendar-alt"></i> 2013 - 2018
                            </div>
                            <div className='journeys__description'>
                                <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>Shopping website project</span>
                                <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>Library management project</span>
                                <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>Clock alarm project</span>
                                <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>Unity game project</span>
                                <span className="journeys__datatext-underline"><i class="uil uil-angle-right-b"></i>Package management system</span>
                            </div>
                                    </Typography>
                                </Box>
                            )}
                            {tabIndex === 1 && (
                                <Box>
                                    <Typography>The second tab</Typography>
                                </Box>
                            )}
                            {tabIndex === 2 && (
                                <Box>
                                    <Typography>The third tab</Typography>
                                </Box>
                            )}
                            {tabIndex === 3 && (
                                <Box>
                                    <Typography>The third tab</Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box> */}

            </div>
        </div>
    )
}

export default Journeys

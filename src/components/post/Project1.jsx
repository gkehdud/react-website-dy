import React from 'react'
import { Button } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import ReactPlayer from 'react-player'
// import VideoPlayer from 'containers/VideoPlayer';
import './post.css'
import image1 from '../../assets/Package.jpeg'
import image2 from '../../assets/Package1.png'
import image3 from '../../assets/PackageSystem.png'
import image4 from '../../assets/PackageSystem2.png'
// import video1 from '../../assets/PackageVideo.mp4'

const Project1 = ({ closeModal }) => {
    return (
        <div className='modal-section' data-aos="zoom-in-up">
            <div className="modal-container">
                <div className="modal-close-btn-container">
                    <Button onClick={closeModal}>X</Button>
                </div>
                <div className='modal__header'>
                <h2 className="modal__title">Package management project</h2>
                <ui className="tags text-sm">
                <li>java</li>
                <li>arduino</li>
                <li>raspberry pi</li>
                <li>mysql</li>
                </ui>
                <p className="modal__subtitle">Make your package safer. Locking & management system in your mailbox.</p>
                
                </div>
                <div className="modal-body">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        // slidesPerView={3}
                        // autoplay={{
                        //     // delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        pagination={{
                            clickable: true,
                        }}
                        // scrollbar = {true}
                        // pagination = {true}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                                <img src={image1}/>
                                <p className="modal__description">This was my graiduation project in my university. Now it's generally using like amazon locker, not unique idea at all but it was a good experience to study
                                about connection between arduino and raspberry pi.</p>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={image3}/>
                                <p className="modal__description">Our target is people who are living in apartment that they share mailbox area. You can control your mailbox with your phone app and raspberry pi in mail area. </p>
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* <ReactPlayer url={video1}> </ReactPlayer> */}
                        {/* <video url={video1}> </video> */}
                        <img src={image4}/>
                                <p className="modal__description">This was my graduation project. Not that unique idea but I could learn how to connect with devices and platform. 
                Sometimes we lost our package it could be thief or some other reason. So we tried to make some safe devices in our mailbox.
                We used raspberry pi, arduino java mysql. that was fun </p>
                        </SwiperSlide>
                    </Swiper>
                    {/* <div className="links">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.youtube.com/channel/UCHfmmdKuRDmZ5EUzGdqI7-Q"
                        >
                            YouTube
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/Suhaan-Bhandary"
                        >
                            GitHub
                        </a>
                    </div> */}
                </div>
                {/* <div className="modal-footer">
                    <Button
                        onClick={() =>
                            window.open("https://github.com/Suhaan-Bhandary/Sudoku-Game")
                        }
                        buttonStyle="btn--primary--solid"
                        text="GitHub"
                    />
                    <Button
                        onClick={closeModal}
                        buttonStyle="btn--success--solid"
                        text="Continue"
                    />
                </div> */}
            </div>
        </div>

    )
}

export default Project1
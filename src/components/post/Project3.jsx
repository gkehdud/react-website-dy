import React from 'react'
import { Button } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import ReactPlayer from 'react-player'
// import VideoPlayer from 'containers/VideoPlayer';
import './post.css'
import image1 from '../../assets/Magician.png'

const Project3 = ({ closeModal }) => {
    return (
        <div className='modal-section' data-aos="zoom-in-up">
            <div className="modal-container">
                <div className="modal-close-btn-container">
                    <Button onClick={closeModal}>X</Button>
                </div>
                <div className='modal__header'>
                    <h2 className="modal__title">Magician</h2>
                    <ui className="tags text-sm">
                        <li>Leap motion</li>
                        <li>Unity</li>
                        <li>VR</li>
                        <li>C++</li>
                    </ui>
                    <p className="modal__subtitle">Using leap motion, make the magic like ice, fire, wind with different finger motions and kill the monsters. </p>

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
                            <img src={image1} />
                            <p className="modal__description">Using leap motion, make the magic like ice, fire, wind with different finger motions and kill the monsters. </p>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default Project3
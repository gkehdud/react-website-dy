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
import QI_Final from '../../assets/QI_Final.pptx'
import QI_Documentaion from '../../assets/QI_Documentation.docx'
import CV from "../../assets/RESUME_DOYOUNGHA.pdf";

const Project2 = ({ closeModal }) => {
    return (
        <div className='modal-section' data-aos="zoom-in-up">
            <div className="modal-container">
                <div className="modal-close-btn-container">
                    <Button onClick={closeModal}>X</Button>
                </div>
                <div className='modal__header'>
                <h2 className="modal__title">Building Run</h2>
                <ui className="tags text-sm">
                  <li>Android studio</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>Udoo board</li>
                </ui>
                <p className="modal__subtitle">In case of fire, fire is detected, detect where the person is in the building, figure out available paths, navigate to the closest exit. </p>
                
                </div>
                <div className="modal-body">
                <img className='modal__image' src={image1}/>
                                <p className="modal__description">This was my graduation project. Not that unique idea but I could learn how to connect with devices and platform. 
                Sometimes we lost our package it could be thief or some other reason. So we tried to make some safe devices in our mailbox.
                We used raspberry pi, arduino java mysql. that was fun </p>
                    <div className="links">
                        <a
                            target="_blank"
                            href={QI_Final}
                        >
                            PPT
                        </a>
                        
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={QI_Documentaion}
                            download=""
                        >
                            Doc
                        </a>
                    </div>
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

export default Project2
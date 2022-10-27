
import React, { createContext, useRef,useEffect, useState } from 'react'
import "./App.css"
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Journeys from './components/journeys/Journeys';
import Post from './components/post/Post';
import Aos from 'aos';
import DYlogo from './assets/DYlogo.png';
import lottie from 'lottie-web';
import soccerplayer from './assets/soccerplayer1.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {gsap} from 'gsap';
import Header from "./components/header/Header";
import "aos/dist/aos.css";

const Main = () => {
 
  /*=========================Toggle Menu========================*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // let tl = gsap.timeline();
  // let tl2 = gsap.timeline();
  // let cursor = useRef(null);
  // let h1 = useRef(null);
  // let posX = 0;
  // let posY = 0;
  // let mouseX = 0;
  // let mouseY = 0;
  // useEffect(() => {
  //   tl.to({},0.016,{
  //     repeat: -1,
  //     onRepeat: function(){
  //       posX += (mouseX-posX) / 10;
  //       posY += (mouseY-posY) / 10;
  //       tl.set(cursor,{
  //         css: {
  //           left: posX - 40,
  //           top: posY - 50,
  //         }
  //       })
  //     }
  //   })
  //   document.addEventListener("mousemove", function(e){
  //     mouseX = e.pageX;
  //     mouseY = e.pageY;

  //   })
    
  // })
  return (
    <>
              <Home />
              <About />
              <Journeys />
              <Skills />
              <Post />
              <Contact />
              <Footer />
              <Scrollup />
              {/* <div className="cursor-follow" ref={el => cursor = el}></div> */}
              </>
  )
}

export default Main
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


// import Journey from './components/journey/Journey';
// import Career from './components/career/Career';
// import Game from './components/sudoku/games/Game';
// import Path from './components/path/Path';
// import Header from "./components/header/Header";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import ReactLoading from 'react-loading'
import Main from './Main';
import Game from './components/sudoku/Game/Game';

export const ThemeContext = createContext(null);

const App = () => {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      // fetch('https://jsonplaceholder.typicode.com/posts')
      //   .then(response => response.json())
      //   .then(json => {
      //     setData(json);
      //     setDone(true);
      //   })
      setDone(true);
    }, 2000);
  }, [])
  
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.querySelector("#animation"),
      animationData: soccerplayer,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        className: ".app__animation"
      }
    });
    return () => instance.destroy();
  }, []);
  /*==================change background header =================*/
  window.addEventListener("scroll", function () {
    if (done) {
      const header = document.querySelector(".header");
      if (this.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");

      // const scrollUp = document.querySelector(".scrollup");
      // if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
      // else scrollUp.classList.remove("show-scroll");
    }
  });
  /*=========================Toggle Menu========================*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        
        {
          !done ?
            (
              <div className='loading'>
              {/* <img className="loading__img" /> */}
            <div id='animation' className='loading__image'></div>
            {/* <ReactLoading type='bubbles'>
              </ReactLoading> */}
            </div>
            )
            :
            (<main className='main'>
              <Router>
              <header className='header'>
                <nav className="nav container">
                  <a href="/" className="nav__logo">
                    Doyoung
                  </a>
                  <div className="nav__menupanel">
                    <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                      <ul className='nav__list grid'>
                        <li className='nav__item'>
                          <a href="/#home" className='nav__link' onClick={() => setActiveNav('#home')}>
                            <i className="uil uil-estate nav__icon"></i>Home
                          </a>
                        </li>

                        <li className='nav__item'>
                          <a href="/#about" className='nav__link' onClick={() => setActiveNav('#about')}>
                            <i className="uil uil-user nav__icon"></i>About
                          </a>
                        </li>

                        <li className='nav__item'>
                          <a href="/#journeys" className='nav__link' onClick={() => setActiveNav('#journeys')}>
                            <i className="uil uil-briefcase-alt nav__icon"></i>Path
                          </a>
                        </li>
                        <li className='nav__item'>
                          <a href="/#skills" className='nav__link' onClick={() => setActiveNav('#skills')}>
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                          </a>
                        </li>


                        <li className='nav__item'>
                          <a href="/#post" className='nav__link' onClick={() => setActiveNav('#post')}>
                            <i className="uil uil-scenery nav__icon"></i>Projects
                          </a>
                        </li>

                        <li className='nav__item'>
                          <a href="/#contact" className='nav__link' onClick={() => setActiveNav('#contact')}>
                            <i className="uil uil-message nav__icon"></i>Contact
                          </a>
                        </li>
                      </ul>
                      {/* close button */}
                      <div className="nav__close">
                        <i className="uil uil-times" onClick={() => showMenu(!Toggle)}></i>
                      </div>
                    </div>
                    <div className="nav__buttons">
                      {/* theme change button */}
                      <i className="uil uil-moon change-theme" id="theme-button" onClick={() => toggleTheme()}></i>

                      {/* toggle button */}
                      <div className='nav__toggle'>
                        <i className="uil uil-apps" onClick={() => showMenu(!Toggle)}></i>
                      </div>
                    </div>
                  </div>
                </nav>
              </header >
              {/* <Main/> */}
              <Routes>
              <Route path='/' exact element={<Main/>} />
              <Route path='/Sudoku' element={<Game/>} />
              {/* <Home />
              <About />
              <Journeys />
              <Skills />
              <Post />
              <Contact />
              <Footer />
              <Scrollup /> */}
              {/* <Main /> */}
              {/* <div className="cursor-follow" ref={el => cursor = el}></div> */}
              </Routes>
              </Router>
            </main>)
        }


      </div>
    </ThemeContext.Provider>



  )
}

export default App
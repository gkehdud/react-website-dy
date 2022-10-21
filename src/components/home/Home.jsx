import React, { useEffect } from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
// import SoccerPlayer from './soccerplayer1.json';
import programmer from './programmer.json';
import lottie from 'lottie-web';

const Home = () => {



  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.querySelector("#animation"),
      animationData: programmer,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        className: ".home__animation"
      }
    });
    return () => instance.destroy();
  }, []);

  return (
    <section className='home section' id='home'>
      
      <div className='home__container container grid' data-aos="fade-down">
        <div className='home__content grid'>

          <Social />
          {/* <span class="content"></span> */}
          {/* <div className="home__img"></div> */}
          {/* <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
            <fog attach="fog" args={['#202025', 0, 80]} />
            <Cloud count={8} radius={20} />
            <TrackballControls />
          </Canvas> */}
          <div className='home__image'>
            <div data-aos="zoom-in-up" data-aos-duration = "2000" id='animation'></div>
          </div>
          <div></div>
          <Data />

        </div>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home
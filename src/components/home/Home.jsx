import React, { useRef, useState, useMemo, useEffect } from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import SoccerPlayer from './soccerplayer1.json';
import lottie from 'lottie-web';
// import { render } from '@react-three/fiber';
// import { TagCloud } from 'react-tagcloud';

// import * as THREE from 'three'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Text, TrackballControls } from '@react-three/drei'
// import randomWord from 'random-words'


const Home = () => {


  // //To change the color of text randomly
  // var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
  // var random_color = colors[Math.floor(Math.random() * colors.length)];
  // document.querySelector('.content').style.color = random_color;

  // const TagCloud = require('TagCloud');

  // const container = '.tagcloud';
  // const texts = [
  //   '3D', 'TagCloud', 'JavaScript',
  //   'CSS3', 'Animation', 'Interactive',
  //   'Mouse', 'Rolling', 'Sphere',
  //   '6KB', 'v2.x',
  // ];
  // const options = {};

  // TagCloud(container, texts, options);





  // function Word({ children, ...props }) {
  //   const color = new THREE.Color()
  //   const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  //   const ref = useRef()
  //   const [hovered, setHovered] = useState(false)
  //   const over = (e) => (e.stopPropagation(), setHovered(true))
  //   const out = () => setHovered(false)
  //   // Change the mouse cursor on hover
  //   useEffect(() => {
  //     if (hovered) document.body.style.cursor = 'pointer'
  //     return () => (document.body.style.cursor = 'auto')
  //   }, [hovered])
  //   // Tie component to the render-loop
  //   useFrame(({ camera }) => {
  //     // Make text face the camera
  //     ref.current.quaternion.copy(camera.quaternion)
  //     // Animate font color
  //     ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
  //   })
  //   return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
  // }

  // function Cloud({ count = 4, radius = 20 }) {
  //   // Create a count x count random words with spherical distribution
  //   const words = useMemo(() => {
  //     const temp = []
  //     const spherical = new THREE.Spherical()
  //     const phiSpan = Math.PI / (count + 1)
  //     const thetaSpan = (Math.PI * 2) / count
  //     for (let i = 1; i < count + 1; i++)
  //       for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), randomWord()])
  //     return temp
  //   }, [count, radius])
  //   return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
  // }

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#soccerplayer"),
      animationData: SoccerPlayer,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        className: ".home__soccer"
      }
    });
  }, []);


  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <Social />
          {/* <span class="content"></span> */}
          {/* <div className="home__img"></div> */}
          {/* <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
            <fog attach="fog" args={['#202025', 0, 80]} />
            <Cloud count={8} radius={20} />
            <TrackballControls />
          </Canvas> */}
          
          <div id='soccerplayer'></div>
          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home
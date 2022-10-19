import React, { useEffect, useRef, useState } from 'react'
import underconstruction from './underconstruction.json';
import lottie from 'lottie-web';
import './post.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import Package from '../../assets/Package1.png'
import BuildingRun from '../../assets/QI_Logo.png'
import Project1 from './Project1';
import Project2 from './Project2';

const Post = () => {

  const [showProject1Modal, setShowProject1Modal] = useState(false);
  const [showProject2Modal, setShowProject2Modal] = useState(false);
  const [showProject3Modal, setShowProject3Modal] = useState(false);
  const [showProject4Modal, setShowProject4Modal] = useState(false);
  const [showProject5Modal, setShowProject5Modal] = useState(false);

  const [showSideDrawer, setshowSideDrawer] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const ref = useRef();

  //  FUNCTION TO HANDLE CLOSE ACTION ON SIDEDRAWER/MODAL
  const sideDrawerClosedHandler = () => {
    setshowSideDrawer(false);

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = 'unset';
  }

  // FUNCTION TO HANDLE OPEN ACTION ON SIDEDRAWER/MODAL
  const showSidebar = () => {
    setshowSideDrawer(true);

    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  }

  const showProject1 = () => {
    // setPauseActive((show) => !show)
    if(showSideDrawer) sideDrawerClosedHandler();
    else  showSidebar();
    setShowProject1Modal((show) => !show)
  };
  const showProject2 = () => {
    // setPauseActive((show) => !show)
    if(showSideDrawer) sideDrawerClosedHandler();
    else  showSidebar();
    setShowProject2Modal((show) => !show)
  };
  const showProject3 = () => {
    // setPauseActive((show) => !show)
    if(showSideDrawer) sideDrawerClosedHandler();
    else  showSidebar();
    setShowProject3Modal((show) => !show)
  };
  const showProject4 = () => {
    // setPauseActive((show) => !show)
    if(showSideDrawer) sideDrawerClosedHandler();
    else  showSidebar();
    setShowProject4Modal((show) => !show)
  };

  // useEffect(() => {
  //   const isClickedOutside = e =>{
  //     // console.log("isModal : "+isModal);
  //     console.log("showProject1Modal : "+showProject1Modal);
  //     // console.log("ModalRef.current  : "+ModalRef.current );
  //     // console.log("ModalRef.current.contains(e.target) : "+ModalRef.current.contains(e.target));

  //     if(showProject1Modal && ModalRef.current && !ModalRef.current.contains(e.target)){
  //       setShowProject1Modal(false);
  //       // console.log("isModal in if loop : "+isModal);
  //       console.log("showProject1Modal in if loop : "+showProject1Modal);
  //     }
  //   };
  //   document.body.addEventListener('click',isClickedOutside);
  //   return () => {document.body.removeEventListener('click',isClickedOutside)};
  // },[showProject1Modal]);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.querySelector("#animation2"),
      animationData: underconstruction,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        className: ".post__animation"
      }
    });
    return () => instance.destroy();
  }, []);

  return (
    <div className='post section' id="post">
      <div >
        <div className='post container'>
          <div data-aos="fade-down" className='post__name'>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle"></span>
          </div>
          <div data-aos="zoom-in-up" id='animation2'></div>
              <span className="section__subtitle">Under construction, Coming soon</span>


          {/* <div ref={ref}>
            {showProject1Modal && (<Project1 id='Modal1' closeModal={showProject1} />)}
          </div>
          <div ref={ref}>
            {showProject2Modal && (<Project2 id='Modal2' closeModal={showProject2} />)}
          </div>
          <div className='post__content grid'>
            <div className='post__image'>
              <div data-aos="zoom-in-up" id='animation2'></div>
              <span className="section__subtitle">Under construction, Coming soon</span>
            </div>
            <div className="post__data grid">
              <img className='post__image' src={Package} />
              <div className="post__description">
                <h3 className="post__title" onClick={showProject1}>Package management system</h3>
                <p className="post__story">This was my graduation project. Not that unique idea but I could learn how to connect with devices and platform. 
                Sometimes we lost our package it could be thief or some other reason. So we tried to make some safe devices in our mailbox.
                We used raspberry pi, arduino java mysql. that was fun</p>
                <h4 className="post__stack text-xs"></h4>
                <ui className="tags text-sm">
                  <li>java</li>
                  <li>arduino</li>
                  <li>raspberry pi</li>
                  <li>MySQL</li>
                </ui>
              </div>
            </div>


            <div data-aos="fade-down" className="post__data grid">
              <img className='post__image' src={BuildingRun} />
              <div className="post__description">
                <h3 className="post__title" onClick={showProject2}>Building Run</h3>
                <p className="post__story">Qualcomm institute, Using sensor and set alarm and giving users the route to get out of the building</p>
                <h4 className="post__stack text-xs"></h4>
                <ui className="tags text-sm">
                  <li>Android studio</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>Udoo board</li>
                </ui>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Post
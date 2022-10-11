import React, { useEffect } from 'react'
import underconstruction from './underconstruction.json';
import lottie from 'lottie-web';
import './post.css'

const Post = () => {

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
      <div data-aos="fade-down">
        <div className='post__container container'>
          <div className='post__name'>
            <h2 className="section__title">Post</h2>
            <span className="section__subtitle"></span>
          </div>

          <div className='post__content'>
            <div className='post__image'>
              <div data-aos="zoom-in-up" id='animation2'></div>
              <span className="section__subtitle">Under construction, Coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
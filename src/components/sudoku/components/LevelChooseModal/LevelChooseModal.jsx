import React, { useEffect, useRef } from "react";

import lottie from "lottie-web";
import easyLevelAnimationData from "../../assets/animations/Level/Level-easy.json";
import mediumLevelAnimationData from "../../assets/animations/Level/Level-mid.json";
import hardLevelAnimationData from "../../assets/animations/Level/Level-hard.json";

import "./levelChooseModal.css";

import Button from "../Button/Button.jsx";

const LevelChooseModal = ({
  closeModal,
  handleNewGame,
  easyMaxEmptyCells,
  mediumMaxEmptyCells,
  hardMaxEmptyCells
}) => {
  
  console.log("rendering....");
  const bodyContainer = useRef(null);

  // Use Effect for the animation
  useEffect(() => {
    let defaultOptions = { renderer: "svg", loop: true, autoplay: true };

    // Easy Level Animation
    let easyLevelAnimationContainer = document.getElementById(
      "easyLevelAnimation"
    );
    const easyLevelAnimation = lottie.loadAnimation({
      container: easyLevelAnimationContainer,
      animationData: easyLevelAnimationData,
      ...defaultOptions,
    });

    // Medium Level Animation
    let mediumLevelAnimationContainer = document.getElementById(
      "mediumLevelAnimation"
    );
    const mediumLevelAnimation = lottie.loadAnimation({
      container: mediumLevelAnimationContainer,
      animationData: mediumLevelAnimationData,
      ...defaultOptions,
    });

    // Hard Level Animation
    let hardLevelAnimationContainer = document.getElementById(
      "hardLevelAnimation"
    );
    const hardLevelAnimation = lottie.loadAnimation({
      container: hardLevelAnimationContainer,
      animationData: hardLevelAnimationData,
      ...defaultOptions,
    });

    bodyContainer.current.style.visibility = 'visible';

    return () => {
      easyLevelAnimation.destroy();
      mediumLevelAnimation.destroy();
      hardLevelAnimation.destroy();
    }; // Clean up function
  }, []);


  return (
    <div className="LevelChooseModal">
      <div className="level-container">
        <div className="level-close-btn-container">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="level-title">
          <h1>Level</h1>
        </div>
        <div className="Level-level-body" ref={bodyContainer}>
          <div className="Level-selection-container">
            <div className="Level easy" onClick={() => handleNewGame(easyMaxEmptyCells)}>
              <div
                className="animation-container-Level"
                id="easyLevelAnimation"
              ></div>
              <p>Easy</p>
            </div>

            <div
              className="Level medium"
              onClick={() => handleNewGame(mediumMaxEmptyCells)}
            >
              <div
                className="animation-container-Level"
                id="mediumLevelAnimation"
              ></div>
              <p>Medium</p>
            </div>

            <div className="Level hard" onClick={() => handleNewGame(hardMaxEmptyCells)}>
              <div
                className="animation-container-Level"
                id="hardLevelAnimation"
              ></div>
              <p>Hard</p>
            </div>
          </div>
        </div>
        
        <div className="level-footer">
          {/* <Button
            onClick={closeModal}
            buttonStyle="btn--primary--solid"
            text="Back"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default LevelChooseModal;

import React, { useEffect } from "react";
import lottie from "lottie-web";

import "./resultModal.css";

import Button from "../Button/Button.jsx";

const ResultModal = ({
  closeModal,
  handleRanking,
  movesTaken,
  hintsTaken,
  score,
  startTime,
  isPlayerWon,
  pressedSolve,
  gameMode,
  mediumMaxEmptyCells,
  hardMaxEmptyCells,
}) => {
  let gameModeName = "Easy";
  if(gameMode === mediumMaxEmptyCells) gameModeName = "Medium";
  else if(gameMode === hardMaxEmptyCells) gameModeName = "Hard";

  useEffect(() => {
    let animationData;
    if(isPlayerWon){
        if(pressedSolve){
            animationData = require("../../assets/animations/Level/Level-solution-result.json");
        }else{
            if(gameModeName == "Easy") animationData = require("../../assets/animations/Level/Level-easy-result.json");
            else if(gameModeName == "Medium") animationData = require("../../assets/animations/Level/Level-mid-result.json");
            else if(gameModeName == "Hard") animationData = require("../../assets/animations/Level/Level-hard-result.json");   
        }
    }else{
        animationData = require("../../assets/animations/Level/running2.json");
    }
    let container = document.getElementById("lottieAnimationResult");
    const lottieAnimation = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        className: "lottie-Result-class"
      }
    });

    return () => lottieAnimation.destroy(); // Clean up function
  }, [isPlayerWon, hintsTaken, pressedSolve]);

  return (
    <div className="resultModal" >
      <div className="result-container" >
        <div className="result-close-btn-container">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="result-title">
          {isPlayerWon ? <h2>Result</h2> : <h2>Sudoku</h2>}
        </div>
        <div className="result-body">
          <div className="animation-container" id="lottieAnimationResult"></div>
          {pressedSolve ? <h3>Solution</h3> : (isPlayerWon ? <h3>Good job!</h3> : <h3>Keep going!</h3>)}
          {/* <small>start time : {startTime.split("GMT")[0]}</small> */}
          {/* {isPlayerWon && <p>You Won !</p>}
          {pressedSolve && <p>Solution</p>} */}
          <p>Level : {gameModeName}</p>
          <p>Moves : {movesTaken}</p>
          <p>Hints : {hintsTaken}</p>
          {!pressedSolve && <p>Score : {score}</p>}
        </div>
        <div className="result-footer">
          {!pressedSolve && isPlayerWon && <Button
            onClick={handleRanking}
            text="Save"
          />}
        </div>
      </div>
    </div>
  );
};

export default ResultModal;

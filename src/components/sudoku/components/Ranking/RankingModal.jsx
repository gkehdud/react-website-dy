import React, { useEffect } from "react";
import lottie from "lottie-web";
import "./rankingModal.css";

import Button from "../Button/Button.jsx";

const RankingModal = ({
  closeModal,
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
  if (gameMode === mediumMaxEmptyCells) gameModeName = "Medium";
  else if (gameMode === hardMaxEmptyCells) gameModeName = "Hard";

  useEffect(() => {
    let animationData;
    animationData = require("../../assets/animations/Level/ranking.json");
    let container = document.getElementById("lottieRanking");
    const lottieAnimation = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        className: "lottie-Ranking-class"
      }
    });
    return () => lottieAnimation.destroy(); // Clean up function
  }, [isPlayerWon, hintsTaken, pressedSolve]);

  useEffect(() => {
    let animationData;
    animationData = require("../../assets/animations/Level/underconstruction.json");
    let container = document.getElementById("lottieUnderConstruction");
    const instance = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        className: "lottie-UnderConstruction-class"
      }
    });
    return () => instance.destroy();
  }, []);
  const Easydata = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ]
  const Middata = [
    { name: "Anommm", age: 19, gender: "Male" },
    { name: "Meghamm", age: 19, gender: "Female" },
    { name: "Subhammm", age: 25, gender: "Male" },
  ]
  const Harddata = [
    { name: "Anomhh", age: 19, gender: "Male" },
    { name: "Meghahh", age: 19, gender: "Female" },
    { name: "Subhamhh", age: 25, gender: "Male" },
  ]
  return (
    <div className="rankingModal" >
      <div className="ranking-container" >
        <div className="ranking-close-btn-container">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="ranking-body">
          <div className="animation-container" id="lottieRanking"></div>
          
        <div className="ranking-title">
          
        <h3>Ranking</h3>
        </div>
          {isPlayerWon && !pressedSolve && <p>Level : {gameModeName}</p>}
          {isPlayerWon && !pressedSolve && <p>Moves : {movesTaken}</p>}
          {isPlayerWon && !pressedSolve && <p>Hints : {hintsTaken}</p>}
          
          
          
          {isPlayerWon && !pressedSolve && <p>Score : {score}</p>}
          <div className="animation-container" id="lottieUnderConstruction"></div>
          
        </div>

      </div>
    </div>
  );
};

export default RankingModal;

import React, { useState, useEffect, useCallback } from 'react'
import './game.css'
import Grid from '../components/Grid/Grid'
import Button from '../components/Button/Button'
import useLocalStorage from '../useLocalStorage'
import ChoiceBoard from '../components/ChoiceBoard/ChoiceBoard'
import LevelChooseModal from '../components/LevelChooseModal/LevelChooseModal'
import NoHintModal from '../components/NoHintModal/NoHintModal'
import { checkBoard, animateElement, arrayDeepCopy, checkPlayerWon, createSudokuGrid, getHint, solveSudoku } from '../utility'
import { isFocusable } from '@testing-library/user-event/dist/utils'
import ResultModal from '../components/Result/ResultModal'
import RankingModal from '../components/Ranking/RankingModal'


const interval =
  (delay = 0) =>
    /** @param {() => void} callback */ callback =>
      useEffect(() => {
        const id = setInterval(callback, delay);

        return () => clearInterval(id);
      }, [callback]);

const use1Second = interval(1e4);

const Game = () => {

  const [DoneActive, setDoneActive] = useLocalStorage("DoneActive", false);
  const [PauseActive, setPauseActive] = useLocalStorage("PauseActive", true);
  const [initialSecond, setInitialSecond] = useLocalStorage("initialSecond", 1000);

  const easyMaxEmptyCells = 30;
  const mediumMaxEmptyCells = 40;
  const hardMaxEmptyCells = 50;

  const [grid, setGrid] = useLocalStorage("currentGrid", null);
  const [startingGrid, setStartingGrid] = useLocalStorage("startingGrid", null);
  const [clickValue, setClickValue] = useLocalStorage("clickValue", 1);
  const [gameMode, setGameMode] = useLocalStorage("gameModes", mediumMaxEmptyCells);


  const [movesTaken, setMovesTaken] = useLocalStorage("movesTaken", 0);
  const [hintsTaken, setHintsTaken] = useLocalStorage("hintsTaken", 0);
  const [isPlayerWon, setIsPlayerWon] = useLocalStorage("playerWon", false);
  const [pressedSolve, setPressedSolve] = useLocalStorage("pressedSolve", false);

  const [startTime, setStartTime] = useLocalStorage("startTime", () => Date().toLocaleString());

  // Logic for modal
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [showNoHintModal, setShowNoHintModal] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [PauseActiveModal, setPauseActiveModal] = useState(false);
  const [showLevelChooseModal, setShowLevelChooseModal] = useState(true);
  const [showRankingModal, setShowRankingModal] = useState(false);


  console.log(" isPlayerWon : " + isPlayerWon + " PauseActive : " + PauseActive + " initialSecond : " + initialSecond)
  const tick = useCallback(
    () => (PauseActive ? undefined : setInitialSecond(initialSecond => initialSecond - 10)),
    [PauseActive]
  );
  const start = () => setPauseActive(false);
  const pause = () => setPauseActive(true);
  const reset = () => setInitialSecond(1000);
  const stop = () => {
    pause();
    reset();
  };

  use1Second((!PauseActive && initialSecond > 300 ? tick : pause));

  const handleNewGame = (maxEmptyCellsCount) => {
    // Waiting for the function to return the grid
    let newSudokuGrid = createSudokuGrid(maxEmptyCellsCount);
    setStartingGrid(arrayDeepCopy(newSudokuGrid));
    setGrid(arrayDeepCopy(newSudokuGrid));
    // Setting the game mode with maxEmptyCellsCount
    setGameMode(maxEmptyCellsCount);
    // Reseting the values
    setMovesTaken(0);
    setHintsTaken(0);
    setIsPlayerWon(false);
    setPressedSolve(false);
    setStartTime(() => Date().toLocaleString());
    setInitialSecond(1000);
    setPauseActive(false);
    // Closing the difficulty modal and also setting the isLoading to false
    setShowLevelChooseModal((show) => !show);

  };
  const handleNewGameClose = () => {
    setShowLevelChooseModal((show) => !show);
    setPauseActive(false);
  }
  const handleNewGameButton = () => {
    setShowLevelChooseModal((show) => !show);
    setPauseActive(true);
  }
  const handleSolve = () => {
    if(isPlayerWon) return;

    let solvedBoard = arrayDeepCopy(grid);
    let solvedStatus = solveSudoku(solvedBoard);
    if (solvedStatus === false) {
      setShowNoHintModal((show) => !show);
      return;
    }

    let newHints = 0;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j].value === 0) {
          newHints++;
          solvedBoard[i][j].isHinted = true;
          solvedBoard[i][j].isModifiable = false;
        }
      }
    }
    setHintsTaken((hints) => hints + newHints);
    setIsPlayerWon(true);
    setPauseActive(true);
    setShowResult(true);
    setPressedSolve(true);
    setGrid(solvedBoard);
  };
  const handleHint = () => {
    // Checking if player has won
    if (isPlayerWon) return;
    // Getting hint
    let hintResponse = getHint(grid);

    // Checking if the grid cannot be solved
    if (hintResponse.solvedStatus === false) {
      setShowNoHintModal((show) => !show);
      return;
    }

    // setting the result board
    setGrid(hintResponse.board);

    // Adding hint count
    setHintsTaken((hints) => hints + 1);
    { initialSecond > 350 ? handleHintScore() : setInitialSecond(300) }
    // Checking if the player has won
    let playerWon = checkPlayerWon(hintResponse.board);
    if (playerWon) {
      setIsPlayerWon(true);
      setShowResult(true);
      setPauseActive(true);
    }
  };
  const [HintScore, setHintScore] = useState("");

  const handleHintScore = () => {
    setInitialSecond((seconds) => seconds - 50);
    setHintScore(-50);
    setTimeout(() => {
      setHintScore("");
    }, 200);

  }
  const handleCellClick = (row, column, isModifiable) => {
    if (!isModifiable) {
      animateElement(".grid-table", "headShake");
      return;
    }

    // moves registered when the value is not 0
    if (clickValue !== 0) setMovesTaken((moves) => moves + 1);

    let newGrid = arrayDeepCopy(grid);
    newGrid[row][column].value = clickValue;

    // Marking the node valid or invalid depending on the grid
    checkBoard(newGrid);

    // Checking if the player has won
    let playerWon = checkPlayerWon(newGrid);
    if (playerWon) {
      setIsPlayerWon(true);
      setShowResult(true);
      setPauseActive(true);
    }

    // setting the value to the grid and also to the local storage
    setGrid(newGrid);
  };
  const handleClearBoard = () => {
    setIsPlayerWon(false);
    setPauseActive(false);
    setGrid(arrayDeepCopy(startingGrid));
  };
  const handleSolutionClose = () => {
    setShowResult((show) => !show)
    { isPlayerWon && setPauseActive(true); }
  };
  const handleSolution = () => {
    setShowResult((show) => !show)
    setShowLevelChooseModal((show) => !show);
    setPauseActive(false);
  };
  const handleRanking = () => {
    setShowRankingModal((show) => !show)
  };
  if (grid == null && startingGrid == null) handleNewGame(gameMode);

  return (
    <div className="Game">

      {showLevelChooseModal && (
        <LevelChooseModal
          closeModal={handleNewGameClose}
          handleNewGame={handleNewGame}
          easyMaxEmptyCells={easyMaxEmptyCells}
          mediumMaxEmptyCells={mediumMaxEmptyCells}
          hardMaxEmptyCells={hardMaxEmptyCells}
        />
      )}
      {showNoHintModal && (
        <NoHintModal
          closeModal={() => setShowNoHintModal((show) => !show)}
        />
      )}
      {showResult && (
        <ResultModal
          closeModal={handleSolutionClose}
          handleRanking={handleRanking}
          movesTaken={movesTaken}
          hintsTaken={hintsTaken}
          score={initialSecond}
          startTime={startTime}
          isPlayerWon={isPlayerWon}
          pressedSolve={pressedSolve}
          gameMode={gameMode}
          mediumMaxEmptyCells={mediumMaxEmptyCells}
          hardMaxEmptyCells={hardMaxEmptyCells}
        />
      )}
      {showRankingModal && (
        <RankingModal
          closeModal={handleRanking}
          movesTaken={movesTaken}
          hintsTaken={hintsTaken}
          score={initialSecond}
          startTime={startTime}
          isPlayerWon={isPlayerWon}
          pressedSolve={pressedSolve}
          gameMode={gameMode}
          mediumMaxEmptyCells={mediumMaxEmptyCells}
          hardMaxEmptyCells={hardMaxEmptyCells}
        />
      )}
      <h1 onClick={() => setShowResult((show) => !show)} className="main-title">
        Sudoku
      </h1>
      {/* <Score
      setInitialSecond={setInitialSecond}
        initialSecond={initialSecond}
        PauseActive={PauseActive}
        DoneActive={DoneActive}
      /> */}
      <div className="counter-container">
        <div className="score-trophy"><i onClick={() => setShowRankingModal((state) => !state)} class="uil uil-trophy"></i></div>
        <p className="score-title" id="counter">Score : {initialSecond}
          <p className='score-minus'>{HintScore}</p></p>
        {!isPlayerWon &&
          <div className="score-pause" ><i onClick={() => setPauseActive((state) => !state)} class={PauseActive ? "uil uil-play" : "uil uil-pause"}></i></div>
        }

      </div>
      <Grid handleCellClick={handleCellClick} grid={grid} />
      <ChoiceBoard setClickValue={setClickValue} selected={clickValue} />

      <div className="action-container">

        <Button
          disabled={isPlayerWon || pressedSolve || PauseActive}
          onClick={handleClearBoard}
          buttonStyle = {isPlayerWon || pressedSolve || PauseActive  ? "disabled" : ""}
          text="Clear"
        />
        <Button
          disabled={isPlayerWon || pressedSolve || PauseActive}
          onClick={handleHint}
          buttonStyle = {isPlayerWon || pressedSolve || PauseActive  ? "disabled" : ""}
          text="Hint"
        />
        <Button
          disabled={isPlayerWon || pressedSolve || PauseActive}
          onClick={handleSolve}
          buttonStyle = {isPlayerWon || pressedSolve || PauseActive  ? "disabled" : ""}
          text="Solve"
        />
        <Button
          onClick={handleNewGameButton}
          text="New Game"
        />
      </div>
    </div>
  )
}

export default Game
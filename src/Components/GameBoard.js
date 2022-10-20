import React, { useState } from "react";
import produce from "immer";

const GameBoard = ({
  grid,
  numCols,
  setGrid,
  player,
  setUser,
  checkWin,
  setRunning,
  switchClass,
  myTurn,
  setMyTurn,
  computerTurn,
  setComputerTurn,
  available,

  running,
}) => {
  const [computerGuess1, setComputerGuess1] = useState(
    Math.floor(Math.random() * 3)
  );
  const [computerGuess2, setComputerGuess2] = useState(
    Math.floor(Math.random() * 3)
  );
  let check = false;


  function handleClick(i, k) {
    if (grid[i][k] === "") {
      newGrid = produce(grid, (gridCopy) => {
        gridCopy[i][k] = "X";
      });
      setGrid(newGrid);
      setTimeout(() => {
        checkWin(newGrid);
        setMyTurn(false);
      }, 400);
    }
  }

  function checkGuess() {
    for (let i = 0; i < available.length; i++) {
      let guess = [computerGuess1, computerGuess2];
      if (available[i][0] === guess[0] && available[i][1] === guess[1]) {
        check = true;
      }
    }
  }

  function computerTurn(grid) {
    checkGuess();
    if (!myTurn) {
      debugger;
      const secondGrid = produce(grid, (gridCopy) => {
        gridCopy[computerGuess1][computerGuess2] = "O";
      });

      setTimeout(() => {
        setGrid(secondGrid);
        checkWin(secondGrid);
      }, 300);
    } else if (!check) {
    }
  }
  let newGrid;

  return (
    <div
      className="boardContainer"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, auto)`,
      }}
    >
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <div
            className="singleBox"
            key={i - k}
            onClick={() => {
              setMyTurn(true);
              handleClick(i, k);
              setRunning(true);
              setTimeout(() => {
                computerTurn(newGrid);
              }, 500);
            }}
            style={{
              backgroundColor: "gray",
              border: "1px solid #595959",
            }}
          >
            {grid[i][k]}
          </div>
        ))
      )}
    </div>
  );
};

export default GameBoard;

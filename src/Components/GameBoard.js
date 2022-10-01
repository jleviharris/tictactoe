import React, { useState } from "react";
import produce from "immer";

const GameBoard = ({
  grid,
  numCols,
  numRows,
  setGrid,
  player,
  setUser,
  checkWin,
  running,
  setRunning,
}) => {
  function handleClick(i, k) {
    if (grid[i][k] === "") {
      const newGrid = produce(grid, (gridCopy) => {
        gridCopy[i][k] = player;
      });
      setGrid(newGrid);
      setUser();
      setTimeout(() => {
        checkWin(newGrid);
      }, 300);
    }
  }
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
              handleClick(i, k);

              setRunning(true);
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

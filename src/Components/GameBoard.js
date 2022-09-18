import React from "react";

const GameBoard = ({ grid, numCols, numRows }) => {
  function handleClick() {}
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
            }}
            style={{
              //   width: auto,
              //   height: 22,
              backgroundColor: "#31cc5f",
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

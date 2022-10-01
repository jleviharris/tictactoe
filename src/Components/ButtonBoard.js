import React, { useEffect, useState } from "react";

const ButtonBoard = ({ player, setPlayer, grid }) => {
  const [BtnClass, setButtonClass] = useState("buttonBoard");
  const run = () => {
    console.log(grid);
  };
  return (
    <div className={BtnClass}>
      <div>Please pick "X" or "O"</div>
      <button
        onClick={() => {
          setPlayer("X");
          setButtonClass("");
        }}
      >
        X
      </button>
      <button
        onClick={() => {
          setPlayer("O");
        }}
      >
        O
      </button>
      <button onClick={run}>jfkdls</button>
    </div>
  );
};

export default ButtonBoard;

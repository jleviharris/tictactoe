import React, { useEffect, useState } from "react";

const ButtonBoard = ({ player, setPlayer }) => {
  return (
    <div className="buttonBoard">
      <div>Please pick "X" or "O"</div>
      <button onClick={()=> {setPlayer("X")}}>X</button>
      <button onClick={()=> {setPlayer("O")}}>O</button>
    </div>
  );
};

export default ButtonBoard;

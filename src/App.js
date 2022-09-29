import "./App.css";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
import ButtonBoard from "./Components/ButtonBoard";

function App() {
  const [player, setPlayer] = useState("X");

  const setUser = () => {
    if (player === "X") {
      setPlayer("O");
    } else if (player === "O") {
      setPlayer("X");
    }
  };
  const numCols = 3;
  const numRows = 3;

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => ""));
    }
    return rows;
  });

  return (
    <div className="App">
      <ButtonBoard setPlayer={setPlayer} player={player} />
      <GameBoard
        numCols={numCols}
        numRows={numRows}
        grid={grid}
        setGrid={setGrid}
        player={player}
        setUser={setUser}
      />
    </div>
  );
}

export default App;

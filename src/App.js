import "./App.css";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";

function App() {
  const numCols = 3;
  const numRows = 3;

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols)));
    }
    return rows;
  });

  return (
    <div className="App">
      <GameBoard numCols={numCols} numRows={numRows} grid={grid} />
    </div>
  );
}

export default App;

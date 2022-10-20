import "./App.css";
import GameBoard from "./Components/GameBoard";
import { useState, useEffect } from "react";
import produce from "immer";

function App() {
  const [running, setRunning] = useState(false);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [xScoreClass, setXScoreClass] = useState("xScoreOn");
  const [oScoreClass, setOScoreClass] = useState("oScoreOff");
  const [player, setPlayer] = useState("X");
  const [myTurn, setMyTurn] = useState(false);
  const [computerTurn, setComputerTurn] = useState(false);
  let players = ["X", "O"];

  const [available, setAvailable] = useState(null);
  const numCols = 3;
  const numRows = 3;

  useEffect(() => {
    if (!available) {
      checkComp();
    }
  }, []);

  const checkComp = () => {
    let newArray = [];
    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 3; k++) {
        if (grid[i][k] === "") {
          newArray.push([i, k]);
        }
      }
    }
    setAvailable(newArray);
  };

  const resetBoard = () => {
    const newGrid = produce(grid, (gridCopy) => {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          gridCopy[i][j] = "";
        }
      }
    });
    setGrid(newGrid);
  };
  const refreshPage = () => {
    window.location.reload(false);
  };

  // function equals3(a, b, c) {
  //   return a == b && b == c && a != '';
  // }

  // function checkWinner() {
  //   let winner = null;

  //   // horizontal
  //   for (let i = 0; i < 3; i++) {
  //     if (equals3(board[i][0], board[i][1], board[i][2])) {
  //       winner = board[i][0];
  //     }
  //   }

  //   // Vertical
  //   for (let i = 0; i < 3; i++) {
  //     if (equals3(board[0][i], board[1][i], board[2][i])) {
  //       winner = board[0][i];
  //     }
  //   }

  //   // Diagonal
  //   if (equals3(board[0][0], board[1][1], board[2][2])) {
  //     winner = board[0][0];
  //   }
  //   if (equals3(board[2][0], board[1][1], board[0][2])) {
  //     winner = board[2][0];
  //   }

  //   if (winner == null && available.length == 0) {
  //     return 'tie';
  //   } else {
  //     return winner;
  //   }
  // }

  // function nextTurn() {
  //   let index = floor(random(available.length));
  //   let spot = available.splice(index, 1)[0];
  //   let i = spot[0];
  //   let j = spot[1];
  //   board[i][j] = players[currentPlayer];
  //   currentPlayer = (currentPlayer + 1) % players.length;
  // }

  const checkWin = (g) => {
    const nums = {
      one: g[0][0],
      two: g[0][1],
      three: g[0][2],
      four: g[1][0],
      five: g[1][1],
      six: g[1][2],
      seven: g[2][0],
      eight: g[2][1],
      nine: g[2][2],
    };
    if (running) {
      if (nums.one === nums.two && nums.three === nums.one && nums.one !== "") {
        if (nums.one === "X") {
          setXScore(xScore + 1);
          alert("Player X won");
          resetBoard();
        } else if (nums.one === "O") {
          setOScore(oScore + 1);
          alert("Player O won");
          resetBoard();
        }
      } else if (
        nums.one === nums.five &&
        nums.nine === nums.one &&
        nums.one !== ""
      ) {
        if (nums.one === "X") {
          setXScore(xScore + 1);
          alert("Player X won");
          resetBoard();
        } else if (nums.one === "O") {
          setOScore(oScore + 1);
          alert("Player O won");
          resetBoard();
        }
      } else if (
        nums.one === nums.four &&
        nums.seven === nums.one &&
        nums.one !== ""
      ) {
        if (nums.one === "X") {
          setXScore(xScore + 1);
          alert("Player X won");
          resetBoard();
        } else if (nums.one === "O") {
          setOScore(oScore + 1);
          alert("Player O won");
          resetBoard();
        }
      } else if (
        nums.two === nums.five &&
        nums.eight === nums.two &&
        nums.two !== ""
      ) {
        if (nums.two === "X") {
          setXScore(xScore + 1);
          alert("Player X won");
          resetBoard();
        } else if (nums.two === "O") {
          setOScore(oScore + 1);
          alert("Player O won");
          resetBoard();
        }
      } else if (
        nums.three === nums.five &&
        nums.seven === nums.three &&
        nums.three !== ""
      ) {
        if (nums.three === "X") {
          setXScore(xScore + 1);
          alert("Player X won");
          resetBoard();
        } else if (nums.three === "O") {
          setOScore(oScore + 1);
          alert("Player O won");
          resetBoard();
        }
      } else if (
        nums.three === nums.six &&
        nums.nine === nums.three &&
        nums.three !== ""
      ) {
        if (nums.three === "X") {
          setXScore(xScore + 1);
          alert("Player X won");
          resetBoard();
        } else if (nums.three === "O") {
          setOScore(oScore + 1);
          alert("Player O won");
          resetBoard();
        }
      } else if (
        nums.four === nums.five &&
        nums.six === nums.four &&
        nums.four !== ""
      ) {
        if (nums.five === "X") {
          setXScore(xScore + 1);
          alert("Player X won");
          resetBoard();
        } else if (nums.five === "O") {
          setOScore(oScore + 1);
          alert("Player O won");
          resetBoard();
        }
      } else if (
        nums.seven === nums.eight &&
        nums.nine === nums.seven &&
        nums.seven !== ""
      ) {
        if (nums.eight === "X") {
          setXScore(xScore + 1);
          alert("Player X won");
          resetBoard();
        } else if (nums.eight === "O") {
          setOScore(oScore + 1);
          alert("Player O won");
          resetBoard();
        }
      }
    }
  };

  const switchClass = () => {
    if (xScoreClass === "xScoreOn") {
      setXScoreClass("xScoreOff");
      setOScoreClass("oScoreOn");
    } else if (xScoreClass === "xScoreOff") {
      setXScoreClass("xScoreOn");
      setOScoreClass("oScoreOff");
    }
  };

  const setUser = () => {
    if (player === "X") {
      setPlayer("O");
    } else if (player === "O") {
      setPlayer("X");
    }
  };

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => ""));
    }
    return rows;
  });

  return (
    <div className="App">
      <div className="box">
        <div className="scores">
          <div className={xScoreClass}>X: {xScore}</div>
          <div className="gameBtns">
            <button
              onClick={() => {
                resetBoard();
              }}
            >
              Clear Board
            </button>
            <button
              className="reset"
              onClick={() => {
                refreshPage();
              }}
            >
              Reset
            </button>
          </div>
          <div className={oScoreClass}>O: {oScore}</div>
        </div>
        <GameBoard
          numCols={numCols}
          grid={grid}
          player={player}
          setUser={setUser}
          checkWin={checkWin}
          setRunning={setRunning}
          running={running}
          switchClass={switchClass}
          setGrid={setGrid}
          computerTurn={computerTurn}
          setComputerTurn={setComputerTurn}
          myTurn={myTurn}
          setMyTurn={setMyTurn}
          available={available}
        />
      </div>
    </div>
  );
}

export default App;

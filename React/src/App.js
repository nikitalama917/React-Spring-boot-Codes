import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Square from "./Square";

const PATTERN_LIST = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App = () => {
  const [board, setboard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const chooseSquare = (square) => {
    const latestList = board.map((val, index) => {
      if (index == square && val == "") {
        return player;
      }

      return val;
    })
    setboard(latestList);

    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
    checkWin(latestList);
  };

  const checkWin = (latestList) => {
    PATTERN_LIST.forEach((pattern) =>{
      const [a,b,c] = pattern;
      const firstMatch =  latestList[a] === latestList[b] ? latestList[a]: "";
      const secondMatch = firstMatch === latestList[c];
      if (secondMatch && (latestList[a] && latestList[b] && latestList[c])) {
        alert(latestList[a] + " is the Winner");
      }
    })
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

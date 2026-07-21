import Square from "./square.jsx";
import "./App.css";
import { useState } from "react";

export default function Board({ XTurn, square, onPlay }) {
  // const winner = calculateWinner(square);
  // const [winnerBoxes, setWinnerBoxes] = useState(Array(3).fill(undefined));

  const result = calculateWinner(square);
  const winner = result?.winner;
  const winnerBoxes = result?.boxes || [];

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (XTurn ? "X" : "O");
  }

  function handleClick(i) {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice();
    if (XTurn) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    onPlay(nextSquare);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        // setWinnerBoxes([a, b, c]);
        // return squares[a];
        return {
          winner: squares[a],
          boxes: [a, b, c],
        };
      }
    }
    return null;
  }

  function BoxColor(id) {
    if (winnerBoxes) {
      if (
        id == winnerBoxes[0] ||
        id == winnerBoxes[1] ||
        id == winnerBoxes[2]
      ) {
        return "border-green-500 bg-green-400";
      }
    }
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="flex flex-col gap-px">
        <div className="board-row flex justify-center gap-px">
          <Square
            id={0}
            borderFun={BoxColor}
            value={square[0]}
            onSquareClick={() => handleClick(0)}
          />
          <Square
            id={1}
            borderFun={BoxColor}
            value={square[1]}
            onSquareClick={() => handleClick(1)}
          />
          <Square
            id={2}
            borderFun={BoxColor}
            value={square[2]}
            onSquareClick={() => handleClick(2)}
          />
        </div>
        <div className="board-row flex justify-center gap-px">
          <Square
            id={3}
            borderFun={BoxColor}
            value={square[3]}
            onSquareClick={() => handleClick(3)}
          />
          <Square
            id={4}
            borderFun={BoxColor}
            value={square[4]}
            onSquareClick={() => handleClick(4)}
          />
          <Square
            id={5}
            borderFun={BoxColor}
            value={square[5]}
            onSquareClick={() => handleClick(5)}
          />
        </div>

        <div className="board-row flex justify-center gap-px">
          <Square
            id={6}
            borderFun={BoxColor}
            value={square[6]}
            onSquareClick={() => handleClick(6)}
          />
          <Square
            id={7}
            borderFun={BoxColor}
            value={square[7]}
            onSquareClick={() => handleClick(7)}
          />
          <Square
            id={8}
            borderFun={BoxColor}
            value={square[8]}
            onSquareClick={() => handleClick(8)}
          />
        </div>
      </div>
    </>
  );
}

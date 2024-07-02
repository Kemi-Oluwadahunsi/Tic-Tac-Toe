import { useState, useEffect } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null);
  const [showGameOver, setShowGameOver] = useState(false);

  useEffect(() => {
    if (winner) {
      const timer = setTimeout(() => setShowGameOver(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [winner]);

  const handleClick = (index) => {
    if (squares[index] || winner) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const result = calculateWinner(newSquares);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
    }
  };

  const calculateWinner = (squares) => {
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
        return { winner: squares[a], line: i };
      }
    }

    return null;
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setWinningLine(null);
    setShowGameOver(false);
  };

  const getStrikeLineClass = (line) => {
    switch (line) {
      case 0:
        return "strike-row-1";
      case 1:
        return "strike-row-2";
      case 2:
        return "strike-row-3";
      case 3:
        return "strike-col-1";
      case 4:
        return "strike-col-2";
      case 5:
        return "strike-col-3";
      case 6:
        return "strike-diag-1";
      case 7:
        return "strike-diag-2";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col gap-8">
        <div className="text-lg text-black font-bold">
          Next player:{" "}
          <span className="text-[#3f0c0b] text-[1.5rem]">
            {xIsNext ? "X" : "O"}
          </span>
        </div>
        <div className="text-lg text-black font-bold">
          Winner:{" "}
          <span className="text-[#f4efec] text-[1.5rem]">
            {winner || "None"}
          </span>
        </div>
        <button
          className=" px-8 py-2 bg-[#734234] text-white font-semibold text-lg rounded-md shadow-lg hover:bg-[#d38c4c] transition"
          onClick={resetGame}
        >
          Reset
        </button>
      </div>

      <div className="boardBox relative mt-8 bg-gray-100 flex flex-col items-center border-4 border-[rgba(80,48,37,0.7)] rounded-lg shadow-xl">
        {winningLine !== null && (
          <div
            className={`strike-line strike-visible ${getStrikeLineClass(
              winningLine
            )}`}
          ></div>
        )}
        {showGameOver && (
          <div className="absolute top-1/2 left-1/2 w-full bg-black bg-opacity-95 text-lg text-white rounded-lg transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col gap-4 items-center justify-center px-[2rem] py-8">
            <h2 className="text-[2rem] w-full text-center">Game Over</h2>
            <p>
              Winner: <span className="font-bold text-[1.5rem]">{winner}</span>
            </p>
            <button
              onClick={resetGame}
              className="mt-2 px-4 py-2 bg-[#734234] text-white rounded-lg font-semibold hover:bg-[#d38c4c] transition"
            >
              New Game
            </button>
          </div>
        )}
        <div className="board-row flex">
          <Square
            value={squares[0]}
            onClick={() => handleClick(0)}
            disabled={!!winner}
          />
          <Square
            value={squares[1]}
            onClick={() => handleClick(1)}
            disabled={!!winner}
          />
          <Square
            value={squares[2]}
            onClick={() => handleClick(2)}
            disabled={!!winner}
          />
        </div>
        <div className="board-row flex">
          <Square
            value={squares[3]}
            onClick={() => handleClick(3)}
            disabled={!!winner}
          />
          <Square
            value={squares[4]}
            onClick={() => handleClick(4)}
            disabled={!!winner}
          />
          <Square
            value={squares[5]}
            onClick={() => handleClick(5)}
            disabled={!!winner}
          />
        </div>
        <div className="board-row flex">
          <Square
            value={squares[6]}
            onClick={() => handleClick(6)}
            disabled={!!winner}
          />
          <Square
            value={squares[7]}
            onClick={() => handleClick(7)}
            disabled={!!winner}
          />
          <Square
            value={squares[8]}
            onClick={() => handleClick(8)}
            disabled={!!winner}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;

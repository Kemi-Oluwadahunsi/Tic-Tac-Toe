import Board from "./Board";


const Game = () => {
  return (
    <div className="game h-screen w-screen bg-[#cea088] flex pt-[5rem] justify-center">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default Game
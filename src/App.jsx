import { useState } from 'react'
import './App.css'
import Square from "./square.jsx"
import Board from "./Board.jsx"

function App() {
  const [XTurn,setXTurn] = useState(true)
  // const [square,setSquare] = useState(Array(9).fill(null));
  const [History,setHistory] = useState([Array(9).fill(null)]);
  const [CurrentMove,setCurrentMove] = useState(0);
  const currentSquares = History[CurrentMove];


  function handlePlay(currentSquares){
    const NextHistory = [...History.slice(0,CurrentMove+1),currentSquares];
    setHistory(NextHistory);
    setCurrentMove(NextHistory.length-1);
    setXTurn(!XTurn);
  }

  function jumpTo(NextMove){
    
    setCurrentMove(NextMove);
    setXTurn(NextMove % 2 ===0);
    if(NextMove==0){
      setHistory([Array(9).fill(null)]);
    }

  }

  const moves=History.map((squares,move)=>{
    let desc;
    if(move>0){
      desc = "go to move #" + move;
    }else{
      desc = "Reset Game";
    }

    return (
      <li key={move} className=''>
        <button onClick={()=> jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game grid grid-cols-[2fr_2fr] min-h-screen place-items-center">
      <div className="game-board justify-self-end">
        <Board XTurn={XTurn} square={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info text-2xl list-inside list-disc ">
        <ol className="[&_li:first-child]: font-bold rounded-md border-3 p-1.5 text-red-500 inline-block mt-1 hover:rounded-md hover:bg-red-500 hover:scale-105 hover:text-black hover:border-red-500">{moves}</ol>
      </div>
    </div>
  );
}

export default App

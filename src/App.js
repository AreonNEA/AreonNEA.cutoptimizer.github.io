import React, { useState } from 'react';
import CutInput from './CutInput';
import CutTable from './CutTable';
import BoardDisplay from './BoardDisplay';
import './App.css';

function App() {
  const [cuts, setCuts] = useState([]);
  const [boards, setBoards] = useState([]);
  const boardWidth = 3630;
  const boardHeight = 1830;

  const addCut = (cut) => {
    setCuts([...cuts, cut]);
  };

  const editCut = (index, newCut) => {
    const newCuts = [...cuts];
    newCuts[index] = newCut;
    setCuts(newCuts);
  };

  const deleteCut = (index) => {
    setCuts(cuts.filter((_, i) => i !== index));
  };

  const placeCutsOnBoards = () => {
 
    const sortedCuts = [...cuts].sort((a, b) => (b.width * b.height) - (a.width * a.height));
  
    const newBoards = [];
    let currentBoard = createNewBoard();
    newBoards.push(currentBoard);
  
    sortedCuts.forEach(cut => {
      for (let i = 0; i < cut.quantity; i++) {
        if (!placeCutOnBoard(currentBoard, cut)) {
          currentBoard = createNewBoard();
          newBoards.push(currentBoard);
          placeCutOnBoard(currentBoard, cut);
        }
      }
    });
  
    setBoards(newBoards);
  };
  

  const createNewBoard = () => {
    return {
      width: boardWidth,
      height: boardHeight,
      freeSpaces: [{ x: 0, y: 0, width: boardWidth, height: boardHeight }],
      cuts: []
    };
  };

  const placeCutOnBoard = (board, cut) => {
    for (let i = 0; i < board.freeSpaces.length; i++) {
      let space = board.freeSpaces[i];
      if (space.width >= cut.width && space.height >= cut.height) {
        board.cuts.push({ ...cut, x: space.x, y: space.y });
        splitFreeSpace(board, space, cut);
        return true;
      }
    }
    return false;
  };

  const splitFreeSpace = (board, space, cut) => {
    const index = board.freeSpaces.indexOf(space);
    board.freeSpaces.splice(index, 1);

    const newSpaces = [];

    if (space.width > cut.width) {
      newSpaces.push({
        x: space.x + cut.width,
        y: space.y,
        width: space.width - cut.width,
        height: cut.height
      });
    }

    if (space.height > cut.height) {
      newSpaces.push({
        x: space.x,
        y: space.y + cut.height,
        width: space.width,
        height: space.height - cut.height
      });
    }

    board.freeSpaces.push(...newSpaces);
  };

  return (
    <div className='table'>
      <h1>Оптимизатор раскроя</h1>
      <CutInput onAdd={addCut} />
      <CutTable cuts={cuts} onEdit={editCut} onDelete={deleteCut} />
      <button onClick={placeCutsOnBoards}>Рассчитать раскрой</button>
      <BoardDisplay boards={boards} setBoards={setBoards} boardWidth={boardWidth} boardHeight={boardHeight} />
    </div>
  );
}

export default App;

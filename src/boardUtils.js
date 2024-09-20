export function removeCut(boards, setBoards, setBoardCount, cutToRemove, setTotalCuts) {
  const lastBoardIndex = boards.length - 1;
  const lastBoard = boards[lastBoardIndex];
  if (!lastBoard) return;  

  const updatedCuts = [...lastBoard.cuts];
  const cutIndex = updatedCuts
    .slice()  
    .reverse() 
    .findIndex(cut => cut.width === cutToRemove.width && cut.height === cutToRemove.height);

  if (cutIndex !== -1) {
    const actualIndex = updatedCuts.length - 1 - cutIndex; 
    updatedCuts.splice(actualIndex, 1);  
    setTotalCuts(prevTotalCuts => prevTotalCuts - 1); 
  }

  const updatedBoards = [...boards];
  if (updatedCuts.length === 0) {
    updatedBoards.splice(lastBoardIndex, 1); 
  } else {
    updatedBoards[lastBoardIndex] = {
      ...lastBoard,
      cuts: updatedCuts
    };
  }

  setBoards(updatedBoards);
  setBoardCount(updatedBoards.length);  
}

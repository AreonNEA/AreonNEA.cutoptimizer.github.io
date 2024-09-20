 
export function removeCut(boards, setBoards, cutToRemove) {
    console.log('Boards before removing:', boards);
    const lastBoardIndex = boards.length - 1;
    const lastBoard = boards[lastBoardIndex];
    if (!lastBoard) return;  
  
    const updatedCuts = [...lastBoard.cuts];
    const cutIndex = updatedCuts
      .slice()  
      .reverse()  
      .findIndex(cut => cut.width === cutToRemove.width && cut.height === cutToRemove.height);
  
    if (cutIndex !== -1) {
      updatedCuts.splice(updatedCuts.length - 1 - cutIndex, 1);
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
  
    console.log('Updated boards:', updatedBoards);
    setBoards(updatedBoards);
  }
  
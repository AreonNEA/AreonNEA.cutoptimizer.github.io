import './BoardDisplay.css';

export function removeCut(boards, setBoards, cutToRemove) {
  console.log('Boards before removing:', boards);

 
  const lastBoardIndex = boards.length - 1;
  const lastBoard = boards[lastBoardIndex];

  if (!lastBoard) {
    return;  
  }

 
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

function BoardDisplay({ boards, setBoards, boardWidth, boardHeight }) {
  return (
    <div className='tablePosition'>
      {boards.map((board, boardIndex) => (
        <div key={boardIndex} className='center' style={{ margin: "0 auto" }}>
          <h3>Доска {boardIndex + 1}</h3>
          <div
            style={{
              position: 'relative',
              width: `${boardWidth / 10}px`,
              height: `${boardHeight / 10}px`,
              border: '1px solid black',
              margin: "10px"
            }}
          >
            {board.cuts.map((cut, cutIndex) => (
              <div
                onClick={() => removeCut(boards, setBoards, cut)}
                key={cutIndex}
                style={{
                  position: 'absolute',
                  left: `${cut.x / 10}px`,
                  top: `${cut.y / 10}px`,
                  width: `${cut.width / 10}px`,
                  height: `${cut.height / 10}px`,
                  backgroundColor: getRandomColor(),
                  border: '1px solid black'
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default BoardDisplay;

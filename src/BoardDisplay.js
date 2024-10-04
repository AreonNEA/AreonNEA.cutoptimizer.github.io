import React from 'react';
import styles from './styles/BoardDisplay.module.css';
import { removeCut } from './boardUtils';
import ImageSelector from './ImageSelector';

function BoardDisplay({ boards, setBoards, setBoardCount, boardWidth, boardHeight, selectedImage, setSelectedImage, boardCount, totalCuts, setTotalCuts, translations }) {
  const handleRemoveBoard = (boardIndex) => {
    const updatedBoards = boards.filter((_, index) => index !== boardIndex);
    setBoards(updatedBoards);
    setBoardCount(updatedBoards.length);
  };

  const scaleFactor = 4;

  return (
    <div className={styles.tablePosition}>
      <div className={styles.parameters}>
        <ImageSelector selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        <h2>{translations.boardSize}: {boardHeight} x {boardWidth}</h2>
        <h3>{translations.calculate}:</h3>
        <p>{translations.board}: {boardCount}</p>
        <p>{translations.totalCuts}: {totalCuts ? totalCuts : 0}</p>
      </div>
      {boards.map((board, boardIndex) => (
        <div key={boardIndex} className={styles.center} style={{ position: 'relative', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>{translations.board} {boardIndex + 1}</h3>
            <button
              onClick={() => handleRemoveBoard(boardIndex)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                padding: '5px 10px',
                margin: "auto 10px"
              }}
            >
              {translations.remove}
            </button>
          </div>
          <div
            style={{
              width: `${boardWidth / scaleFactor}px`,
              height: `${boardHeight / scaleFactor}px`,
              border: '1px solid black',
              backgroundImage: `url(${selectedImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              position: 'relative',
            }}
          >
            {board.cuts.map((cut, cutIndex) => (
              <div
                key={cutIndex}
                onClick={() => removeCut(boards, setBoards, setBoardCount, cut, setTotalCuts)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = 'url(/images/bin.png)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.6)';
                  e.currentTarget.style.backgroundSize = 'cover';
                  e.currentTarget.style.border = '2px solid green';
                  e.currentTarget.style.backgroundSize = '50px 50px';
                  e.currentTarget.style.backgroundRepeat = 'no-repeat';
                  e.currentTarget.style.backgroundPosition = 'center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage = 'none';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.6)';
                  e.currentTarget.style.border = '1px solid black';
                }}
                style={{
                  position: 'absolute',
                  left: `${cut.x / scaleFactor}px`,
                  top: `${cut.y / scaleFactor}px`,
                  width: `${cut.width / scaleFactor}px`,
                  height: `${cut.height / scaleFactor}px`,
                  backgroundColor: 'rgba(0, 128, 0, 0.3)',
                  border: '1px solid black',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BoardDisplay;

import styles from './BoardDisplay.module.css';
import { removeCut } from './boardUtils';

function BoardDisplay({ boards, setBoards, setBoardCount, boardWidth, boardHeight, selectedImage, boardCount, totalCuts, setTotalCuts }) {
  const handleRemoveBoard = (boardIndex) => {
    const updatedBoards = boards.filter((_, index) => index !== boardIndex);
    setBoards(updatedBoards);
    setBoardCount(updatedBoards.length);
  };

  return (
    <div className={styles.tablePosition}>
      <div className={styles.parameters}>
        <h2>Размеры листа (мм): {boardHeight} x {boardWidth}</h2>
        <h3>Параметры раскроя:</h3>
        <p>Листов в раскрое: {boardCount}</p>
        <p>Всего деталей: {totalCuts}</p>
      </div>
      {boards.map((board, boardIndex) => (
        <div key={boardIndex} className={styles.center} style={{ position: 'relative', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Доска {boardIndex + 1}</h3>
            <button
              onClick={() => handleRemoveBoard(boardIndex)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                padding: '5px 10px',
              }}
            >
              Удалить
            </button>
          </div>
          <div
            style={{
              width: `${boardWidth / 10}px`,
              height: `${boardHeight / 10}px`,
              border: '1px solid black',
              backgroundImage: `url(${selectedImage})`,
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
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage = 'none';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.6)';
                  e.currentTarget.style.border = '1px solid black';
                }}
                style={{
                  position: 'absolute',
                  left: `${cut.x / 10}px`,
                  top: `${cut.y / 10}px`,
                  width: `${cut.width / 10}px`,
                  height: `${cut.height / 10}px`,
                  backgroundColor: "rgba(255, 0, 0, 0.6)",
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

import styles from './BoardDisplay.module.css';
import { removeCut } from './boardUtils';

function BoardDisplay({ boards, setBoards, setBoardCount, boardWidth, boardHeight, selectedImage, boardCount, totalCuts,setTotalCuts }) {
  return (
    <div className={styles.tablePosition}>
      <div className={styles.parameters}>
        <h2>Размеры листа (мм):  {boardHeight} x {boardWidth} </h2>
        <h3>Параметры раскроя:</h3>
        <p>Листов в раскрое: {boardCount}</p>
        <p>Всего деталей: {totalCuts}</p>
      </div>
      {boards.map((board, boardIndex) => (
        <div key={boardIndex} className={styles.center}>
          <h3>Доска {boardIndex + 1}</h3>
          <div
            style={{
              position: 'relative',
              width: `${boardWidth / 10}px`,
              height: `${boardHeight / 10}px`,
              border: '1px solid black',
              margin: "10px",
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: 'cover',
            }}
          >
            {board.cuts.map((cut, cutIndex) => (
              <div
                onClick={() => removeCut(boards, setBoards, setBoardCount, cut,setTotalCuts)}
                key={cutIndex}
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

import styles from './BoardDisplay.module.css';
import { removeCut } from './boardUtils';

function BoardDisplay({ boards, setBoards, boardWidth, boardHeight, selectedImage }) {
  return (
    <div className={styles.tablePosition}>
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
                onClick={() => removeCut(boards, setBoards, cut)}
                key={cutIndex}
                style={{
                  position: 'absolute',
                  left: `${cut.x / 10}px`,
                  top: `${cut.y / 10}px`,
                  width: `${cut.width / 10}px`,
                  height: `${cut.height / 10}px`,
                  backgroundColor: "rgba(255, 0, 0, 0.5)",
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

export default BoardDisplay;

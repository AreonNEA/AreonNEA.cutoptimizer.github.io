// BoardDisplay.js
import React from 'react';
import './BoardDisplay.css';

function BoardDisplay({ boards, boardWidth, boardHeight }) {
  return (
    <div className='tablePosition'>
      {boards.map((board, boardIndex) => (
        <div key={boardIndex} className='center' style={{margin: "0 auto"}}>
          <h3>Доска {boardIndex + 1}</h3>
          <div style={{ position: 'relative', width: `${boardWidth / 10}px`, height: `${boardHeight / 10}px`, border: '1px solid black',margin:"10px"}}>
            {board.cuts.map((cut, index) => (
              <div key={index} style={{
                position: 'absolute',
                left: `${cut.x / 10}px`,
                top: `${cut.y / 10}px`,
                width: `${cut.width / 10}px`,
                height: `${cut.height / 10}px`,
                backgroundColor: getRandomColor(),
                border: '1px solid red'
                
              }}>
              </div>
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

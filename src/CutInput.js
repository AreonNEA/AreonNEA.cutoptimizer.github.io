// CutInput.js
import React, { useState } from 'react';

function CutInput({ onAdd }) {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAdd = () => {
    if (isNaN(height) || isNaN(width) || isNaN(quantity) || height <= 0 || width <= 0 || quantity <= 0) {
      alert('Введите корректные значения');
      return;
    }
    onAdd({ height: parseInt(height), width: parseInt(width), quantity: parseInt(quantity) });
    setHeight('');
    setWidth('');
    setQuantity('');
  };

  return (
    <div>
      <input type="number" placeholder="Высота" value={height} onChange={e => setHeight(e.target.value)} />
      <input type="number" placeholder="Ширина" value={width} onChange={e => setWidth(e.target.value)} />
      <input type="number" placeholder="Количество" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
}

export default CutInput;

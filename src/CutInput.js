import React, { useState } from 'react';

function CutInput({ onAdd, boardWidth, boardHeight }) {
  const [quantity, setQuantity] = useState(1);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleAddCut = () => {
    const cut = {
      width: parseInt(width),
      height: parseInt(height),
      quantity: parseInt(quantity),
    };
    onAdd(cut);
    setWidth(0);
    setHeight(0);
    setQuantity(1); 
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Ширина"
        value={width}
        onChange={e => setWidth(e.target.value)}
      />
      <input
        type="number"
        placeholder="Высота"
        value={height}
        onChange={e => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Количество"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />
      <button onClick={handleAddCut}>Добавить рез</button>
    </div>
  );
}

export default CutInput;

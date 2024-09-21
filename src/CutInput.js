import React, { useState, useEffect } from 'react';
import styles from './styles/CutInput.module.css';
function CutInput({ onAdd, onEdit, currentCut, setCurrentCut, boardWidth, boardHeight, translations }) {
  const [quantity, setQuantity] = useState(1);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (currentCut) {
      setWidth(currentCut.width);
      setHeight(currentCut.height);
      setQuantity(currentCut.quantity);
    } else {
      setWidth("");
      setHeight("");
      setQuantity("");
    }
  }, [currentCut]);

  const handleAddCut = () => {
    const cut = {
      width: parseInt(width),
      height: parseInt(height),
      quantity: parseInt(quantity),
    };

    if (currentCut) {
      onEdit(currentCut.index, cut);
      setCurrentCut(null);  
    } else {
      onAdd(cut);
    }

    setWidth(0);
    setHeight(0);
    setQuantity(1);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type="number"
        placeholder={translations.width}  
        value={width}
        onChange={e => setWidth(e.target.value)}
      />
      <input
        type="number"
        placeholder={translations.height}  
        value={height}
        onChange={e => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder={translations.quantity} 
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />
      <button onClick={handleAddCut}>
        {currentCut ? translations.update : translations.add}  
      </button>
    </div>
  );
}

export default CutInput;

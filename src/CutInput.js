import { useState } from 'react';
import styles from './CutInput.module.css';  

function CutInput({ onAdd, boardWidth, boardHeight }) {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAdd = () => {
    const parsedHeight = parseInt(height);
    const parsedWidth = parseInt(width);
    const parsedQuantity = parseInt(quantity);

    if (isNaN(parsedHeight) || isNaN(parsedWidth) || isNaN(parsedQuantity) || 
        parsedHeight <= 0 || parsedWidth <= 0 || parsedQuantity <= 0) {
      alert('Введите корректные значения');
      return;
    }

    if (parsedHeight > boardHeight || parsedWidth > boardWidth) {
      alert(`Размеры реза превышают размер доски (${boardWidth}x${boardHeight}).`);
      return;
    }

    onAdd({ height: parsedHeight, width: parsedWidth, quantity: parsedQuantity });

    setHeight('');
    setWidth('');
    setQuantity('');
  };

  return (
    <div className={styles.inputWrapper}>
      <input type="number" placeholder="Высота" value={height} onChange={e => setHeight(e.target.value)} />
      <input type="number" placeholder="Ширина" value={width} onChange={e => setWidth(e.target.value)} />
      <input type="number" placeholder="Количество" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
}

export default CutInput;

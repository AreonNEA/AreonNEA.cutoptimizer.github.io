import React from 'react';
import styles from './CutTable.module.css';

function CutTable({ cuts, onEdit, onDelete }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Высота</th>
          <th>Ширина</th>
          <th>Количество</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {cuts.map((cut, index) => (
          <tr key={index}>
            <td>{cut.height}</td>
            <td>{cut.width}</td>
            <td>{cut.quantity}</td>
            <td>
              {onEdit && (
                <button 
                  className={styles.editButton} 
                  onClick={() => onEdit({ ...cut, index })}>
                  Изменить
                </button>
              )}
              {onDelete && (
                <button 
                  className={styles.deleteButton} 
                  onClick={() => onDelete(index)}>
                  Удалить
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CutTable;

import React from 'react';
import styles from './CutTable.module.css';

const CutTable = React.memo(({ cuts, onEdit, onDelete }) => {
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
            <td>{cut.height || 'Нет данных'}</td>
            <td>{cut.width || 'Нет данных'}</td>
            <td>{cut.quantity || 'Нет данных'}</td>
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
});

export default CutTable;

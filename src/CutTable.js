import React from 'react';
import styles from './CutTable.module.css';

function CutTable({ cuts, onEdit, onDelete, noDataMessage, translations }) {
  const { height, width, quantity, actions } = translations;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>{height}</th>
          <th>{width}</th>
          <th>{quantity}</th>
          <th>{actions}</th>
        </tr>
      </thead>
      <tbody>
        {cuts.length > 0 ? (
          cuts.map((cut, index) => (
            <tr key={index}>
              <td>{cut.height || 0}</td>
              <td>{cut.width || 0}</td>
              <td>{cut.quantity || 0}</td>
              <td>
                {onEdit && (
                  <button 
                    className={styles.editButton} 
                    onClick={() => onEdit({ ...cut, index })}>
                    {translations.update}
                  </button>
                )}
                {onDelete && (
                  <button 
                    className={styles.deleteButton} 
                    onClick={() => onDelete(index)}>
                    {translations.remove}
                  </button>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">{noDataMessage}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default CutTable;

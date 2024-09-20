import React from 'react';

function CutTable({ cuts, onEdit, onDelete }) {
  return (
    <table>
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
              <button onClick={() => onEdit(index, cut)}>Изменить</button>
              <button onClick={() => onDelete(index)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CutTable;

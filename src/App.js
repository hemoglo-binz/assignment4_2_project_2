import React from 'react';
import './App.css';

function App() {
  const fruits = [
    { id: 1, name: 'Apple', price: '$1' },
    { id: 2, name: 'Banana', price: '$0.5' },
    { id: 3, name: 'Orange', price: '$0.75' },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Fruit Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => (
            <tr key={fruit.id}>
              <td>{fruit.id}</td>
              <td>{fruit.name}</td>
              <td>{fruit.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

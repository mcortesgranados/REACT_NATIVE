import './App.css'
import React, { useState, useMemo } from 'react';

/**En este ejemplo, calculateNumbers es una función costosa que calcula una 
 * lista de números hasta un valor dado. Utilizamos useMemo para memoizar la 
 * lista de números y evitar que se recalcule en cada renderizado. El valor 
 * memoizado se actualizará solo cuando el valor de count cambie, lo que ayuda
 *  a optimizar el rendimiento al evitar cálculos innecesarios. */

// Componente que muestra la lista de números
const NumberList = ({ numbers }) => {
  return (
    <div>
      <h2>Number List</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

// Componente principal que utiliza useMemo para memoizar la lista de números
const MemoizationExample = () => {
  const [count, setCount] = useState(0);

  // Función costosa que calcula una lista de números
  const calculateNumbers = (count) => {
    console.log('Calculating numbers...');
    const numbers = [];
    for (let i = 1; i <= count; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  // Memoizamos la lista de números para evitar recálculos innecesarios
  const numbers = useMemo(() => calculateNumbers(count), [count]);

  return (
    <div>
      <h1>Memoization Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <NumberList numbers={numbers} />
    </div>
  );
};

export default MemoizationExample;
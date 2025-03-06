import { useState, useMemo } from 'react'
import './App.css'

// Componente funcional que muestra una lista de números
const NumberList = ({ numbers }) => {
  console.log('Renderizando NumberList');
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

// Componente principal que contiene la lógica de optimización de rendimiento
const PerformanceOptimizationExample = () => {
  const [count, setCount] = useState(0);

  // Generamos una lista de números cada vez que count cambia
  const numbers = useMemo(() => {
    console.log('Calculando números...');
    const newNumbers = [];
    for (let i = 1; i <= count; i++) {
      newNumbers.push(i);
    }
    return newNumbers;
  }, [count]);

  return (
    <div>
      <h1>Performance Optimization Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      {/* Utilizamos React.memo para memoizar el componente NumberList */}
      <NumberList numbers={numbers} />
    </div>
  );
};

export default PerformanceOptimizationExample;
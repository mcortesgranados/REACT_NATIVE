import { useState } from 'react'
import './App.css'



/**
 * 
El Virtual DOM (DOM virtual) es una representación en memoria del DOM 
(Document Object Model) que React utiliza para realizar operaciones eficientes
 de actualización y renderizado. Aquí tienes un ejemplo simplificado de cómo 
 funciona el Virtual DOM en React:

Supongamos que tenemos un componente Counter que muestra un contador y tiene un botón para incrementar el contador:
 * 
 */
function Counter () {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;

import { useState } from 'react'
import './App.css'

/**En este ejemplo, utilizamos las funciones render y fireEvent de React 
 * Testing Library para renderizar el componente Counter y simular clics en los
 *  botones de incremento y decremento. Luego, utilizamos las funciones de 
 * aserción de Jest para verificar que el contador se actualice correctamente 
 * después de hacer clic en los botones.
 */

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
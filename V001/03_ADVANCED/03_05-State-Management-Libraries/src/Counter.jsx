import React from 'react';
import './App.css'
/**
 * 
 * Con Redux, puedes centralizar y gestionar el estado de tu aplicación de 
 * forma más eficiente, lo que facilita el mantenimiento y la escalabilidad 
 * de tu código.
 */
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
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
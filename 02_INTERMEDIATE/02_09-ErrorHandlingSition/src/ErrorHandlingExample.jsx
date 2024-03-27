import { useState } from 'react'
import './App.css'
import React, {useState} from 'react';
/**
 * tenemos un componente ErrorHandlingExample que contiene un botón. 
 * Cuando se hace clic en el botón, se llama a la función fetchData, 
 * que simula una solicitud HTTP que falla lanzando un error. 
 * El error se captura utilizando un bloque try/catch y se almacena en el 
 * estado error. Finalmente, el mensaje de error se muestra en el renderizado 
 * si existe un error.
*/
const ErrorHandlingExample = () => {
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // Simulamos una solicitud HTTP que falla lanzando un error
      throw new Error('Failed to fetch data');
    } catch (error) {
      // Capturamos el error y lo almacenamos en el estado
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Error Handling Example</h2>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default ErrorHandlingExample;

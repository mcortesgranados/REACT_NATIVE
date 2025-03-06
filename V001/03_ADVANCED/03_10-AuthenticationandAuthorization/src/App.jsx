import { useState } from 'react'
import './App.css'
import Login from './Login';

const App = () => {
  const [token, setToken] = useState(null);

  // Función para cerrar sesión
  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div>
      {token ? (
        <div>
          <h1>¡Bienvenido!</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
};

export default App;
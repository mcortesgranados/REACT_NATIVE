import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-backend.com/login', {
        username,
        password,
      });
      const token = response.data.token;
      setToken(token); // Guardar el token en el estado de la aplicación
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
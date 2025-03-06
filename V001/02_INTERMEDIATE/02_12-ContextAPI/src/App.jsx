import React, { useContext, useState } from 'react';
import './App.css'
/*
En este ejemplo, creamos un contexto ThemeContext que proporciona el tema 
actual y la función para cambiarlo. Utilizamos el componente ThemeProvider 
para envolver nuestra aplicación y proporcionar el contexto del tema a todos 
los componentes descendientes. Luego, utilizamos el hook useTheme para acceder 
al contexto del tema en los componentes ThemeToggle y ThemeExample. El botón 
en ThemeToggle permite al usuario alternar entre temas claro y oscuro, lo que
 actualiza el tema en toda la aplicación a través del contexto.*/

// Creamos un contexto para el tema
const ThemeContext = React.createContext();

// Hook personalizado para acceder al contexto del tema
const useTheme = () => {
  return useContext(ThemeContext);
};

// Componente que proporciona el contexto del tema
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado para el tema

  // Función para alternar entre temas claro y oscuro
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Componente que muestra el tema actual y permite cambiarlo
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme(); // Obtenemos el tema y la función para cambiarlo del contexto

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
  );
};

// Componente de ejemplo que utiliza el contexto del tema
const ThemeExample = () => {
  const { theme } = useTheme(); // Obtenemos el tema del contexto

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff', padding: '20px' }}>
      <h2>Theme Example</h2>
      <p>Current Theme: {theme}</p>
      <ThemeToggle />
    </div>
  );
};

// Componente principal que envuelve la aplicación con el ThemeProvider
const App = () => {
  return (
    <ThemeProvider>
      <ThemeExample />
    </ThemeProvider>
  );
};

export default App;
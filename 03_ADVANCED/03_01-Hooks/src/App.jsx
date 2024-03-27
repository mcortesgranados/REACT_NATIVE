import { useState, useEffect, useContext } from 'react'
import './App.css'


/**
 * utilizamos varios hooks de React:

useState para manejar el estado de un contador y el estado del tema.
useEffect para realizar efectos secundarios, en este caso, actualizamos el título del documento cuando el contador cambia.
useContext para acceder al contexto del tema y utilizarlo en el componente ThemedButton.
Estos hooks nos permiten gestionar el estado y los efectos secundarios de manera declarativa en componentes funcionales, lo que hace que el código sea más limpio y fácil de entender.
 * 
 */


// Creamos un contexto para el tema
const ThemeContext = React.createContext();

// Hook personalizado para acceder al contexto del tema
const useTheme = () => {
  return useContext(ThemeContext);
};

const HooksExample = () => {
  // useState para manejar el estado de un contador
  const [count, setCount] = useState(0);

  // useEffect para realizar efectos secundarios
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  // useState para manejar el estado del tema
  const [theme, setTheme] = useState('light');

  // Función para alternar entre temas claro y oscuro
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Contexto del tema
  const themeContextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div>
        <h1>Hooks Example</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
};

// Componente funcional que utiliza el contexto del tema
const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }} onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
  );
};

export default HooksExample;

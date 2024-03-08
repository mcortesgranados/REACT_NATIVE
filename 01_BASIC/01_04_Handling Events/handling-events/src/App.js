// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 7, 2024
// Time: 11:28 AM (GMT-5:00)

import React from 'react';
import TodoList from './TodoList'; // Proposed Name: TodoList.js

function App() { // App component declaration
  return ( // Returning JSX for rendering
    <div className="App"> // Outer div with class name App
      <TodoList /> // Rendering TodoList component
    </div>
  );
}

export default App; // Exporting App component

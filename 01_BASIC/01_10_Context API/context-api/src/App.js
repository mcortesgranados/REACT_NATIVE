// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 7, 2024
// Time: 11:28 AM (GMT-5:00)

import React from 'react';
import { ThemeProvider, ThemeSwitcher } from './ThemeContext'; // Proposed Name: ThemeContext.js

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* Rendering the ThemeSwitcher component */}
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;

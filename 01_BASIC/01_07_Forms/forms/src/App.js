// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 7, 2024
// Time: 11:28 AM (GMT-5:00)

import React from 'react';
import ErrorBoundary from './ErrorBoundary'; // Proposed Name: ErrorBoundary.js
import ComponentWithError from './ComponentWithError'; // Example component that may throw an error

function App() {
  return (
    <div className="App">
      {/* Wrapping the component that may throw an error with ErrorBoundary */}
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    </div>
  );
}

export default App;

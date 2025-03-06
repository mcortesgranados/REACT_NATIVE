// Import the core React library to enable JSX syntax and React functionalities
import React from "react";

// Import the CSS file for applying styles to the App component
import "./App.css";

// Import the HelloWorldFunctional component from the specified directory
import HelloWorldFunctional from "./components/T001/HelloWorldFunctional";

/**
 * The main application component that serves as the root of the React app.
 * This component renders the main structure of the application, including
 * a header, a greeting component, and a link to the React documentation.
 *
 * @returns {JSX.Element} The rendered App component structure.
 */
function App() {
  return (
    // The main container with a CSS class for global styling
    <div className="App">
      {/* Application header section */}
      <header className="App-header">
        {/* Main heading for the application */}
        <h1>Welcome to My React App</h1>

        {/* Render the HelloWorldFunctional component with a name prop */}
        <HelloWorldFunctional name="Manuela Cortés Granados" />

        {/* Link to the official React documentation with security attributes */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Exporting the App component as the default export for use in index.js
export default App;

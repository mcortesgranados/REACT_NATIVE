// Import the core React library to enable JSX syntax and React functionalities
import React from "react";

// Import the CSS file for applying styles to the App component
import "./App.css";

// Import the HelloWorldFunctional component from the specified directory
import HelloWorldFunctional from "./components/T001/HelloWorldFunctional";
import FunctionalComponentExample from "./components/T002/FunctionalComponentExample";
import Counter from "./components/T004/Counter";  // Import the class component
import UserCard from "./components/T005/UserCard";  // Importing the child component
import UserCard2 from "./components/T006/UserCard2"; // Importing the class-based component



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
        <FunctionalComponentExample name="Manuela Cortés Granados" />
        <Counter />
        <h1>User Profiles</h1>
      {/* Passing props to the child component */}
      <UserCard name="Alice Johnson" age={28} email="alice@example.com" />
      <UserCard name="Bob Smith" age={34} email="bob@example.com" />
      <UserCard name="Charlie Brown" age={22} email="charlie@example.com" />
      <UserCard /> {/* Uses default props */}
      <h1>T006 User Profiles</h1>
        {/* Passing props to the child component */}
        <UserCard2 name="Alice Johnson" age={28} email="alice@example.com" />
        <UserCard2 name="Bob Smith" age={34} email="bob@example.com" />
        <UserCard2 name="Charlie Brown" age={22} email="charlie@example.com" />
        <UserCard2 /> {/* Uses default props */}


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

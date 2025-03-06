// Import the core React library to enable JSX syntax and React functionalities
import React from "react";

// Import the CSS file for applying styles to the App component
import "./App.css";

// Import the HelloWorldFunctional component from the specified directory
import HelloWorldFunctional from "./components/T001/HelloWorldFunctional";
import FunctionalComponentExample from "./components/T003/FunctionalComponentExample";
import Counter from "./components/T004/Counter";  // Import the class component
import UserCard from "./components/T005/UserCard";  // Importing the child component
import UserCard2 from "./components/T006/UserCard2"; // Importing the class-based component
import T007_Counter from "./components/T007/T007_Counter "; // Importing class-based Counter component
import T008_Counter from "./components/T008/T008_Counter"; // Importing class-based Counter component
import ButtonClick from "./components/T009/ButtonClick"; // Importing functional component
import ClickEventClass from "./components/T009/ClickEventClass"; // Importing class component
import ConditionalRendering from "./components/T010/ConditionalRendering"; // Functional Component
import ConditionalRenderingClass from "./components/T010/ConditionalRenderingClass"; // Class Component


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
      <h1>T007 State in Class Components</h1>
        <T007_Counter /> {/* Counter component with internal state */}
        <T007_Counter /> {/* Each Counter has its own independent state */}
        <h1>T008 useState Hook	A Hook that enables state management inside functional components.</h1>
        <T008_Counter /> {/* Counter component with internal state */}
        <T008_Counter /> {/* Each Counter has its own independent state */}
        <h1>T009	Handling Click Events	Using `onClick` event handlers to trigger functions when a user interacts with an element.</h1>
        <ButtonClick />
      <ClickEventClass />
      <h1>10	Conditional Rendering	Using JavaScript expressions (`if`, ternary operators) to show or hide UI elements dynamically.</h1>
      <ConditionalRendering />
      <ConditionalRenderingClass />
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

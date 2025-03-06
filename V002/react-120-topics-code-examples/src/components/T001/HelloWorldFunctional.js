// Import the core React library to enable JSX syntax and React functionalities
import React from "react";

// Import an external CSS file for applying styles to this component
import "../../styles/HelloWorld.css"; // Importing CSS for styling

/**
 * A stateless functional component that displays a greeting message.
 * React functional components are lightweight and primarily used for UI rendering.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name to be displayed in the greeting.
 * @returns {JSX.Element} The rendered component structure.
 */
const HelloWorldFunctional = ({ name }) => {
  return (
    // The main container with a CSS class for styling
    <div className="hello-container">
      {/* Display a greeting message dynamically using the "name" prop */}
      <h1>T001 Hello, {name}! 👋</h1>

      {/* Additional text explaining the purpose of this component */}
      <p>Welcome to your first React functional component.</p>
    </div>
  );
};

// Exporting the component as the default export for use in other parts of the application
export default HelloWorldFunctional;

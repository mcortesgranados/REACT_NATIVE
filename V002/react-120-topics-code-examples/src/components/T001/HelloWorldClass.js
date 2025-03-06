// Importing React and the Component class from the "react" library
import React, { Component } from "react";

// Importing the external CSS file for styling this component
import "../../styles/HelloWorld.css"; // Reusing styles

/**
 * A class-based React component that displays a greeting message.
 * This component receives a `name` prop and renders a personalized greeting.
 */
class HelloWorldClass extends Component {
  /**
   * The render method is required in a class component.
   * It returns the JSX (UI) that will be displayed.
   */
  render() {
    return (
      // The main container with a CSS class for styling
      <div className="hello-container">
        {/* Displaying a greeting message dynamically using props */}
        <h1>Hello, {this.props.name}! 👋</h1>
        
        {/* Additional descriptive text */}
        <p>This is a class-based component in React.</p>
      </div>
    );
  }
}

// Exporting the component to be used in other parts of the application
export default HelloWorldClass;

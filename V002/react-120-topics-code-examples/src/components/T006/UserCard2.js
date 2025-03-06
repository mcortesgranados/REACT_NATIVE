import React, { Component } from "react"; // Importing React and Component class for creating a class-based component
import PropTypes from "prop-types"; // Importing PropTypes for validating component props

/**
 * UserCard2 Component (Class-Based)
 * 
 * This component is a class-based React component that receives user information 
 * (name, age, email) as props and displays it inside a styled card.
 * 
 * Features:
 * - Uses class-based component syntax
 * - Accepts props to display user details
 * - Provides default props if no values are passed
 * - Implements PropTypes for type validation
 * - Uses inline styles for styling
 */
class UserCard2 extends Component {
  /**
   * render() method:
   * - This method is required in class-based components.
   * - It returns the JSX structure of the component.
   */
  render() {
    // Destructuring props for easier access
    const { name, age, email } = this.props;

    return (
      // Container div for the user card with applied inline styles
      <div style={styles.card}>
        {/* Displaying user name */}
        <h3>{name}</h3>

        {/* Displaying user age */}
        <p>Age: {age}</p>

        {/* Displaying user email */}
        <p>Email: {email}</p>
      </div>
    );
  }
}

/**
 * Default Props:
 * - These are used when the parent component does not provide values.
 * - Ensures the component has meaningful default content.
 */
UserCard2.defaultProps = {
  name: "Anonymous", // Default name if none is provided
  age: "N/A", // Default age if none is provided
  email: "No email provided", // Default email if none is provided
};

/**
 * PropTypes Validation:
 * - Ensures the component receives the expected data types.
 * - Helps in debugging by issuing warnings in the console if incorrect types are passed.
 */
UserCard2.propTypes = {
  name: PropTypes.string, // Ensures name is a string
  age: PropTypes.number, // Ensures age is a number
  email: PropTypes.string, // Ensures email is a string
};

/**
 * Inline Styles:
 * - Styles are defined as JavaScript objects.
 * - Used to provide custom styling directly within the component.
 */
const styles = {
  card: {
    border: "1px solid #ddd", // Light gray border
    padding: "15px", // Adds space inside the card
    borderRadius: "8px", // Rounds the corners of the card
    textAlign: "center", // Centers the text inside the card
    margin: "10px", // Adds spacing around the card
    backgroundColor: "#f9f9f9", // Light background color for contrast
  },
};

export default UserCard2; // Exporting the component for use in other parts of the application

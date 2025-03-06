// Importing React library to define a functional component
import React from "react";

/**
 * 📌 UserCard Component
 * 
 * ✔️ Example: Passing User Data via Props
 * This example demonstrates:
 * ✅ Passing props from App.js (parent) to UserCard.js (child)
 * ✅ Rendering dynamic data inside JSX
 * ✅ Using default props to handle missing data gracefully
 * 
 * @param {Object} props - Destructured object containing `name`, `age`, and `email`
 * @returns {JSX.Element} - A styled card displaying user details
 */

// Functional component that accepts props using object destructuring
const UserCard = ({ name, age, email }) => {
  return (
    // Card container with inline styles applied
    <div style={styles.card}>
      {/* Displaying the user's name dynamically */}
      <h3>{name}</h3>
      
      {/* Displaying the user's age */}
      <p>Age: {age}</p>
      
      {/* Displaying the user's email */}
      <p>Email: {email}</p>
    </div>
  );
};

/**
 * 📌 Default Props
 * If the parent component does not pass any values for `name`, `age`, or `email`,
 * these default values will be used to prevent `undefined` errors.
 */
UserCard.defaultProps = {
  name: "Anonymous", // Default name when no name is provided
  age: "N/A", // Default age when age is not passed
  email: "No email provided", // Default email placeholder
};

/**
 * 📌 Inline Styles
 * The styles object is used to define the appearance of the UserCard component.
 * Inline styles ensure that the styles are applied directly to the component without needing external CSS.
 */
const styles = {
  card: {
    border: "1px solid #ddd", // Light gray border around the card
    padding: "15px", // Adds space inside the card
    borderRadius: "8px", // Rounded corners for a modern look
    textAlign: "center", // Centers text inside the card
    margin: "10px", // Adds spacing around the card
    backgroundColor: "#f9f9f9", // Light gray background color
  },
};

// Exporting the UserCard component to be used in other parts of the app
export default UserCard;

// Import React and the useState hook for managing component state
import React, { useState } from "react";

/**
 * 🎯 ButtonClick Component (Functional Component)
 * 
 * This component demonstrates:
 * ✅ useState for managing message state
 * ✅ Event handling in React (onClick)
 * ✅ Inline styles for basic styling
 */
const ButtonClick = () => {
  /**
   * 🔹 Step 1: Define state variables using useState
   * - `useState("Click the button!")` initializes `message` with a default text.
   * - `setMessage` is the function used to update the `message` state.
   */
  const [message, setMessage] = useState("Click the button!");

  /**
   * 🔺 Step 2: Function to handle button click (without parameters)
   * - When the button is clicked, it updates the `message` state.
   */
  const handleClick = () => {
    setMessage("Button clicked! 🎉"); // Updates the message when clicked
  };

  /**
   * 🔻 Step 3: Function to handle button click with a parameter
   * - Accepts a `name` parameter and updates the message with personalized text.
   */
  const handleClickWithParam = (name) => {
    setMessage(`Hello, ${name}! You clicked the button.`); // Updates message dynamically
  };

  /**
   * 🎨 Step 4: Return JSX (UI)
   * - Displays the current message.
   * - Includes two buttons with different event handlers.
   */
  return (
    // Main container with inline styles applied
    <div style={styles.container}>
      {/* Display the current message */}
      <h2>{message}</h2>

      {/* Button that triggers handleClick() when clicked */}
      <button style={styles.button} onClick={handleClick}>
        Click Me
      </button>

      {/* Button that triggers handleClickWithParam("Manuela") when clicked */}
      <button
        style={styles.button}
        onClick={() => handleClickWithParam("Manuela")}
      >
        Click with Name
      </button>
    </div>
  );
};

/**
 * 🎨 Inline Styles:
 * - Defined as JavaScript objects.
 * - Applied to elements using the `style` attribute.
 */
const styles = {
  container: {
    textAlign: "center", // Centers text
    padding: "20px", // Adds spacing inside the container
    border: "1px solid #ddd", // Light border for visibility
    borderRadius: "8px", // Rounds the container's edges
    width: "250px", // Sets width to 250px
    margin: "20px auto", // Centers the component horizontally
    backgroundColor: "#f9f9f9", // Light gray background for contrast
  },
  button: {
    margin: "5px", // Adds spacing between buttons
    padding: "10px", // Makes buttons easier to click
    fontSize: "16px", // Sets readable font size
    cursor: "pointer", // Changes cursor to pointer on hover
  },
};

// ✅ Export the component to make it available for use in other files
export default ButtonClick;

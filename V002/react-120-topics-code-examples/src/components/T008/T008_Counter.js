// Import React and the useState hook
import React, { useState } from "react";

/**
 * 🔢 T008_Counter Component (Functional Component)
 * 
 * This component implements a simple counter using React Hooks:
 * ✅ useState for managing count state
 * ✅ Functions for incrementing and decrementing count
 * ✅ Inline styles for basic styling
 */
const T008_Counter = () => {
  /**
   * 🔹 Step 1: Define state variables using useState
   * - `useState(0)` initializes the `count` state with a value of 0.
   * - `setCount` is the function used to update `count`.
   */
  const [count, setCount] = useState(0);

  /**
   * 🔺 Step 2: Function to increment count
   * - Calls `setCount` with a function that takes the previous state (`prevCount`).
   * - Best practice: Using the previous state ensures accurate updates when multiple updates occur.
   */
  const increment = () => {
    setCount(prevCount => prevCount + 1); // Increase count by 1
  };

  /**
   * 🔻 Step 3: Function to decrement count
   * - Works similarly to `increment()`, but decreases the count.
   */
  const decrement = () => {
    setCount(prevCount => prevCount - 1); // Decrease count by 1
  };

  /**
   * 🎨 Step 4: Return JSX (UI)
   * - Displays the current count value.
   * - Includes two buttons for incrementing and decrementing.
   */
  return (
    // Main container with inline styles applied
    <div style={styles.container}>
      {/* Display the current counter value */}
      <h2>Counter: {count}</h2>

      {/* Button to increment count */}
      <button style={styles.button} onClick={increment}>
        ➕ Increment
      </button>

      {/* Button to decrement count */}
      <button style={styles.button} onClick={decrement}>
        ➖ Decrement
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
    width: "200px", // Sets width to 200px
    margin: "20px auto", // Centers the component horizontally
    backgroundColor: "#f9f9f9", // Light gray background for contrast
  },
  button: {
    margin: "5px", // Spacing between buttons
    padding: "10px", // Makes buttons easier to click
    fontSize: "16px", // Sets readable font size
    cursor: "pointer", // Changes cursor to pointer on hover
  },
};

// ✅ Export the component to make it available for use in other files
export default T008_Counter;

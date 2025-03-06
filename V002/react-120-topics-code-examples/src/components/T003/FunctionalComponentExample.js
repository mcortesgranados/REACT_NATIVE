// Import the core React library and the useState Hook for state management
import React, { useState } from "react";

/**
 * A functional React component that demonstrates the use of the useState Hook.
 * This component maintains a counter state that can be incremented or decremented.
 *
 * @returns {JSX.Element} The rendered component with a counter UI.
 */
const FunctionalComponentExample = () => {
  // useState Hook for managing the counter state.
  // "count" holds the current value, and "setCount" updates it.
  const [count, setCount] = useState(0);

  return (
    // Container div with inline styles applied
    <div style={styles.container}>
      {/* Component title */}
      <h2>Functional Component with useState Hook</h2>

      {/* Display the current count value */}
      <p>Current count: {count}</p>

      {/* Button to increment the counter by 1 */}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Button to decrement the counter by 1 */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

// Object containing inline styles for the component
const styles = {
  container: {
    textAlign: "center", // Center align the text
    padding: "20px", // Add padding for spacing
    backgroundColor: "#f8f9fa", // Light gray background color
    borderRadius: "8px", // Rounded corners
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", // Light shadow effect
    margin: "20px auto", // Center the component horizontally
    width: "50%", // Set the width to 50% of the parent container
  },
};

// Exporting the component as the default export for use in other parts of the application
export default FunctionalComponentExample;

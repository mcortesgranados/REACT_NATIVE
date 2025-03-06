// Import React and the useState hook for managing component state
import React, { useState } from "react";

/**
 * 🎯 ConditionalRendering Component (Functional Component)
 * 
 * This component demonstrates:
 * ✅ useState for managing multiple states
 * ✅ Conditional rendering using if-else, ternary, and logical && operators
 * ✅ Simulated login, logout, and error scenarios
 */
const ConditionalRendering = () => {
  /**
   * 🔹 Step 1: Define state variables using useState
   * - `isLoggedIn`: Tracks if the user is logged in.
   * - `hasError`: Tracks if there's an error.
   * - `isLoading`: Tracks if the login process is in progress.
   */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * 🔺 Step 2: Function to simulate the login process
   * - Sets `isLoading` to true and simulates a delay (2 seconds).
   * - Once complete, sets `isLoggedIn` to true and clears `hasError`.
   */
  const handleLogin = () => {
    setIsLoading(true); // Show loading indicator
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
      setHasError(false);
    }, 2000); // Simulate network delay
  };

  /**
   * 🔻 Step 3: Function to simulate logout
   * - Resets `isLoggedIn` to false.
   */
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  /**
   * 🚨 Step 4: Function to simulate an error
   * - Sets `hasError` to true to display an error message.
   */
  const triggerError = () => {
    setHasError(true);
  };

  /**
   * 🎨 Step 5: Return JSX (UI)
   * - Shows messages and buttons based on state values.
   */
  return (
    <div style={styles.container}>
      <h2>Conditional Rendering Example</h2>

      {/* Show loading state when `isLoading` is true */}
      {isLoading && <p style={styles.loading}>🔄 Logging in...</p>}

      {/* Show error message when `hasError` is true */}
      {hasError && <p style={styles.error}>❌ Error: Unable to login!</p>}

      {/* Conditional Rendering using if-else inside JSX */}
      {!isLoggedIn ? (
        <div>
          <p>🔒 Please log in to continue.</p>
          <button style={styles.button} onClick={handleLogin}>
            Log In
          </button>
          <button style={styles.button} onClick={triggerError}>
            Simulate Error
          </button>
        </div>
      ) : (
        <div>
          <p>✅ Welcome, user! You are logged in.</p>
          <button style={styles.button} onClick={handleLogout}>
            Log Out
          </button>
        </div>
      )}

      {/* Using Ternary Operator for Conditional Text */}
      <p>
        {isLoggedIn ? "🎉 Enjoy your session!" : "🔒 Please log in first."}
      </p>

      {/* Using Logical && Operator for Conditional Rendering */}
      {isLoggedIn && <p>🎊 Special message only for logged-in users!</p>}
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
    width: "350px", // Sets width
    margin: "20px auto", // Centers the component horizontally
    backgroundColor: "#f9f9f9", // Light gray background for contrast
  },
  button: {
    margin: "10px", // Adds spacing between buttons
    padding: "10px", // Increases button clickability
    fontSize: "16px", // Sets readable font size
    cursor: "pointer", // Changes cursor to pointer on hover
  },
  error: {
    color: "red", // Makes error messages stand out
    fontWeight: "bold",
  },
  loading: {
    color: "blue", // Makes loading messages noticeable
    fontWeight: "bold",
  },
};

// ✅ Export the component to make it available for use in other files
export default ConditionalRendering;

// Import React and Component for class-based component
import React, { Component } from "react";

/**
 * 🎯 ConditionalRenderingClass Component (Class-Based)
 * 
 * This component demonstrates:
 * ✅ Using a class with `constructor` for state initialization
 * ✅ Managing state with `this.setState`
 * ✅ Conditional rendering using if-else, ternary, and logical &&
 * ✅ Simulated login, logout, and error handling
 */
class ConditionalRenderingClass extends Component {
  /**
   * 🔹 Step 1: Initialize state inside the constructor
   * - `isLoggedIn`: Tracks login status
   * - `hasError`: Tracks errors
   * - `isLoading`: Simulates login loading state
   */
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      hasError: false,
      isLoading: false,
    };
  }

  /**
   * 🔺 Step 2: Function to simulate login
   * - Shows a loading message for 2 seconds before logging in
   */
  handleLogin = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoggedIn: true, isLoading: false, hasError: false });
    }, 2000);
  };

  /**
   * 🔻 Step 3: Function to log out
   * - Resets login state
   */
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  /**
   * 🚨 Step 4: Function to trigger an error
   * - Sets `hasError` to true to display an error message
   */
  triggerError = () => {
    this.setState({ hasError: true });
  };

  /**
   * 🎨 Step 5: Render method for UI
   * - Displays content dynamically based on state
   */
  render() {
    const { isLoggedIn, hasError, isLoading } = this.state;

    return (
      <div style={styles.container}>
        <h2>Conditional Rendering in Class Component</h2>

        {/* Show loading indicator */}
        {isLoading && <p style={styles.loading}>🔄 Logging in...</p>}

        {/* Show error message if an error occurred */}
        {hasError && <p style={styles.error}>❌ Error: Login failed!</p>}

        {/* Conditional rendering using if-else */}
        {!isLoggedIn ? (
          <div>
            <p>🔒 Please log in to continue.</p>
            <button style={styles.button} onClick={this.handleLogin}>
              Log In
            </button>
            <button style={styles.button} onClick={this.triggerError}>
              Simulate Error
            </button>
          </div>
        ) : (
          <div>
            <p>✅ Welcome back! You are logged in.</p>
            <button style={styles.button} onClick={this.handleLogout}>
              Log Out
            </button>
          </div>
        )}

        {/* Using Ternary Operator for Conditional Text */}
        <p>{isLoggedIn ? "🎉 Enjoy your session!" : "🔒 Please log in first."}</p>

        {/* Using Logical AND (&&) for Conditional Rendering */}
        {isLoggedIn && <p>🎊 Special content for logged-in users!</p>}
      </div>
    );
  }
}

/**
 * 🎨 Inline Styles
 * - Styled using JavaScript objects
 * - Applied to elements using `style` attribute
 */
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "350px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
  },
  button: {
    margin: "10px",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
  loading: {
    color: "blue",
    fontWeight: "bold",
  },
};

// ✅ Export component to be used in other files
export default ConditionalRenderingClass;

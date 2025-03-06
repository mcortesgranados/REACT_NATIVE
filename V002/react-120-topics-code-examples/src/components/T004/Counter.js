// Import the core React library and Component class for creating a class-based component
import React, { Component } from "react";

/**
 * A class-based React component that implements a counter with state management.
 * It includes lifecycle methods to demonstrate component behavior during mounting,
 * updating, and unmounting.
 */
class Counter extends Component {
  /**
   * Constructor method initializes the state and binds methods if necessary.
   * @param {Object} props - Properties passed from the parent component.
   */
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Initial state value for the counter
    };
  }

  /**
   * Lifecycle method that runs once after the component is inserted into the DOM.
   * Typically used for data fetching or initializing subscriptions.
   */
  componentDidMount() {
    console.log("✅ Counter component mounted!");
  }

  /**
   * Lifecycle method that runs after every update (state or props change).
   * @param {Object} prevProps - Previous props before the update.
   * @param {Object} prevState - Previous state before the update.
   */
  componentDidUpdate(prevProps, prevState) {
    // Log only when the count state changes to avoid unnecessary updates
    if (prevState.count !== this.state.count) {
      console.log(`🔄 Counter updated! New count: ${this.state.count}`);
    }
  }

  /**
   * Lifecycle method that runs just before the component is removed from the DOM.
   * Used for cleanup tasks such as removing event listeners or clearing timers.
   */
  componentWillUnmount() {
    console.log("❌ Counter component will unmount!");
  }

  /**
   * Increments the counter by 1.
   * Uses setState with a function to ensure the correct previous state is used.
   */
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  /**
   * Resets the counter back to 0.
   * Directly sets the count state to 0.
   */
  reset = () => {
    this.setState({ count: 0 });
  };

  /**
   * Renders the component UI.
   * @returns {JSX.Element} The rendered JSX structure of the counter.
   */
  render() {
    return (
      // Main container with inline styles
      <div style={styles.container}>
        {/* Displays the current counter value */}
        <h2>Counter: {this.state.count}</h2>

        {/* Button to increment the counter */}
        <button onClick={this.increment} style={styles.button}>
          Increment
        </button>

        {/* Button to reset the counter */}
        <button onClick={this.reset} style={styles.button}>
          Reset
        </button>
      </div>
    );
  }
}

// Inline styles for the component
const styles = {
  container: {
    textAlign: "center", // Center aligns text
    marginTop: "20px", // Adds margin at the top
  },
  button: {
    margin: "5px", // Adds space between buttons
    padding: "10px 15px", // Adds padding for better click area
    fontSize: "16px", // Sets readable font size
  },
};

// Exporting the Counter component as the default export
export default Counter;

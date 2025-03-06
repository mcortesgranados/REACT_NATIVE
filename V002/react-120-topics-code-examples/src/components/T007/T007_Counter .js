import React, { Component } from "react"; // Import React and Component class

/**
 * 🔢 T007_Counter Component (Class-Based)
 * 
 * This component implements a simple counter with:
 * ✅ State management for tracking count value
 * ✅ Methods for incrementing and decrementing count
 * ✅ Lifecycle method (componentDidMount) for logging when the component is mounted
 * ✅ Inline styles for styling the component
 */
class T007_Counter extends Component {
  /**
   * 🔹 Step 1: Initialize state
   * - The constructor is called when an instance of the component is created.
   * - `super(props)` calls the parent class constructor to inherit properties.
   * - `this.state` is used to define the initial state of the component.
   */
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Initial counter value set to 0
    };
  }

  /**
   * 🔺 Step 2: Method to increase count
   * - Uses `this.setState()` to update state in a safe, asynchronous manner.
   * - Takes `prevState` as a parameter to ensure state updates correctly.
   */
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1, // Increment count by 1
    }));
  };

  /**
   * 🔻 Step 3: Method to decrease count
   * - Works the same way as `increment()`, but decreases the count.
   */
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1, // Decrement count by 1
    }));
  };

  /**
   * ⏳ Step 4: Lifecycle Method - componentDidMount()
   * - This method runs once after the component has been inserted into the DOM.
   * - Here, it simply logs a message to indicate the component is mounted.
   */
  componentDidMount() {
    console.log("Counter component has mounted."); // Logs a message in the console
  }

  /**
   * 🎨 Step 5: Render method (Required in class-based components)
   * - This method returns JSX (the UI) for the component.
   * - It includes a heading displaying the count and two buttons for incrementing and decrementing.
   */
  render() {
    return (
      // Main container with inline styles applied
      <div style={styles.container}>
        {/* Display the current counter value */}
        <h2>Counter: {this.state.count}</h2>

        {/* Button to increment count */}
        <button style={styles.button} onClick={this.increment}>
          ➕ Increment
        </button>

        {/* Button to decrement count */}
        <button style={styles.button} onClick={this.decrement}>
          ➖ Decrement
        </button>
      </div>
    );
  }
}

/**
 * 🎨 Inline Styles:
 * - Styles are defined as JavaScript objects.
 * - These are applied to elements using the `style` attribute.
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
export default T007_Counter;

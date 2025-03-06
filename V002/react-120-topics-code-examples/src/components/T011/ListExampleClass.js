/**
 * ListExampleClass is a React class component that manages a list of users.
 * It allows adding and removing users dynamically through input and button actions.
 *
 * @author Manuela Cortés Granados (manuelacortésgranados@gmail.com)
 * @since 2025-03-06 07:27:54 GMT-5
 */

import React, { Component } from "react";

/**
 * Class representing a list of users.
 * This component displays a list of users and provides the functionality to add and remove users.
 */
class ListExampleClass extends Component {
  /**
   * Creates an instance of ListExampleClass.
   * Initializes the state with a default list of users and an empty string for the new user input.
   *
   * @param {Object} props - The properties passed to the component.
   */
  constructor(props) {
    super(props);
    // Initialize state with a list of users and a newUser input value
    this.state = {
      users: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
      ],
      newUser: "",  // Input field for adding a new user
    };
  }

  /**
   * Handles adding a new user to the list.
   * It checks if the input value is not empty, creates a new user object,
   * and updates the state with the new user added to the users list.
   */
  addUser = () => {
    const { newUser, users } = this.state;
    // Ensure the input value is not empty
    if (newUser.trim() === "") return;
    // Create a new user object with an incremental ID
    const newEntry = { id: users.length + 1, name: newUser };
    // Update state with the new list of users and reset the newUser input field
    this.setState({ users: [...users, newEntry], newUser: "" });
  };

  /**
   * Removes a user from the list by ID.
   * Filters the users array and removes the user with the matching ID.
   * Updates the state to reflect the change.
   *
   * @param {number} id - The ID of the user to remove.
   */
  removeUser = (id) => {
    // Filter users array to exclude the user with the specified ID
    this.setState({ users: this.state.users.filter(user => user.id !== id) });
  };

  /**
   * Handles changes in the input field.
   * Updates the newUser state with the current value of the input field.
   *
   * @param {Event} event - The event object from the input field.
   */
  handleInputChange = (event) => {
    // Update state with the new user input
    this.setState({ newUser: event.target.value });
  };

  /**
   * Renders the component.
   * Displays the user list, input field for adding a user, and a button to trigger the addUser method.
   */
  render() {
    return (
      <div style={styles.container}>
        <h2>User List (Class Component)</h2>

        <input
          type="text"
          value={this.state.newUser}
          onChange={this.handleInputChange}
          placeholder="Enter user name"
          style={styles.input}
        />
        <button style={styles.button} onClick={this.addUser}>Add User</button>

        <ul style={styles.list}>
          {this.state.users.map((user) => (
            <li key={user.id} style={styles.listItem}>
              {user.name}
              <button onClick={() => this.removeUser(user.id)} style={styles.deleteButton}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Define the styles object to apply custom CSS to the components
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
  input: {
    padding: "8px",
    fontSize: "16px",
    marginRight: "8px",
  },
  button: {
    padding: "8px 12px",
    fontSize: "16px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    padding: "8px",
    margin: "5px 0",
    backgroundColor: "#e0e0e0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "4px 8px",
  },
};

// Export the class component as the default export
export default ListExampleClass;

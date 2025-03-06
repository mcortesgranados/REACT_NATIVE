/**
 * @file ListExample.js
 * @description A React functional component that demonstrates dynamic list management using the useState hook.
 * Users can add new names to the list and remove existing ones.
 * 
 * @author Manuela Cortés Granados (manuelacortesgranados@gmail.com)
 */

import React, { useState } from "react";

/**
 * ListExample Component
 * 
 * This component manages a list of users, allowing the user to add new entries
 * and remove existing ones. It demonstrates the use of React's useState hook
 * for managing component state.
 * 
 * @returns {JSX.Element} The rendered component
 */
const ListExample = () => {
  // State to manage the list of users
  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);

  // State to manage the input field for adding new users
  const [newUser, setNewUser] = useState("");

  /**
   * Adds a new user to the list.
   * Prevents adding empty names and assigns a unique ID to each new user.
   */
  const addUser = () => {
    if (newUser.trim() === "") return; // Prevent adding empty values
    const newEntry = { id: users.length + 1, name: newUser };
    setUsers([...users, newEntry]);
    setNewUser(""); // Reset input field after adding
  };

  /**
   * Removes a user from the list based on their unique ID.
   * 
   * @param {number} id - The ID of the user to remove.
   */
  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>User List</h2>

      {/* Input field to enter a new user name */}
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Enter user name"
        style={styles.input}
      />
      <button style={styles.button} onClick={addUser}>Add User</button>

      {/* List of users displayed dynamically */}
      <ul style={styles.list}>
        {users.map((user) => (
          <li key={user.id} style={styles.listItem}>
            {user.name}
            <button onClick={() => removeUser(user.id)} style={styles.deleteButton}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * Inline styles for UI components.
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

export default ListExample;

/**
 * FetchingListExample is a functional React component that fetches a list of users from an external API
 * and displays them once the data is loaded. The component manages the loading state and the list of users.
 *
 * @author Manuela Cortés Granados (manuelacortésgranados@gmail.com)
 * @since 2025-03-06 07:41:16 GMT-5
 */

import React, { useState, useEffect } from "react";

/**
 * Functional component for fetching and displaying a list of users.
 * It uses the `useState` hook to manage the `users` and `loading` states,
 * and the `useEffect` hook to fetch user data from an external API.
 */
const FetchingListExample = () => {
  // State to hold the list of users
  const [users, setUsers] = useState([]);
  // State to manage the loading status
  const [loading, setLoading] = useState(true);

  /**
   * useEffect hook to fetch user data once the component is mounted.
   * It makes a GET request to the JSONPlaceholder API, processes the response as JSON,
   * and updates the users state and loading status accordingly.
   */
  useEffect(() => {
    // Fetch users data from an API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        // Update the users state with fetched data
        setUsers(data);
        // Set loading to false once data is loaded
        setLoading(false);
      });
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div style={styles.container}>
      <h2>Fetched User List</h2>
      {/* Conditionally render loading message or the list of users */}
      {loading ? <p>Loading...</p> : (
        <ul style={styles.list}>
          {users.map(user => (
            <li key={user.id} style={styles.listItem}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Define styles object to apply custom CSS to the components
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
};

// Export the component as the default export
export default FetchingListExample;

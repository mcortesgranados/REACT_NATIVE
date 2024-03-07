// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 7, 2024
// Time: 11:28 AM (GMT-5:00)

import React, { useState } from 'react';

function LoginForm() { // Define LoginForm component
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for user login status
  const [username, setUsername] = useState(''); // State for username input
  const [password, setPassword] = useState(''); // State for password input

  const handleLogin = () => { // Function to handle login action
    // For simplicity, let's assume successful login if both fields are filled
    if (username.trim() !== '' && password.trim() !== '') { // Check if both username and password are filled
      setIsLoggedIn(true); // Set isLoggedIn state to true
    }
  };

  const handleLogout = () => { // Function to handle logout action
    setIsLoggedIn(false); // Set isLoggedIn state to false
    setUsername(''); // Reset username state
    setPassword(''); // Reset password state
  };

  return ( // Return JSX for rendering
    <div>
      {isLoggedIn ? ( // Conditional rendering based on isLoggedIn state
        <div>
          <p>Welcome, {username}!</p> // Display welcome message with username
          <button onClick={handleLogout}>Logout</button> // Button to handle logout action
        </div>
      ) : ( // If user is not logged in
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state on input change
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          />
          <button onClick={handleLogin}>Login</button> // Button to handle login action
        </div>
      )}
    </div>
  );
}

export default LoginForm; // Proposed Name: LoginForm.js

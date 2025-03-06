/**
 * UserRegistrationForm is a functional React component that renders a user registration form.
 * The component uses the `useState` hook to manage form input states, including the user's name,
 * email, password, and whether the terms and conditions are accepted.
 *
 * @author Manuela Cortés Granados (manuelacortésgranados@gmail.com)
 * @since 2025-03-06 07:41:16 GMT-5
 */

import React, { useState } from "react";

/**
 * Functional component for user registration form.
 * It uses the `useState` hook to manage form data and handle changes.
 */
const UserRegistrationForm = () => {
  // State to manage form inputs: name, email, password, and termsAccepted
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  /**
   * Handle input changes and update the corresponding state.
   * It supports text, email, password, and checkbox input types.
   * @param {object} event - The input change event.
   */
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /**
   * Handle form submission by preventing the default form behavior.
   * Logs the form data to the console (could be extended for further processing).
   * @param {object} event - The form submit event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    // Log form data to the console (or process it as needed)
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div style={styles.container}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="termsAccepted">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            I accept the terms and conditions
          </label>
        </div>

        <button type="submit" style={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
};

// Styles for the form elements
const styles = {
  container: {
    width: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    width: "100%",
    marginTop: "5px",
  },
  submitButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default UserRegistrationForm;

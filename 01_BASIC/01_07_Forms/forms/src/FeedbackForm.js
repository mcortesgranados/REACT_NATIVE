// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 7, 2024
// Time: 11:28 AM (GMT-5:00)

import React, { useState } from 'react';

function FeedbackForm() {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    // Updating the corresponding form input value in the state
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logging the form data to the console (you can send it to an API endpoint)
    console.log(formData);
    // Resetting form input values
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          {/* Input field for name */}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          {/* Input field for email */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          {/* Textarea field for message */}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;

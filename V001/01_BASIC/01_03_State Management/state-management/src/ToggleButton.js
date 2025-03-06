/*
In the provided code, React applies state management in the ToggleButton component. Specifically, it uses the useState hook to manage the state
 of the toggle button. Here's the relevant part of the code:
 
 // Define state for the toggle button
const [isToggled, setIsToggled] = useState(false);


This line initializes a state variable isToggled with an initial value of false, and a function setIsToggled to update the state. 
React's useState hook allows functional components to manage state without using class components.

*/
// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 7, 2024
// Time: 11:28 AM (GMT-5:00)

import React, { useState } from 'react';

// ToggleButton component to create a toggle button
function ToggleButton() {
  // Define state for the toggle button
  const [isToggled, setIsToggled] = useState(false);

  // Function to handle toggle button click event
  const handleToggle = () => {
    // Toggle the state when the button is clicked
    setIsToggled(prevState => !prevState);
  };

  return (
    <button 
      className={`toggle-button ${isToggled ? 'toggled' : ''}`} 
      onClick={handleToggle}
    >
      {isToggled ? 'ON' : 'OFF'}
    </button>
  );
}

export default ToggleButton; // Proposed Name: ToggleButton.js

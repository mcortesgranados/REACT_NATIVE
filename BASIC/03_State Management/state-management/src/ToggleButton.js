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

import React, { useState } from 'react';
import './App.css'
/**
we have a component EventHandlingExample that contains a button. 
When the button is clicked, the handleClick function is called, 
which updates the state to change the button text to 'Button clicked'. 
The onClick attribute on the button is used to attach the handleClick 
function as an event handler.
 */
const EventHandlingExample = () => {
  // State to store the button text
  const [buttonText, setButtonText] = useState('Click me');

  // Event handler function
  const handleClick = () => {
    setButtonText('Button clicked'); // Update the button text
  };

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default EventHandlingExample;

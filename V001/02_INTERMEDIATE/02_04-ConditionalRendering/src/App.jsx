import './App.css'
import React, { useState } from 'react';
/*
   the isLoggedIn state is used to conditionally render different content. 
   If isLoggedIn is true, it displays a welcome message and a logout button. 
   If isLoggedIn is false, it displays a message prompting the user to login and a login button.
*/
const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {/* Conditional rendering based on the 'isLoggedIn' state */}
      {isLoggedIn ? (
        <div>
          <h1>Welcome User!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default ConditionalRendering;
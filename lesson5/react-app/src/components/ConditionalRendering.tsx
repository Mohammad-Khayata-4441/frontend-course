import React, { useState } from 'react';

const ConditionalRenderingComponent = () => {
  // Define state variable to track whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login/logout button click
  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h2>Conditional Rendering Example</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome, User!</p>
          <button onClick={handleAuthClick}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in to continue.</p>
          <button onClick={handleAuthClick}>Login</button>
        </div>
      )}
    </div>
  );
};

export default ConditionalRenderingComponent;
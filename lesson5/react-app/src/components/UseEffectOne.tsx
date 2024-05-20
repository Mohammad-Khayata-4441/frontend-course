import React, { useState, useEffect } from 'react';

const UseEffectOne = () => {
  // State to hold the counter value
  const [count, setCount] = useState(0);

   
  // This effect runs whenever the 'count' state changes
  useEffect(() => {
    // Update the document title based on the count value
    document.title = `Count: ${count}`;

    // Cleanup function to reset the document title when the component unmounts
    return () => {
      document.title = 'React App';
    };


  }, [count]); // This effect runs whenever the 'count' state changes


  return (
    <div>
      <h2>Counter Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default UseEffectOne;

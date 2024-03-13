import React, { useState } from 'react';

function Counter() {
  // 1. Turn 'count' into a state variable with a default value of 0.
  let count = 0;

  // 2. Declare an increaseCount function to increase the count by 1

  // 3. Declare a decreaseCount function to decrease the count by 1

  // 4. Declare a resetCount function to reset the count to 0


  
  // Function to determine the count's display color
  const getCountColor = () => {
    if (count > 0) return 'green';
    if (count < 0) return 'red';
    return 'black'; // Default color for 0
  };

  
  return (
    <div>
      <h2 style={{ color: getCountColor() }}>Count: {count}</h2>
      {/* 5. Implement increaseCount function in onClick */}
      <button onClick={""}>Increase</button>
      {/* 6. Implement decreaseCount function in onClick */}
      <button onClick={""}>Decrease</button>
      {/* 7. Implement resetCount function in onClick */}
      <button onClick={""}>Reset</button>
    </div>
  );
}

export default Counter;

import React, { useState } from 'react';

const NumCounter = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
    // 2 updates en un mismo scope
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
      <h1>Clicks: {counter}</h1>
    </div>
  );
};

export default NumCounter;

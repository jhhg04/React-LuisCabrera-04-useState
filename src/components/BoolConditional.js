import React, { useState } from 'react';

const BoolConditional = () => {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <button onClick={() => setCondition(!condition)}>Toggle</button>
      {/* {condition ? <h1>Show Message True</h1> : <h1>Show Message False</h1>} */}
      {/* {condition && <h1>Show Message True</h1>} */}
      <h1>State Value is {condition.toString()}</h1>
    </div>
  );
};

export default BoolConditional;

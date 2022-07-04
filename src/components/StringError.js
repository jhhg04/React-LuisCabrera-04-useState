import React, { useState } from 'react';

const StringError = () => {
  const [error, setError] = useState('');
  return (
    <div>
      <button onClick={() => setError('Error 404')}>Error 404</button>
      <button onClick={() => setError('Error 500')}>Error 500</button>
      <button onClick={() => setError('')}>Success</button>
      {error && <h1> {error}</h1>}
    </div>
  );
};

export default StringError;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page5() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page 5</h1>
      <p>Welcome to Page 5!</p>
      <button onClick={() => navigate('/page4')}>Previous</button>
      <button onClick={() => navigate('/last')}>Next</button>
    </div>
  );
}

export default Page5;

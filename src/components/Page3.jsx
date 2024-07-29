import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page3() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page 3</h1>
      <p>Welcome to Page 3!</p>
      <button onClick={() => navigate('/page2')}>Previous</button>
      <button onClick={() => navigate('/page4')}>Next</button>
      <button onClick={() => navigate('/page4')}>Skip</button>
    </div>
  );
}

export default Page3;

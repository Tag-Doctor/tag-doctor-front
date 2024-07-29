import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page1() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page 1</h1>
      <p>Welcome to Page 1!</p>
      <button onClick={() => navigate('/')}>Previous</button>
      <button onClick={() => navigate('/page2')}>Next</button>
      <button onClick={() => navigate('/page2')}>Skip</button>
    </div>
  );
}

export default Page1;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page4() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page 4</h1>
      <p>Welcome to Page 4!</p>
      <button onClick={() => navigate('/page3')}>Previous</button>
      <button onClick={() => navigate('/page5')}>Next</button>
      <button onClick={() => navigate('/page5')}>Skip</button>
    </div>
  );
}

export default Page4;

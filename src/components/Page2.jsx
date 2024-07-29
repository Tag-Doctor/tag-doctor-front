import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page2() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page 2</h1>
      <button >?</button>
      <button  onClick={() => navigate('/')}>Home</button>
      <p>Welcome to Page 2!</p>
      <button onClick={() => navigate('/page1')}>Previous</button>
      <button onClick={() => navigate('/page3')}>Next</button>
      <button onClick={() => navigate('/page3')}>Skip</button>
    </div>
  );
}

export default Page2;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Page5.css';
import HomeLogo from '../imgs/Home_Logo.png';

function Page5() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page 5</h1>
      <button >?</button>
      <button  onClick={() => navigate('/')}>Home</button>
      <p>Welcome to Page 5!</p>
      <button onClick={() => navigate('/page4')}>Previous</button>
      <button onClick={() => navigate('/last')}>Next</button>
    </div>
  );
}

export default Page5;
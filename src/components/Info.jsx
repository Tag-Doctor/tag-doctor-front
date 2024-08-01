import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Info.css';
import HomeLogo from '../imgs/Home_Logo.png';
import logo from '../imgs/Logo.png';

function Info() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Info</h1>
      <p>Welcome to the last page!</p>
      <button className="home-button" onClick={() => navigate('/')}>
        <img src={HomeLogo} alt="Home" className="home-logo" />
        Home
      </button>
    </div>
  );
}

export default Info;

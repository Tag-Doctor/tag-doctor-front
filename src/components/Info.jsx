import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Info.css';
import HomeLogo from '../imgs/Home_Logo.png';
import logo from '../imgs/Logo_2.png';

function Info() {
  const navigate = useNavigate();

  return (
    <div>
      <img src={logo} alt="Logo" className="logo_2" />
      <h1>Information</h1>
      <p>What is Tag-Doctor?</p>
      <p>Health Examination and Information Web Services.</p>
      <button className="home-button" onClick={() => navigate('/')}>
        <img src={HomeLogo} alt="Home" className="home-logo" />
        Home
      </button>
    </div>
  );
}

export default Info;

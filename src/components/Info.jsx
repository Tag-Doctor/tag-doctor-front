import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Info.css';
import HomeLogo from '../imgs/Home_Logo.png';
import logo from '../imgs/Logo_2.png';

function Info() {
  const navigate = useNavigate();

  return (
      <div>
          <img src={logo} alt="Logo" className="logo_2"/>
          <h1>Information</h1>
          <p>What is Tag-Doctor?</p>
          <br/>
          <p>Health Examination and Information Web Services.</p>
          <p>Tag-Doctor is Google's Gemini web service for health diagnosis and information provision.</p>
          <p>The user selects a total of four details and finally enters the detailed symptoms into the search box,</p>
          <p>and the Gemini AI analyzes them and makes the diagnosis.</p>
          <br/>
          <p>This service is useful when you feel sick somewhere,</p>
          <p>not enough to go to the hospital, or when you have symptoms</p>
          <p>and you don't know the exact name of the disease.</p>
          <p>It was developed with the concept of providing more accurate symptom judgment</p>
          <p>using AI rather than information obtained through general search.</p>
          <button className="home-button" onClick={() => navigate('/')}>
              <img src={HomeLogo} alt="Home" className="home-logo"/>
              Home
          </button>
      </div>
  );
}

export default Info;

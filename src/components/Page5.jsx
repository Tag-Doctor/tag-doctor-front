import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Page5.css';
import HomeLogo from '../imgs/Home_Logo.png';
import logo from '../imgs/Logo.png';

function Page5() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedAge, selectedPart, selectedSubPart, selectedDetail } = location.state || {};

  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleNext = () => {
    if (additionalInfo) {
      navigate('/page6', {
        state: {
          selectedAge,
          selectedPart,
          selectedSubPart,
          selectedDetail,
          additionalInfo,
        },
      });
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <button className="home-button" onClick={() => navigate('/')}>
        <img src={HomeLogo} alt="Home" className="home-logo" />
        Home
      </button>
      <div className='question'>
        <h1>This is the last one!</h1>
      </div>
        
      <div className="progress">
        <div className="progress-step active">1</div> 
        <div className="progress-step active">2</div>
        <div className="progress-step active">3</div>
        <div className="progress-step active">4</div>
        <div className="progress-step active">5</div>
      </div>

      <div className="search-box">
        <textarea
          className="search-textarea"
          placeholder="Please write it down in detail."
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        ></textarea>
      </div>

      <div className="navigation-buttons">
        <button className="nav-button next-button" onClick={handleNext}>Search</button>
      </div>

      <footer className="footer">
        <h5>Tag-Doctor</h5>
      </footer>
    </div>
  );
}

export default Page5;

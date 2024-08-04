import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { postData } from './API';
import '../styles/Page5.css';
import HomeLogo from '../imgs/Home_Logo.png';
import logo from '../imgs/Logo.png';

function Page5() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedAge, selectedPart, selectedSubPart, selectedDetail } = location.state || {};
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [error, setError] = useState('');

  const handleNext = async () => {
    try {
      const response = await postData({
        selectedAge,
        selectedPart,
        selectedSubPart,
        selectedDetail,
        additionalInfo,
      });
      navigate('/page6', { state: { response, selectedAge, selectedPart, selectedSubPart, selectedDetail, additionalInfo } });
    } catch (error) {
      console.error('Error POST:', error);
      setError(`Error data: ${error.message}`);
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
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="navigation-buttons">
        <button className="nav-button" onClick={() => navigate('/page2')}>Prev</button>
        <button className="nav-button next-button" onClick={handleNext}>Search</button>
      </div>
      <footer className="footer">
        <h5>Tag-Doctor</h5>
      </footer>
    </div>
  );
}

export default Page5;

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Page2.css';
import HomeLogo from '../imgs/Home_Logo.png';
import logo from '../imgs/Logo.png';

function Page2() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPart, setSelectedPart] = useState('');

  const handleNext = () => {
    if (selectedPart) {
      navigate('/page3', {
        state: { ...location.state, selectedPart }
      });
    }
  };

  const bodyParts = {
    'Upper Body': ['Face', 'Abdomen', 'Arm', 'Chest', 'Head', 'Back'],
    'Lower Body': ['Thigh', 'Foot', 'Buttocks', 'Knee', 'Genital', 'Shin']
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <button className="home-button" onClick={() => navigate('/')}>
        <img src={HomeLogo} alt="Home" className="home-logo" />
        Home
      </button>
      <div className='question'>
        <h1>Which part? (1)</h1>
      </div>
      <div className="progress">
        <div className="progress-step active">1</div>
        <div className="progress-step active">2</div>
        <div className="progress-step">3</div>
        <div className="progress-step">4</div>
        <div className="progress-step">5</div>
      </div>
      <div className="part-buttons">
        {Object.keys(bodyParts).map((category, index) => (
          <button
            key={index}
            className={`part-button ${selectedPart === category ? 'selected' : ''}`}
            onClick={() => setSelectedPart(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="navigation-buttons">
        <button className="nav-button" onClick={() => navigate('/Page1')}>Prev</button>
        <button className="nav-button next-button" onClick={handleNext}>Next</button>
      </div>

      <footer className="footer">
        <h5>Tag-Doctor</h5>
      </footer>
    </div>
  );
}

export default Page2;

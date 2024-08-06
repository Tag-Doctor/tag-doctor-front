import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Page3.css';
import HomeLogo from '../imgs/Home_Logo.png';
import logo from '../imgs/Logo.png';

function Page3() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedPart } = location.state || {};
  const [selectedSubPart, setSelectedSubPart] = useState('');

  const handleNext = () => {
    if (selectedSubPart) {
      navigate('/page4', {
        state: { ...location.state, selectedSubPart }
      });
    }
  };

  const upperBodyParts = ['Face', 'Abdomen', 'Arm', 'Chest', 'Head', 'Back'];
  const lowerBodyParts = ['Thigh', 'Foot', 'Buttocks', 'Knee', 'Genital', 'Shin'];
  const bodyParts = selectedPart === 'Upper Body' ? upperBodyParts : lowerBodyParts;

  return (
    <div className="container">

      <button className="home-button" onClick={() => navigate('/')}>
        <img src={HomeLogo} alt="Home" className="home-logo" />
        Home
      </button>
      <div className='question'>
        <h1>Select Sub-Part</h1>
      </div>

      <div className="progress">
        <div className="progress-step active">1</div>
        <div className="progress-step active">2</div>
        <div className="progress-step active">3</div>
        <div className="progress-step">4</div>
        <div className="progress-step">5</div>
      </div>

      <div className="sub-part-buttons">
        {bodyParts.map((part, index) => (
          <button
            key={index}
            className={`sub-part-button ${selectedSubPart === part ? 'selected' : ''}`}
            onClick={() => setSelectedSubPart(part)}
          >
            {part}
          </button>
        ))}
      </div>

      <div className="navigation-buttons">
        <button className="nav-button" onClick={() => navigate('/page2')}>Prev</button>
        <button className="nav-button next-button" onClick={handleNext}>Next</button>
      </div>

      <footer className="footer">
        <h5>Tag-Doctor</h5>
      </footer>
    </div>
  );
}

export default Page3;
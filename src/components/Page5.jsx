import React, { useState } from 'react'; // useState 추가
import { useNavigate } from 'react-router-dom';
import '../styles/Page5.css';
import HomeLogo from '../imgs/Home_Logo.png';

function Page5() {
  const navigate = useNavigate();
  const [selectedPart, setSelectedPart] = useState('');

  const handleNext = () => {
    if (selectedPart) {
      navigate('/page6');
    }
  };

  return (
    <div className="container">
      <button className="info-button">?</button>
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

      <div className="input-box">
        <p>Please write it down in detail.</p>
      </div>

      <div className="navigation-buttons">
        <button className="nav-button" onClick={() => navigate('/page4')}>Previous</button>
        <button className="nav-button next-button" onClick={handleNext}>Next</button>
      </div>

      <footer className="footer">
        <h5>Tag-Doctor</h5>
      </footer>
    </div>
  );
}

export default Page5;

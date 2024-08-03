import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../imgs/Logo_1.png';
import '../styles/App.css';

function Home() {
  const navigate = useNavigate();

  const goToInfo = () => {
    navigate('/Info');
  };

  const goToPage1 = () => {
    navigate('/page1');
  };

  return (
    <div className="home">
      <button className="info-button" onClick={goToInfo}>
        ?
      </button>
      <img src={logo} alt="Logo" className="logo_1" />
      <button className="start-button" onClick={goToPage1}>
        Start
      </button>
    </div>
  );
}

export default Home;
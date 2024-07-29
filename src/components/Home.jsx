import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../imgs/Logo.png';
import '../styles/App.css';

function Home() {
  const navigate = useNavigate();

  const goToPage1 = () => {
    navigate('/page1');
  };

  return (
    <div className="home">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">Tag Doctor</h1>
      <button className="start-button" onClick={goToPage1}>
        Go to Page 1
      </button>
    </div>
  );
}

export default Home;

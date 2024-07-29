import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../imgs/Logo.png'; // 이미지 경로 수정
import '../styles/App.css'; // CSS 파일 import

function Home() {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/next');
  };

  return (
    <div className="home">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">Tag Doctor</h1>
      <button className="start-button" onClick={goToNextPage}>
        Start
      </button>
    </div>
  );
}

export default Home;

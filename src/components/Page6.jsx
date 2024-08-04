import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeLogo from '../imgs/Home_Logo.png';
import logo from '../imgs/Logo_3.png';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import '../styles/Page6.css';

function Page6() {
  const navigate = useNavigate();
  const location = useLocation();
  const { response, selectedAge, selectedPart, selectedSubPart, selectedDetail, additionalInfo } = location.state || {};
  const diagnosticResults = response?.message || '';

  return (
    <div className="page6-container">
      <div className="header">
        <img src={logo} alt="Logo" className="logo_3" />
        <button className="home-button" onClick={() => navigate('/')}>
          <img src={HomeLogo} alt="Home" className="home-logo" />
          Home
        </button>
      </div>
      <div className="content">
        <h1>Diagnostic results</h1>
        <div className="results-box">
          <p><strong>Age Group: </strong> {selectedAge}</p>
          <p><strong>Selected Part: </strong> {selectedPart}</p>
          <p><strong>Selected Sub-Part: </strong> {selectedSubPart}</p>
          <p><strong>Selected Detail: </strong> {selectedDetail}</p>
          <p><strong>Additional Info: </strong> {additionalInfo}</p>
        </div>
      </div>
      <div className="result-box">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} className="result-textarea">{diagnosticResults}</ReactMarkdown>
      </div>
      <div className="navigation-buttons">
        <button className="nav-button" onClick={() => navigate('/page1')}>Again</button>
      </div>
      <footer className="footer">
        <h5>Tag-Doctor</h5>
      </footer>
    </div>
  );
}

export default Page6;

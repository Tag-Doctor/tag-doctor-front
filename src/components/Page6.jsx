import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getData } from './API';
import HomeLogo from '../imgs/Home_Logo.png';
import logo from '../imgs/Logo_3.png';
import '../styles/Page6.css';

function Page6() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedAge, selectedPart, selectedSubPart, selectedDetail, additionalInfo } = location.state || {};
  const [diagnosticResults, setDiagnosticResults] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await getData();
        setDiagnosticResults(data.result);
      } catch (error) {
        console.error('Error data:', error);
        setError('Error results');
      }
    };
    fetchResults();
  }, []);

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
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <textarea
            className="result-textarea"
            value={diagnosticResults}
            disabled
          ></textarea>
        )}
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

import React from 'react';
import './styles/App.css';
import TagFunction from './components/TagFunction';

const App = () => {
  return (
    <div className="app-container">
      <div className="ratio-container">
        <div className="content">
          <header className="header">
            <div className="logo-container">
              <div className="notification-icon">❕</div>
            </div>
            <div className="logo-container">
              <div className="logo">Logo</div>
            </div>
          </header>
          <TagFunction />
        </div>
      </div>
    </div>
  );
};

export default App;
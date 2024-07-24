import React from 'react';
import './styles/App.css';

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
            <div className="search-container">
              <input type="text" className="search-input" placeholder="🔍" />
            </div>
            <div className="selection-container">
              <div className="selection-item">상체</div>
              <div className="selection-item">하체</div>
              {/* 필요에 따라 더 많은 선택 항목을 추가하세요 */}
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default App;
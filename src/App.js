import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NextPage from './components/NextPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </div>
  );
}

export default App;

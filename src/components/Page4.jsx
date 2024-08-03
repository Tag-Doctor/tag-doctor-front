import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Page4.css';
import HomeLogo from '../imgs/Home_Logo.png';
import logo from '../imgs/Logo.png';

function Page4() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSubPart, ...restState } = location.state || {};
  const [selectedDetail, setSelectedDetail] = useState('');

  useEffect(() => {
    if (!selectedSubPart) {
      navigate('/page3');
    }
  }, [selectedSubPart, navigate]);

  const handleNext = () => {
    if (selectedDetail) {
      navigate('/page5', {
        state: { ...restState, selectedSubPart, selectedDetail }
      });
    }
  };

  const details = {
    'Face': ['Forehead', 'Cheeks', 'Jaw', 'Lips', 'Nose', 'Eyes'], 
    /*'Eye', 'Nose', 'Mouth', 'Ear', 'Chin', 'Tooth'*/ 
    'Abdomen': ['Upper Abdomen', 'Lower Abdomen', 'Right Side', 'Left Side', 'Navel', 'Lower Back'],
    'Arm': ['Upper Arm', 'Forearm', 'Elbow', 'Wrist', 'Hand', 'Shoulder'],
    'Chest': ['Upper Chest', 'Lower Chest', 'Right Side', 'Left Side', 'Breastbone', 'Ribs'],
    'Head': ['Scalp', 'Forehead', 'Temples', 'Back of the Head', 'Ears', 'Neck'],
    'Back': ['Upper Back', 'Lower Back', 'Right Side', 'Left Side', 'Spine', 'Shoulder Blades'],
    'Thigh': ['Upper Thigh', 'Middle Thigh', 'Lower Thigh', 'Inner Thigh', 'Outer Thigh', 'Back of Thigh'],
    'Foot': ['Heel', 'Arch', 'Ball', 'Toe', 'Instep', 'Sole'],
    'Buttocks': ['Upper Buttocks', 'Lower Buttocks', 'Left Buttock', 'Right Buttock', 'Buttock Crease', 'Hip'],
    'Knee': ['Kneecap', 'Inner Knee', 'Outer Knee', 'Front of Knee', 'Back of Knee', 'Knee Joint'],
    'Genital': ['External Genitalia', 'Perineum', 'Penis/Vagina', 'Scrotum/Labia', 'Urethra', 'Prostate/Uterus'],
    'Shin': ['Front of Shin', 'Inner Shin', 'Outer Shin', 'Upper Shin', 'Lower Shin', 'Shinbone']
  };

  const detailParts = details[selectedSubPart] || [];

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <button className="home-button" onClick={() => navigate('/')}>
        <img src={HomeLogo} alt="Home" className="home-logo" />
        Home
      </button>
      <div className='question'>
        <h1>Select Detail</h1>
      </div>

      <div className="progress">
        <div className="progress-step active">1</div>
        <div className="progress-step active">2</div>
        <div className="progress-step active">3</div>
        <div className="progress-step active">4</div>
        <div className="progress-step">5</div>
      </div>

      <div className="detail-buttons">
        {detailParts.map((detail, index) => (
          <button
            key={index}
            className={`detail-button ${selectedDetail === detail ? 'selected' : ''}`}
            onClick={() => setSelectedDetail(detail)}
          >
            {detail}
          </button>
        ))}
      </div>

      <div className="navigation-buttons">
        <button className="nav-button" onClick={() => navigate('/page3', { state: restState })}>Prev</button>
        <button className="nav-button next-button" onClick={handleNext}>Next</button>
      </div>

      <footer className="footer">
        <h5>Tag-Doctor</h5>
      </footer>
    </div>
  );
}

export default Page4;
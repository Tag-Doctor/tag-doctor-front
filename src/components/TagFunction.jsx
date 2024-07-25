import React, { useState } from 'react';
import '../styles/TagFunction.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [tags, setTags] = useState([]);
  const [currentSelection, setCurrentSelection] = useState([]);

  const tagHierarchy = {
    'Upper half of the body': ['Face', 'Abdomen', 'Arms', 'Chest', 'Head', 'Back'],
    'Lower half of the body': ['Thigh', 'Foot', 'Buttocks', 'Knee', 'Genital', 'Shin'],
    'Face': ['Mouth', 'Nose', 'Ear', 'Eye', 'Jaw', 'Teeth'],
    'Abdomen': ['Pit of the stomach', 'Upper abdomen', 'Lower abdomen', 'Abs'],
    'Arms': ['Shoulder', 'Upper arm', 'Forearm', 'Elbow', 'Wrist', 'Finger'],
    'Chest': ['Lung', 'Rib', 'Heart', 'Clavicle'],
    'Head': ['Mouth', 'Nose', 'Ear', 'Eye', 'Jaw', 'Teeth'],
    'Back': ['Shoulder blade', 'Lumbar', 'Waist', 'Nape', 'Armpit'],
    'Thigh': ['Front thigh', 'Back thigh', 'Inner thigh', 'Outer thigh'],
    'Foot': ['Sole', 'Inner ankle', 'Outer ankle', 'Instep', 'Toe'],
    'Buttocks': ['Anus', 'Coccyx', 'Buttock'],
    'Knee': ['Front knee', 'Back knee', 'Inner knee', 'Outer knee'],
    'Genital': ['Prostate', 'Urethra', 'Bladder'],
    'Shin': ['Front shin', 'Back shin', 'Inner shin', 'Outer shin']
  };

  const handleTagClick = (tag) => {
    if (tagHierarchy[tag]) {
      setCurrentSelection(tagHierarchy[tag]);
      setStep(step + 1);
    } else {
      if (!tags.includes(tag)) {
        setTags((prevTags) => [...prevTags, tag]);
      }
      setCurrentSelection([]);
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter(tag => tag !== tagToRemove));
  };

  const handleNextClick = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePreviousClick = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSkipClick = () => {
    setStep(5);
  };

  return (
    <div className="app-container">
      <div className="ratio-container">
        <div className="progress-bar">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className={`progress-step ${step >= s ? 'active' : ''}`}></div>
          ))}
        </div>
        <div className={`screen ${step === 1 ? 'active' : ''}`}>
          <h2>Your age?</h2>
          <div className="button-group">
            <button onClick={() => handleTagClick('Less than 12')}>Less than 12</button>
            <button onClick={() => handleTagClick('12-19')}>12-19</button>
            <button onClick={() => handleTagClick('20-29')}>20-29</button>
            <button onClick={() => handleTagClick('30-39')}>30-39</button>
            <button onClick={() => handleTagClick('40-49')}>40-49</button>
            <button onClick={() => handleTagClick('50-59')}>50-59</button>
            <button onClick={() => handleTagClick('60-69')}>60-69</button>
            <button onClick={() => handleTagClick('70 or older')}>70 or older</button>
          </div>
        </div>
        <div className={`screen ${step === 2 ? 'active' : ''}`}>
          <h2>The upper and lower parts of the body</h2>
          <button onClick={() => handleTagClick('Upper half of the body')}>Upper half of the body</button>
          <button onClick={() => handleTagClick('Lower half of the body')}>Lower half of the body</button>
        </div>
        <div className={`screen ${step === 3 ? 'active' : ''}`}>
          <h2>Which part? (1)</h2>
          {currentSelection.map((subTag, index) => (
            <button key={index} onClick={() => handleTagClick(subTag)}>{subTag}</button>
          ))}
        </div>
        <div className={`screen ${step === 4 ? 'active' : ''}`}>
          <h2>Which part? (2)</h2>
          {currentSelection.map((subTag, index) => (
            <button key={index} onClick={() => handleTagClick(subTag)}>{subTag}</button>
          ))}
        </div>
        <div className={`screen ${step === 5 ? 'active' : ''}`}>
          <h2>This is the last one!</h2>
          <input type="text" className="search-input" placeholder="Please write it down in detail." />
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePreviousClick}>Previous</button>
          <button onClick={handleNextClick}>Next</button>
          <button onClick={handleSkipClick}>Skip</button>
        </div>
      </div>
    </div>
  );
};

export default App;

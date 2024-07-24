// src/components/TagFunction.jsx
import React, { useState } from 'react';
import '../styles/TagFunction.css';

const TagFunction = () => {
  const [tags, setTags] = useState([]);

  const handleTagClick = (tag) => {
    if (!tags.includes(tag)) {
      setTags((prevTags) => [...prevTags, tag]);
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="tag-function-container">
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="🔍"
          readOnly
          value="" // 검색창 빈 텍스트
        />
        <div className="tags-display">
          {tags.map((tag, index) => (
            <div key={index} className="tag-item">
              <span className="tag-text">#{tag}</span>
              <button className="remove-btn" onClick={() => handleTagRemove(tag)}>x</button>
            </div>
          ))}
        </div>
      </div>
      <div className="selection-container">
        <div onClick={() => handleTagClick('상체')} className="selection-item">상체</div>
        <div onClick={() => handleTagClick('하체')} className="selection-item">하체</div>
        {/* 필요시 추가 */}
      </div>
    </div>
  );
};

export default TagFunction;

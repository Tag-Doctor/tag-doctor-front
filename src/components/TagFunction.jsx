import React, { useState } from 'react';
import '../styles/TagFunction.css';

const TagFunction = () => {
  const [tags, setTags] = useState([]);
  const [currentSelection, setCurrentSelection] = useState([]);

  const tagHierarchy = {
    상체: ['얼굴', '복부', '팔', '가슴', '머리', '등'],
    하체: ['허벅지', '발', '엉덩이', '무릎', '생식기', '정강이'],
    얼굴: ['입', '코', '귀', '눈', '턱', '이'],
    복부: ['명치', '윗배', '아랫배', '복근'],
    팔: ['어깨', '상박', '하박', '팔꿈치', '손목', '손가락'],
    가슴: ['폐', '갈비뼈', '심장', '쇄골'],
    머리: ['입', '코', '귀', '눈', '턱', '이'],
    등: ['견갑', '요추', '허리', '목덜미', '겨드랑이'],
    허벅지: ['앞허벅지', '뒷허벅지', '안쪽 허벅지', '바깥쪽 허벅지'],
    발: ['발바닥', '발목안쪽', '발목 바깥쪽', '발등', '발가락'],
    엉덩이: ['항문', '꼬리뼈', '엉덩이'],
    무릎: ['무릎 앞', '무릎 뒤', '무릎 안쪽', '무릎 바깥쪽'],
    생식기: ['전립선', '요로', '방광'],
    정강이: ['앞정강이', '뒷정강이', '안쪽 정강이', '바깥쪽 정강이'],
  };

  const handleTagClick = (tag) => {
    if (tagHierarchy[tag]) {
      setCurrentSelection(tagHierarchy[tag]);
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

  return (
    <div className="tag-function-container">
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="🔍" // 디자인 변경 예정
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
      {currentSelection.length > 0 ? (
        <div className="sub-selection-container">
          {currentSelection.map((subTag, index) => (
            <div key={index} onClick={() => handleTagClick(subTag)} className="sub-selection-item">
              {subTag}
            </div>
          ))}
        </div>
      ) : (
        <div className="selection-container">
          <div onClick={() => handleTagClick('상체')} className="selection-item">상체</div>
          <div onClick={() => handleTagClick('하체')} className="selection-item">하체</div>
        </div>
      )}
    </div>
  );
};

export default TagFunction;

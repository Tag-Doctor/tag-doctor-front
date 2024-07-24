// App.js
import React, { useState } from 'react';
import './styles/App.css';

const categories = ["상체", "하체"];
const subCategories1 = ["머리", "얼굴", "가슴", "복부", "팔", "등"];
const subCategories2 = ["눈", "코", "입", "귀", "턱", "이"];

function App() {
  const [page, setPage] = useState(0);
  const [hashtags, setHashtags] = useState([]);

  const handleCategoryClick = (category) => {
    setHashtags([category]);
    setPage(1);
  };

  const handleSubCategoryClick = (subCategory) => {
    setHashtags([...hashtags, subCategory]);
    setPage(page + 1);
  };

  const renderPageContent = () => {
    switch (page) {
      case 0:
        return (
          <div className="categories">
            {categories.map(category => (
              <div className="category" onClick={() => handleCategoryClick(category)}>
                {category}
              </div>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="categories">
            {subCategories1.map(subCategory => (
              <div className="sub-category" onClick={() => handleSubCategoryClick(subCategory)}>
                {subCategory}
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="categories">
            {subCategories2.map(subCategory => (
              <div className="sub-category" onClick={() => handleSubCategoryClick(subCategory)}>
                {subCategory}
              </div>
            ))}
          </div>
        );
      case 3:
        return (
          <div>
            <textarea placeholder="증상이 어떤지 간략하게 적어주세요!" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="search-bar">
          <input type="text" value={hashtags.join(' ')} readOnly />
          <button className="search-button">
            <img src="search-icon.png" alt="search" />
          </button>
        </div>
        {renderPageContent()}
      </header>
    </div>
  );
}

export default App;

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="search-bar">
          <input type="text" placeholder="해쉬태그 또는 직접 입력" />
          <button className="search-button">
            <img src="search_icon.png" alt="Search" />
          </button>
        </div>
        <div className="categories">
          <div className="category">머리</div>
          <div className="category">가슴</div>
          <div className="category">복부</div>
          <div className="category">팔</div>
          <div className="category">다리</div>
        </div>
      </header>
    </div>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Personal Website</h1>
      <p>Hi, I'm Ivan Widjaja. Welcome to my personal website where you can learn more about me and view my portfolio.</p>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <iframe
        src="https://www.iwidjaja.com"
        title="Portfolio"
        style={{ width: '100%', height: '80vh', border: 'none' }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardGrid from './components/cardgrid.js';
import Hero from './components/hero.js';
import NavBar from './components/navBar.js';
import './App.css';
import Home from './components/home/home.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/libaray" element={<CardGrid />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardGrid from './components/cardgrid.js';

import NavBar from './components/navBar.js';
import './App.css';
import Home from './components/home/home.js';

function App() {
  return (
    <Router>
      <div className="bg-transparent">
        <NavBar />
        <Routes>
          <Route path="/libaray" element={<CardGrid />} />
          <Route path="/" element={<Home />} />
          <Route path='*' element={<h1 style={{color:"black"}}>Not Found 404</h1>}/>
        </Routes>

        

      </div>
    </Router>
  );
}

export default App;

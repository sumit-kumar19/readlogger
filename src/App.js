import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Example from './components/menu.js';
import Testimonials from './components/testimones.js';
import StepsCard from './components/steps.js';
import CardGrid from './components/test.js';
import Hero from './components/hero.js';
import NavBar from './components/navBar.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/libary" element={<CardGrid />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

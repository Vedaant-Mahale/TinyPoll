import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Auth from './auth';
import Dashboard from './dashboard';
import PollBooth from './PollBooth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/poll" element={<PollBooth />} />
      </Routes>
    </Router>
  );
}

export default App

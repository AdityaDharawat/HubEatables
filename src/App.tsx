import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
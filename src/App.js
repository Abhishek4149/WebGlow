
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Career from './components/Career';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css'; // For global styles if needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
        <Route path="/aboutus" element={<AboutUs />} />
       
        <Route path="/career" element={<Career />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

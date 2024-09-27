// src/components/Home.js
import React from 'react';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <motion.div className="home-container">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Empowering Your Business with Innovative IT Solutions</h1>
        <p>Transform your digital presence with our expert services.</p>
        <a href="/contact" className="cta-button">Get Started</a>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="services-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Custom websites that enhance user engagement.</p>
          </div>
          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>User-friendly mobile applications for all platforms.</p>
          </div>
          <div className="service-card">
            <h3>Digital Marketing</h3>
            <p>Strategies to boost your online visibility and traffic.</p>
          </div>
          <div className="service-card">
            <h3>Cloud Solutions</h3>
            <p>Secure and scalable cloud infrastructure.</p>
          </div>
          <div className="service-card">
            <h3>Graphic Design</h3>
            <p>Creative designs that represent your brand effectively.</p>
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Us</h2>
        <p>At WebGlow, we strive to provide exceptional IT services that drive success for our clients. Our team of experts is dedicated to innovation and excellence in everything we do.</p>
        <a href="AboutUs" className="cta-button">Learn More</a>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="testimonials-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Client Testimonials</h2>
        <div className="testimonials-list">
          <blockquote>
            "WebGlow transformed our online presence and increased our sales significantly!"
          </blockquote>
          <blockquote>
            "Their team is highly professional and dedicated to delivering results."
          </blockquote>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;

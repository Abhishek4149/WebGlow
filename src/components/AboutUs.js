// src/components/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
      className="about-us-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Header Section with Animation */}
      <motion.section 
        className="about-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.img 
          src="/images/about-us-banner.jpg" 
          alt="About Us Banner" 
          className="about-banner"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          About Us
        </motion.h1>
        <p>At [Your Company], we are passionate about delivering cutting-edge IT solutions, innovative marketing strategies, and world-class design services to help businesses thrive in the digital age.</p>
      </motion.section>

      {/* IT Services Section with Staggered Animations */}
      <motion.section 
        className="about-it-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 }
          }
        }}
      >
        <h2>Our IT Services</h2>
        <p>As a leading IT development company, we provide a full spectrum of services designed to help businesses harness the power of technology.</p>
        <motion.ul>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>Web Development:</strong> 
            We build high-performance, scalable websites and web applications using the latest technologies.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>Mobile App Development:</strong>
            Seamless, user-friendly mobile applications for iOS and Android platforms.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>Cloud Solutions:</strong>
            Scalable and secure cloud infrastructure using AWS, Google Cloud, and Azure.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>Cybersecurity:</strong>
            Comprehensive security services to protect against cyber threats.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>AI & Machine Learning:</strong>
            Develop AI-driven applications and machine learning models for automation.
          </motion.li>
        </motion.ul>
        <motion.img 
          src="/images/it-services.jpg" 
          alt="IT Services" 
          className="about-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
      </motion.section>

      {/* Marketing Services Section */}
      <motion.section 
        className="about-marketing-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 }
          }
        }}
      >
        <h2>Our Marketing Services</h2>
        <p>Our marketing services include advanced strategies in SEO, social media marketing, content marketing, PPC, and email marketing.</p>
        <motion.ul>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>SEO:</strong> 
            Improve your website’s ranking through advanced keyword optimization and technical audits.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>Social Media Marketing:</strong>
            Engage your audience through effective social media campaigns.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>Content Marketing:</strong>
            Develop audience-centric content such as blogs, videos, and infographics.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>PPC Advertising:</strong>
            Drive traffic with targeted paid advertising campaigns on Google Ads and social platforms.
          </motion.li>
        </motion.ul>
        <motion.img 
          src="/images/marketing.jpg" 
          alt="Marketing Services" 
          className="about-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
      </motion.section>

      {/* Design Services Section with Interactive Animations */}
      <motion.section 
        className="about-design-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 }
          }
        }}
      >
        <h2>Our Design Services</h2>
        <p>We specialize in UI/UX, graphic design, and brand identity development to make your business stand out.</p>
        <motion.ul>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>UI/UX Design:</strong> 
            User-centered design for intuitive web and mobile interfaces.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>Graphic Design:</strong>
            Logos, brochures, and social media graphics that reflect your brand's vision.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>Website Design:</strong>
            Responsive, fast-loading websites for optimal user experience.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <strong>Animation & Interactive Media:</strong>
            Create dynamic animations and interactive web features to engage your audience.
          </motion.li>
        </motion.ul>
        <motion.img 
          src="/images/design-services.jpg" 
          alt="Design Services" 
          className="about-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
      </motion.section>

      {/* Team Section with Hover Effects */}
      <motion.section 
        className="about-team"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 }
          }
        }}
      >
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <motion.div 
            className="team-member"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <img src="/images/team1.jpg" alt="Team Member 1" className="team-image"/>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </motion.div>
          <motion.div 
            className="team-member"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <img src="/images/team2.jpg" alt="Team Member 2" className="team-image"/>
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </motion.div>
          <motion.div 
            className="team-member"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <img src="/images/team3.jpg" alt="Team Member 3" className="team-image"/>
            <h3>Michael Johnson</h3>
            <p>Lead Developer</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        className="about-achievements"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 }
          }
        }}
      >
        <h2>Our Achievements</h2>
        <motion.div 
          className="achievement-cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delayChildren: 0.3, staggerChildren: 0.2 }
            }
          }}
        >
          <motion.div className="achievement-card" whileHover={{ scale: 1.05 }}>
            <h3>100+ Clients</h3>
            <p>We've successfully served over 100 clients across various industries.</p>
          </motion.div>
          <motion.div className="achievement-card" whileHover={{ scale: 1.05 }}>
            <h3>50+ Projects</h3>
            <p>Delivered over 50 large-scale projects with excellence and innovation.</p>
          </motion.div>
          <motion.div className="achievement-card" whileHover={{ scale: 1.05 }}>
            <h3>10 Awards</h3>
            <p>Recognized with 10 awards for outstanding work in IT, marketing, and design.</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default AboutUs;

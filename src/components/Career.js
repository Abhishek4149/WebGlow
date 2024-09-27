// src/components/Career.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';


const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, position, resume } = formData;
    const templateParams = {
      from_name: name,
      to_name: 'WebGlow Team', // Change this to your company name or team
      message: `Position Applied: ${position}\nEmail: ${email}`,
      reply_to: email,
    };

    try {
      // Send the email
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID');

      // Optional: Handle file upload separately if needed
      if (resume) {
        const resumeData = new FormData();
        resumeData.append('resume', resume);

        // Send the resume data to your email (can use emailjs or other service)
        // For example, you can store the resume temporarily or use another method to handle it.
      }

      alert('Your application has been submitted successfully!');
      setFormData({
        name: '',
        email: '',
        position: '',
        resume: null,
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  return (
    <motion.div className="career-container">
      <motion.section
        className="career-form-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Careers at WebGlow</h1>
        <p>Join our team and help us build innovative IT solutions!</p>
        
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position Applying For:</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="resume">Upload Your Resume:</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">Submit Application</button>
        </form>
      </motion.section>
    </motion.div>
  );
};

export default Career;

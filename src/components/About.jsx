// src/About.js

import React from 'react';
import '/public/stylesheets/About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are dedicated to providing the best service
        and quality to our customers. Our team is made up of experienced
        professionals who are passionate about what they do.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to deliver exceptional value to our customers through
        innovative solutions and unparalleled service. We strive to exceed
        expectations and build lasting relationships with our clients.
      </p>
      <h2>Our Team</h2>
      <p>
        Our team consists of experts in various fields, working together to
        achieve common goals. We value collaboration, creativity, and
        commitment to excellence.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or would like to learn more about our
        services, please feel free to contact us. We look forward to hearing
        from you!
      </p>
    </div>
  );
};

export default About;

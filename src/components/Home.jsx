// pages/Home.js
import React from 'react';
import '/public/stylesheets/Home.css'; // Make sure this path is correct

const Home = () => {
  return (
    <div className="home-container">
    <header className="home-header">
      <h1>Welcome to Our Website</h1>
      <p>Your journey to awesome content starts here.</p>
    </header>
    <section className="home-content">
      <div className="home-feature">
        <h2>Feature 1</h2>
        <p>Discover amazing features and benefits.</p>
      </div>
      <div className="home-feature">
        <h2>Feature 2</h2>
        <p>Experience seamless and intuitive design.</p>
      </div>
      <div className="home-feature">
        <h2>Feature 3</h2>
        <p>Enjoy top-notch support and resources.</p>
      </div>
    </section>
    <footer className="home-footer">
      <p>&copy; 2024 ZenZone. All rights reserved.</p>
    </footer>
  </div>
  );
}

export default Home;

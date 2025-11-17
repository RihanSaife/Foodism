import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Foodism</h1>
        <p>Delivering happiness, one meal at a time</p>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, Foodism began with a simple mission: to make delicious, 
            high-quality food accessible to everyone. What started as a small kitchen 
            operation has grown into a beloved community of food lovers.
          </p>
          <p>
            We believe that great food brings people together. Our chefs use only the 
            freshest ingredients, sourced locally whenever possible, to create meals 
            that nourish both body and soul.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🥗</div>
              <h3>Quality Ingredients</h3>
              <p>We source only the finest, freshest ingredients for our dishes.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">⏱️</div>
              <h3>Fast Delivery</h3>
              <p>Hot food, delivered fast. Always on time, always delicious.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">😊</div>
              <h3>Customer Focus</h3>
              <p>Your satisfaction is our priority. We're here to serve you better.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We're committed to eco-friendly practices in all our operations.</p>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍🍳</div>
              <h3>Alex Johnson</h3>
              <p>Head Chef</p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Sarah Williams</h3>
              <p>Operations Manager</p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>Michael Chen</h3>
              <p>Delivery Coordinator</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
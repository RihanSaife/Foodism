import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Delicious food delivered to your doorstep.</h1>
          <p className="hero-subtitle">
            Experience the best meals from local restaurants, prepared fresh and delivered fast.
          </p>
          <Link to="/menu" className="order-button">
            Order Now
          </Link>
        </div>
      </section>
      
      <section className="features">
        <div className="feature">
          <div className="feature-icon">⏱️</div>
          <h3>Fast Delivery</h3>
          <p>Get your food delivered in under 30 minutes or it's free!</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">🥗</div>
          <h3>Fresh Ingredients</h3>
          <p>We source only the freshest ingredients for our dishes.</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">😊</div>
          <h3>Happy Customers</h3>
          <p>Join thousands of satisfied customers who love our service.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
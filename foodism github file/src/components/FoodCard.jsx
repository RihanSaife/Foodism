import React, { useState } from 'react';
import './FoodCard.css';

const FoodCard = ({ item, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(item);
    setTimeout(() => setIsAdding(false), 300);
  };

  return (
    <div className="food-card">
      <img src={item.image} alt={item.name} className="food-image" />
      <div className="food-info">
        <h3 className="food-name">{item.name}</h3>
        <p className="food-description">{item.description}</p>
        <div className="food-footer">
          <span className="food-price">₹{item.price.toFixed(2)}</span>
          <button 
            className={`add-button ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
          >
            {isAdding ? 'Added!' : 'Add +'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
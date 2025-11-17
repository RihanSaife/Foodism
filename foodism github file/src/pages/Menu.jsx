import React from 'react';
import FoodCard from '../components/FoodCard';
import foodItems from '../data/foodItems';
import { useCart } from '../context/CartContext';
import './Menu.css';

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <div className="menu">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {foodItems.map(item => (
          <FoodCard 
            key={item.id} 
            item={item} 
            onAddToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
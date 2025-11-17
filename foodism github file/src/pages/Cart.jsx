import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, coupon, updateQuantity, removeFromCart, getCartTotal, getCartTotalWithDiscount, getCouponDiscount, clearCart, applyCoupon, removeCoupon } = useCart();
  const navigate = useNavigate();
  const subtotal = getCartTotal();
  const discount = getCouponDiscount();
  const deliveryCharge = subtotal > 0 ? 2.99 : 0;
  const total = getCartTotalWithDiscount() + deliveryCharge;
  
  const [couponCode, setCouponCode] = useState('');
  const [couponMessage, setCouponMessage] = useState('');

  const handleCheckout = () => {
    if (cart.length === 0) return;
    navigate('/checkout');
  };
  
  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponMessage('Please enter a coupon code');
      return;
    }
    
    const result = applyCoupon(couponCode);
    setCouponMessage(result.message);
    
    if (result.success) {
      setCouponCode('');
    }
  };
  
  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponMessage('Coupon removed');
  };

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h1>Your Cart</h1>
        <div className="cart-empty">
          <p>Your cart is empty</p>
          <button 
            className="continue-shopping"
            onClick={() => navigate('/menu')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
        </div>
        
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          
          {coupon && (
            <div className="summary-item coupon-applied">
              <div>
                <span>Coupon ({coupon.code})</span>
                <button className="remove-coupon" onClick={handleRemoveCoupon}>Remove</button>
              </div>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
          )}
          
          <div className="summary-item">
            <span>Delivery Charge</span>
            <span>₹{deliveryCharge.toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          
          <div className="coupon-section">
            <h3>Apply Coupon</h3>
            <div className="coupon-input-group">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="coupon-input"
              />
              <button 
                className="apply-coupon-btn"
                onClick={handleApplyCoupon}
              >
                Apply
              </button>
            </div>
            {couponMessage && (
              <div className={`coupon-message ${couponMessage.includes('Invalid') || couponMessage.includes('Please') ? 'error' : 'success'}`}>
                {couponMessage}
              </div>
            )}
          </div>
          
          <button 
            className="checkout-btn"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
          <button 
            className="clear-cart-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
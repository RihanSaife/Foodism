import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, name, total } = location.state || {};
  
  const [orderStatus, setOrderStatus] = useState('Order Placed');
  
  // Simulate order status updates
  useEffect(() => {
    if (!orderId) return;
    
    const statusUpdates = [
      { status: 'Preparing', delay: 5000 },
      { status: 'Out for Delivery', delay: 10000 },
      { status: 'Delivered', delay: 15000 }
    ];
    
    let timeoutId;
    
    const updateStatus = (index) => {
      if (index >= statusUpdates.length) return;
      
      timeoutId = setTimeout(() => {
        setOrderStatus(statusUpdates[index].status);
        updateStatus(index + 1);
      }, statusUpdates[index].delay);
    };
    
    updateStatus(0);
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [orderId]);

  // If no order data, redirect to home
  if (!orderId) {
    navigate('/');
    return null;
  }

  return (
    <div className="confirmation">
      <div className="confirmation-card">
        <div className="confirmation-header">
          <div className="checkmark">✓</div>
          <h1>Order Confirmed!</h1>
        </div>
        
        <div className="confirmation-details">
          <p className="confirmation-message">
            Thank you, <strong>{name}</strong>! Your order has been received.
          </p>
          
          <div className="order-info">
            <p><strong>Order ID:</strong> #{orderId}</p>
            <p><strong>Total Amount:</strong> ₹{total}</p>
          </div>
          
          <div className="order-status">
            <h2>Order Status</h2>
            <div className="status-timeline">
              <div className={`status-item ${orderStatus === 'Order Placed' ? 'active' : ''}`}>
                <div className="status-dot"></div>
                <div className="status-label">Order Placed</div>
              </div>
              
              <div className={`status-item ${orderStatus === 'Preparing' ? 'active' : ''}`}>
                <div className="status-dot"></div>
                <div className="status-label">Preparing</div>
              </div>
              
              <div className={`status-item ${orderStatus === 'Out for Delivery' ? 'active' : ''}`}>
                <div className="status-dot"></div>
                <div className="status-label">Out for Delivery</div>
              </div>
              
              <div className={`status-item ${orderStatus === 'Delivered' ? 'active' : ''}`}>
                <div className="status-dot"></div>
                <div className="status-label">Delivered</div>
              </div>
            </div>
            
            <div className="current-status">
              Current Status: <strong>{orderStatus}</strong>
            </div>
          </div>
          
          <button 
            className="continue-btn"
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
import React from 'react';
import './Offers.css';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Weekend Special",
      description: "Get 20% off on all orders above ₹30 on weekends",
      code: "WEEKEND20",
      expiry: "Valid until Dec 31, 2025"
    },
    {
      id: 2,
      title: "First Order",
      description: "50% off on your first order up to ₹15",
      code: "FIRST50",
      expiry: "Valid for new users only"
    },
    {
      id: 3,
      title: "Happy Hour",
      description: "Buy 1 Get 1 Free on all drinks between 2-4 PM",
      code: "HAPPY24",
      expiry: "Daily from 2-4 PM"
    }
  ];

  return (
    <div className="offers">
      <h1 className="offers-title">Special Offers</h1>
      <div className="offers-grid">
        {offers.map(offer => (
          <div key={offer.id} className="offer-card">
            <div className="offer-header">
              <h2 className="offer-title">{offer.title}</h2>
            </div>
            <div className="offer-body">
              <p className="offer-description">{offer.description}</p>
              <div className="offer-code">
                <span>Use code:</span>
                <strong>{offer.code}</strong>
              </div>
              <p className="offer-expiry">{offer.expiry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
import React from 'react';
import './shopping-card.styles.scss';

const ShoppingCard = ({ title, imageUrl }) => {
  return (
    <div className="shopping-card">
      <div className="shopping-card__overlay-text">
        <h2 className="shopping-card__title">{title}</h2>
        <h3 className="shopping-card__sub-title">Shop Now</h3>
      </div>
    </div>
  );
};

export default ShoppingCard;

import React from 'react';
import './shopping-card.styles.scss';

const ShoppingCard = ({ title, imageUrl, size }) => {
  const cssClass = size
    ? `shopping-card shopping-card--large`
    : 'shopping-card';
  const bgImage = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className={cssClass}>
      <div className="shopping-card__bg-img" style={bgImage}></div>
      <div className="shopping-card__overlay-text">
        <h2 className="shopping-card__title">{title}</h2>
        <h3 className="shopping-card__sub-title">Shop Now</h3>
      </div>
    </div>
  );
};

export default ShoppingCard;

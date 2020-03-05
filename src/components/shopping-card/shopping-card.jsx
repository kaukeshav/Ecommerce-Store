import React from 'react';
import { withRouter } from 'react-router-dom';
import './shopping-card.styles.scss';

const ShoppingCard = ({ title, imageUrl, size, linkUrl, match, history }) => {
  const cssClass = size
    ? `shopping-card shopping-card--large`
    : 'shopping-card';
  const requireImg = require(`../../${imageUrl}`);
  const bgImage = {
    backgroundImage: `url(${requireImg})`
  };

  return (
    <div
      className={cssClass}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="shopping-card__bg-img" style={bgImage}></div>
      <div className="shopping-card__overlay-text">
        <h2 className="shopping-card__title">{title.toUpperCase()}</h2>
        <h3 className="shopping-card__sub-title">Shop Now</h3>
      </div>
    </div>
  );
};

export default withRouter(ShoppingCard);

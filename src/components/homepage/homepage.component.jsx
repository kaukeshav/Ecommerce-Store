import React from 'react';
import './homepage.styles.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="card-grid">
        {/* Card Lists Starts */}
        <div className="shopping-card">
          <div className="shopping-card__overlay-text">
            <h2 className="shopping-card__title">Hats</h2>
            <h3 className="shopping-card__sub-title">Shop Now</h3>
          </div>
        </div>
        <div className="shopping-card">
          <div className="shopping-card__overlay-text">
            <h2 className="shopping-card__title">Caps</h2>
            <h3 className="shopping-card__sub-title">Shop Now</h3>
          </div>
        </div>
        <div className="shopping-card">
          <div className="shopping-card__overlay-text">
            <h2 className="shopping-card__title">Boots</h2>
            <h3 className="shopping-card__sub-title">Shop Now</h3>
          </div>
        </div>
        <div className="shopping-card">
          <div className="shopping-card__overlay-text">
            <h2 className="shopping-card__title">Shades</h2>
            <h3 className="shopping-card__sub-title">Shop Now</h3>
          </div>
        </div>
        {/* Card Lists Ends */}
      </div>
    </div>
  );
};

export default Homepage;

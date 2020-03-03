import React from 'react';
import './homepage.styles.scss';

import ShoppingGrid from '../../components/shopping-grid/shopping-grid';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="card-grid">
        <ShoppingGrid></ShoppingGrid>
      </div>
    </div>
  );
};

export default Homepage;

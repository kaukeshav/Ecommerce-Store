import React from 'react';
import './homepage.styles.scss';

import ShoppingGrid from '../../components/shopping-grid/shopping-grid';

const Homepage = () => {
  return (
    <div className="homepage">
      <ShoppingGrid></ShoppingGrid>
    </div>
  );
};

export default Homepage;

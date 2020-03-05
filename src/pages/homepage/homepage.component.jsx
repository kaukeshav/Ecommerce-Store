import React from 'react';
import './homepage.styles.scss';

import { ShoppingGrid } from '../../components';

const Homepage = () => {
  return (
    <div className="home-page">
      <ShoppingGrid></ShoppingGrid>
    </div>
  );
};

export default Homepage;

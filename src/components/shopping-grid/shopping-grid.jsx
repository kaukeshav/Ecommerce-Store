import React, { Component } from 'react';
import SHOP_ITEMS_DATA from '../../data/shop-items.data';
import { ShoppingCard } from '../index';
import './shopping-grid.styles.scss';

export default class ShoppingGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingItems: SHOP_ITEMS_DATA
    };
  }

  render() {
    return (
      <div className="shopping-grid">
        {this.state.shoppingItems.map(({ id, ...shoppingItem }) => (
          <ShoppingCard key={id} {...shoppingItem}></ShoppingCard>
        ))}
      </div>
    );
  }
}

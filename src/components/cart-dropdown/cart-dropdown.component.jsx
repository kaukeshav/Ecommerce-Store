import React from 'react';
import { connect } from 'react-redux';

import { CartItem, CustomButton } from '../index';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, hidden }) => (
  <div className={`cart-dropdown ${hidden ? 'hidden' : ''}`}>
    <div className='cart-items'>
      {cartItems.map(item => (
        <CartItem item={item} key={item.id}></CartItem>
      ))}
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems, hidden } }) => ({
  cartItems,
  hidden
});
export default connect(mapStateToProps)(CartDropdown);

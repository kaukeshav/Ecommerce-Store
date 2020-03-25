import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/modules/cart/cart.selectors';
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

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(CartDropdown);

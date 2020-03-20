import React from 'react';

import { CustomButton } from '../index';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden }) => (
  <div className='cart-dropdown'>
    {hidden ? 'true' : 'false'}
    <div className='cart-items'></div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

export default CartDropdown;

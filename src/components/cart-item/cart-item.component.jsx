import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  const requireImg = require(`../../${imageUrl}`);

  return (
    <div className='cart-item'>
      <img className='cart-item__img' src={requireImg} alt={name + ' item'} />
      <div className='cart-item__details'>
        <p className='name'>{name}</p>
        <p className='name'>
          {quantity} X ${price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;

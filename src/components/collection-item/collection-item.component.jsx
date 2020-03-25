import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';
import { CustomButton } from '../index';
import { addCartItem } from '../../redux/modules/cart/cart.actions';

const CollectionItem = ({ item, addCartItem }) => {
  const { imageUrl, name, price } = item;
  const requireImg = require(`../../${imageUrl}`);
  const bgImage = {
    backgroundImage: `url(${requireImg})`
  };

  return (
    <div className='collection-item'>
      <div className='collection-item__bg-img' style={bgImage}></div>
      <div className='collection-item__footer'>
        <p className='name'>{name}</p>
        <p className='price'>{price}</p>
      </div>
      <CustomButton inverted onClick={event => addCartItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addCartItem: item => dispatch(addCartItem(item))
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);

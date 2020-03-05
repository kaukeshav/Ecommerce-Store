import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ imageUrl, name, price }) => {
  const requireImg = require(`../../${imageUrl}`);
  const bgImage = {
    backgroundImage: `url(${requireImg})`
  };
  return (
    <div className="collection-item">
      <div className="collection-item__bg-img" style={bgImage}></div>
      <div className="collection-item__footer">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};
export default CollectionItem;

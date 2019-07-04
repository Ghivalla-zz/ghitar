import React from 'react';

import './gear-item.styles.scss';

const GearItem = ({ id, name, price, imageUrl }) => (
  <div className='gear-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='gear-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default GearItem;
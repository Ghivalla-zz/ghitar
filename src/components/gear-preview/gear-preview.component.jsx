import React from 'react';
import GearItem from '../gear-item/gear-item.component';
import './gear-preview.styles.scss';

const GearPreview = ({ title, items }) => (
  <div className='gear-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <GearItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
export default GearPreview;
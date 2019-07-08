import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import GearPreview from '../gear-preview/gear-preview.component';

import { selectGearsForPreview } from '../../redux/shop/shop.selectors';

import './gears-overview.styles.scss';

const GearsOverview = ({ gears }) => (
  <div className='gears-overview'>
    {gears.map(({ id, ...otherGearProps }) => (
      <GearPreview key={id} {...otherGearProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  gears: selectGearsForPreview
});

export default connect(mapStateToProps)(GearsOverview);
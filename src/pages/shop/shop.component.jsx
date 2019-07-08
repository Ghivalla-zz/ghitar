import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import GearsOverview from '../../components/gears-overview/gears-overview.component';
import GearPage from '../gear/gear.component';

const ShopPage =({match})=>(
	<div className='shop-page'>
		<Route exact path={`${match.path}`} component={GearsOverview}/>
		<Route path={`${match.path}/:gearId`} component={GearPage}/>
	</div>
)
export default ShopPage;
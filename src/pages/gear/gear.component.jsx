import React from 'react';
import {connect} from 'react-redux';
import {selectGear} from '../../redux/shop/shop.selectors';
import './gear.styles.scss';
import 	GearItem from '../../components/gear-item/gear-item.component';

const GearPage = ({gear}) =>{
	const {title,items} = gear;
	console.log(gear);
	return(
		<div className='gear-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
			{	
				items.map(item=>(
					<GearItem key={item.id} item={item}/> 
				))
			}
			</div>
		</div>
	);
}
const mapStateToProps = (state,ownProps)=>({
	gear : selectGear(ownProps.match.params.gearId)(state)
})

export default connect(mapStateToProps)(GearPage);
import React, {Component} from 'react';
import SHOP_DATA from './shop.data.js';
import GearPreview from '../../components/gear-preview/gear-preview.component';

class ShopPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			collections: SHOP_DATA
		};
	}
	render(){
		const {collections}=this.state;
		return(
			<div className='shop-page'>
				{
					collections.map(({ id, ...otherCollectionProps})=>(
						<GearPreview key={id} {...otherCollectionProps}/>
					))
				}
			</div>
		)
	}
}
export default ShopPage;
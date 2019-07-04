import React,{Component} from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component{
	constructor(){
		super()
		this.state={
			sections:[
        {
          title: 'Pedals',
          imageUrl: 'https://cdn.pixabay.com/photo/2016/08/15/16/56/guitar-1595862_960_720.jpg',
          id: 1
        },
        {
          title: 'Amps',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/09/02/15/31/guitar-amplifier-3649042_960_720.jpg',
          id: 2
        },
        {
          title: 'Accessories',
          imageUrl: 'https://cdn.pixabay.com/photo/2016/08/12/12/51/music-accessories-1588402_960_720.jpg',
          id: 3
        },
        {
          title: 'Guitars',
          imageUrl: 'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          size: 'large',
          id: 4
        },
        {
          title: 'Basses',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/10/20/07/34/bass-997349_960_720.jpg',
          size: 'large',
          id: 5
        }
      ]
		}
	}
	render(){
		return(
			<div className='directory-menu'>
				{
					this.state.sections.map(({title ,imageUrl, id, size})=>(
						<MenuItem key={id} imageUrl={imageUrl} title={title} size={size}/>
					))
				}
			</div>
		)
	}
}
export default Directory;
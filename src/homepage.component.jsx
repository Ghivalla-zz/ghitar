import React from 'react';
import './homepage.styles.scss';

const HomePage = () =>{
	return(
		<div className='homepage'>

			<div className='directory-menu'>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Pedals</h1>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
			</div>

			<div className='directory-menu'>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Amps</h1>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
			</div>

			<div className='directory-menu'>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Accessories</h1>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
			</div>

			<div className='directory-menu'>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Guitar</h1>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
			</div>

			<div className='directory-menu'>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Bass</h1>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
			</div>

		</div>
	)
}
export default HomePage;
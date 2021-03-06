import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'



function Logo(){
	return (
		<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-5" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
	 			<div className="Tilt-inner pa3">
	 				<img className='logo_img' alt="brain" src={brain}/>
	 			</div>
			</Tilt>
		</div>
		)
};

export default Logo;
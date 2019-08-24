import React from 'react';
import './ImageLinkForm.css'

function ImageLinkform(){
	return (
		<div className="tc">
			<p className="f3">
				{'This can detect face! Give it a try!'}
			</p>
			<div className='center'>
				<div className="center shadow-5 pa3 ma0">
					<input className="f4 center w-70" type='text'/>
					<button className="f4 grow ph3 pv2 w-30 link pointer dib white bg-light-purple">{'detect'}</button>
				</div>
			</div>
		</div>
		)
};

export default ImageLinkform;
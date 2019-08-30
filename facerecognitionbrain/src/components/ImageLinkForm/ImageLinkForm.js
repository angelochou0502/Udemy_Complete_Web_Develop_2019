import React from 'react';
import './ImageLinkForm.css'

const ImageLinkform = ({onInputChange, onButtonSubmit}) => {
	return (
		<div className="tc">
			<p className="f3">
				{'This can detect face! Give it a try!'}
			</p>
			<div className='center center-form'>
				<div className="center-form shadow-5 pa3 ma0">
					<input className="f4 center-form w-70" type='text' onChange={onInputChange}/>
					<button 
                        className="f4 grow ph3 pv2 w-30 link pointer dib white bg-light-purple"
                        onClick={onButtonSubmit}
                    >{'detect'}</button>
				</div>
			</div>
		</div>
		)
};

export default ImageLinkform;
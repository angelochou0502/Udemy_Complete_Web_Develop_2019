import React, {Component} from 'react';
import Navigation from '../components/Navigation/Navigation'
import Logo from '../components/Logo/Logo'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import Rank from '../components/Rank/Rank'
import Particles from 'react-particles-js';
import './App.css'

const particlesParam = {
	particles: {
	    number: {
	        value: 160,
	        density: {
	            "enable": true
	        }
	    },
	    size: {
	        value: 10,
	        random: true
	    },
	    move: {
	        direction: "bottom",
	        out_mode: "out"
	    },
	    line_linked: {
	        enable: false,
	    }
	}
}

class App extends Component{
	constructor() {
		super();
	}
	render() {
		return (
	    <div className="avenir">
	    	<Particles className='particles absolute--fill' params={particlesParam}/>
	    	<Navigation />
	    	<Logo />
	    	<Rank />
	    	<ImageLinkForm />
	    	{/* <FaceRecognition />*/ }
	      
	    </div>
	    );
	}
}

export default App;

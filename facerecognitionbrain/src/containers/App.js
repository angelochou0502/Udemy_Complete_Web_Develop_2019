import React, {Component} from 'react';
import Navigation from '../components/Navigation/Navigation'
import Logo from '../components/Logo/Logo'
import ColorList from '../components/ColorList/ColorList'
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import Rank from '../components/Rank/Rank'
import SignIn from '../components/SignIn/SignIn'
import Register from '../components/Register/Register'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css'

const app = new Clarifai.App({
 apiKey: '490782671bf547b1aa0c1f1fac20782f'
});

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
        this.state = {
            input: '',
            imgURL:'',
            box: {},
            colors: [],
            route: 'SignIn',
            isSignin: false
        }
	}


    calculateFaceLocation = (data) => {
        const clarifaiFace = data.results[0].outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('input_img');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    displayFaceBox = (box) => {
        console.log(box);
        this.setState({box: box});
    }

    onInputChange = (event) => {
        this.setState({input:event.target.value})
    }

    onRouteChange = (route) => {
        if (route === 'signout'){
            this.setState({isSignin:false})
        } else if (route === 'home'){
            this.setState({isSignin:true})
        }
        this.setState({route: route})
    }

    onButtonSubmit = () => {
        console.log('click')
        this.setState({imgURL: this.state.input})
        app.workflow.predict(
            'face-color', 
            this.state.input)
            .then(response => {
                this.displayFaceBox(this.calculateFaceLocation(response))
                console.log(response)
                const colors = response.results[0].outputs[1].data.colors;
                this.setState({colors: colors})
                console.log(colors)
            })
            .catch(err => console.log(err))
    }

	render() {
        const { route, isSignin, box, imgURL, colors } = this.state;
		return (
	    <div className="avenir">
	    	<Particles className='particles absolute--fill' params={particlesParam}/>
	    	<Navigation onRouteChange={this.onRouteChange} isSignin={isSignin}/>
            { route === 'home'
            ? <div> 
                <Logo />
                <Rank />
                <ImageLinkForm 
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}
                />
                <div className='flex'>
                    <div className='w-60'>
                        <FaceRecognition box={box} imgURL={imgURL} />
                    </div>
                    <div className='w-40'>
                        <ColorList colorList={colors} />
                    </div>
                </div>
               </div>
            : ( route === 'Register'
                ? <Register onRouteChange={this.onRouteChange}/>
                : <SignIn onRouteChange={this.onRouteChange}/>
               )
            }
	    </div>
	    );
	}
}

export default App;

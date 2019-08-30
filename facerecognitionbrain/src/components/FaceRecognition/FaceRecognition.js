import React from 'react'
import './FaceRecognition.css'

function FaceRecognition({imgURL, box}){
    return (
        <div className='show_img ma' >
            <div className='mt2 absolute'>
                <img id='input_img' src={imgURL} alt='' width='500px' height='auto'/>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
        )

}

export default FaceRecognition;
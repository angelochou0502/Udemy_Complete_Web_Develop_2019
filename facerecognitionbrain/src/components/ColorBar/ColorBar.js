import React from 'react'
import './ColorBar.css'

function ColorBar({color}){
    return (
        <div className='ma2 shadow-5 br3 pa1 flex w-70' style={{backgroundColor:color.raw_hex}}>
            <div className='color-info'> {color.w3c.name} {color.w3c.hex} </div>
            <div className='color-percentage'> {(color.value * 100).toFixed(0)}% </div>
        </div>
        )

}

export default ColorBar;
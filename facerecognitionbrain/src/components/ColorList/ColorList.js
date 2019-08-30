import React from 'react'
import ColorBar from '../ColorBar/ColorBar'

function ColorList({colorList}){
    const colorArray = colorList.map( (color, idx) => {
        return (
            <ColorBar
                key={idx}
                color={color}
            />
        );
    });
    if(colorArray.length > 0){
        return (
            <div>
                <h2> Color </h2>
                {colorArray}
            </div>
            )

    } else {
        return (
            <div></div>)
    }
    

}

export default ColorList;
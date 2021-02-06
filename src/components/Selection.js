import React, { useState } from "react";

const Selection=(props)=>{
    const [bacColor, changeBacColor]=useState({ background:'' } )
    // console.log(bacColor)
    const fillColor=(nextBackground)=>{
        changeBacColor({background: nextBackground})
    }
    return(
        <div className="fix-box" style={bacColor} onClick={()=>props.applyColor(fillColor)}>
            <h2 className="subheading">Selection</h2>
        </div>
    )
}

export default Selection;
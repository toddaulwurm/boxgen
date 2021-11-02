import React, { useState } from "react";

const ColorForm = (props) =>{
    const [color, setColor] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        props.onNewColor(color)
    };
    return(
        <form onSubmit={handleSubmit}>
            <h1>Color</h1>
            <input type="text" placeholder="Enter your color here" value={ color } onChange={(e)=>setColor(e.target.value)}></input>
            <input type="submit" value="Add Color" />
        </form>
    )
}
    
export default ColorForm
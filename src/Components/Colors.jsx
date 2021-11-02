import React from 'react';

const Colors = (props) => {
    const flexer ={
        display: 'flex'
    }
    return ( 
        <div style={flexer}>
            {props.colors.map((color, i)=>{
                return (<div style={{backgroundColor: color, height: '40px', width: '40px', margin: '10px',}}>{color}</div>)
                }
            )}
        </div>
    ); 
}
    
export default Colors;
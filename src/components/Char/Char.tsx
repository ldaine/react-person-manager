import React from 'react'; 
import { ICharProps } from './ICharProps';

const Char = (props:ICharProps) => {  
    const style = {
        inlineBlock: '16px', 
        padding: '16px', 
        margin: '2px', 
        border: '1px solid black', 
        display: "inline-block"
    }
    return (
        <div style={style} onClick= {() => props.onClick(props.charIndex)}>
            {props.character}
        </div>
    )
}; 

export default Char; 
import React from 'react'; 

interface ICharProps {
    character: string; 
    onClick: (index: number) => void; 
    charIndex: number; 
}
const Char = (props:ICharProps) => {  
    const style = {
        inlineBlock: '16px', 
        padding: '16px', 
        margin: '16px', 
        border: '1px solid black', 
    }
    return (
        <div style={style} onClick= {() => props.onClick(props.charIndex)}>{props.character}</div>
    )
}; 

export default Char; 
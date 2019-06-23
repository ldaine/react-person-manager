import React from 'react'; 
import IValidationProps from './IValidationProps';
import { MESSAGES } from './ValidationConstants';

const Validation = (props:IValidationProps) => {
    let message:string; 

    if(!!props.textLength && props.textLength > 0){
        if(props.textLength < 5){
            message = MESSAGES.TextTooShort; 
        } else {
            message = MESSAGES.TextLongEnough; 
        }
    } else {
        message = ""; 
    }
    

    return (
        <p>{message}</p>
    )
}; 

export default Validation; 
import React from 'react';
import { IPerson } from './IPersonProps';

const Person = (props: IPerson) => {
    return(  
        <div onClick={()=> props.switchNameHandler('John P')}>
            <p>Hi there, my name is {props.name}, I am {props.age} years old. </p>
            <p>{props.children}</p>
        </div>
    )
    
}

export default Person; 
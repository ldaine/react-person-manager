import React from 'react';
import { IPerson } from './IPersonProps';
import PersonModuleScss from './Person.module.scss';

const Person = (props: IPerson) => {
    return(  
        <div onClick={()=> props.switchNameHandler('John P')}>
            <p>Hi there, my name is {props.name}, I am {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.onChangeNameHandler} value={props.name}/>
        </div>
    )
    
}

export default Person;
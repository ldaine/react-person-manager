import React from 'react';
import PersonModuleScss from './Person.module.scss';
import { IPersonProps } from './IPersonProps';

const Person = (props: IPersonProps) => {
    return(  
        <div className={PersonModuleScss.Person} onClick={()=> props.switchNameHandler('John P')}>
            <div className={PersonModuleScss.PersonHeader}>
                <p>MORE</p>
                <div>
                    <ul>
                        <li>ID: 000</li>
                        <li>Name: {props.name}</li>
                        <li>Age: {props.age}</li>
                        <li>{props.children}</li>
                    </ul>
                </div>
            </div>
            <div className={PersonModuleScss.PersonMain}>
                <h1>{props.name}</h1>
                <p>Hi, my name is {props.name}, I am {props.age} years old. </p>
                <p>{props.children}</p>
                <input type="text" onChange={props.onChangeNameHandler} value={props.name}/>
            </div>
        </div>
    )
    
}

export default Person;
import React from 'react';
import PersonModuleScss from './Person.module.scss';
import { IPersonProps } from './IPersonProps';

const Person = (props: IPersonProps) => {
    return(  
        <div className={PersonModuleScss.Person}>
            <div className={PersonModuleScss.PersonHeader}>
                <p>MORE</p>
                <div>
                    <ul>
                        <li>ID: {props.person.id}</li>
                        <li>Name: {props.person.name}</li>
                        <li>Age: {props.person.age}</li>
                        <li>{props.children}</li>
                    </ul>
                </div>
            </div>
            <div className={PersonModuleScss.PersonMain}>
                <h1>{props.person.name}</h1> <button onClick={() => props.switchNameHandler(props.person.id)}>Update to random</button>
                <p>Hi, my name is {props.person.name}, I am {props.person.age} years old. </p>
                <input type="text" onChange={(event) => props.onChangeNameHandler(event, props.person.id)} value={props.person.name}/>
            </div>
        </div>
    )
    
}

export default Person;
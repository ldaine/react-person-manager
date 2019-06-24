import React from 'react';
import { IPersonmanagerProps } from './IPersonmanagerProps';
import { IPersonmanagerState } from './IPersonmanagerState';
import AppModuleScss from '../../App.module.scss';
import Person from './../Person/Person';
import { IPerson } from './../../models/IPerson';
import { PERSONS, NAMES } from '../../DATA';

class PersonManager extends React.Component<IPersonmanagerProps, IPersonmanagerState>{
    constructor(props: IPersonmanagerProps){
        super(props)

        this.state = {
            persons: this.props.persons, 
            isVisible:false
        };
    }

    render() {
        return (
            <div>
                <button className={AppModuleScss.PrimaryButton} onClick={this.togglePersonsHandler}>Toggle Visibility</button>
                <button className={AppModuleScss.PrimaryButton} onClick={this.resetData}>Reset</button>
                {   
                    !!this.state.isVisible ?  
                        <div>
                            {
                                this.state.persons.map((person:IPerson, index) => {
                                    return  <Person person={person} 
                                                    key={person.id}
                                                    switchNameHandler={this.switchNameHandler}
                                                    onChangeNameHandler={this.onChangeNameHandler}>
                                                    Hobbies: {person.hobbies.join(', ')}
                                            </Person>
                                    })
                            }
                        </div>
                    :
                        <div><p>Content is hidden. Click on 'Togggle Visibility' to show the content.</p></div>
                }
            </div>
        );
    }

      private switchNameHandler = (id:number):void =>{
        const name = NAMES[Math.floor((Math.random() * NAMES.length) + 0)]
        const persons:IPerson[] = [...this.state.persons]; 

        const personIndex = persons.findIndex(p => p.id === id); 

        if(personIndex > -1){
            persons[personIndex].name = name; 
            this.setState({persons: persons}); 
        }
      }
    
      private onChangeNameHandler = (event: React.ChangeEvent<HTMLInputElement>, id: number):void =>{

        const name = event.target.value; 
        const persons:IPerson[] = [...this.state.persons]; 

        const personIndex = persons.findIndex(p => p.id === id); 

        if(personIndex > -1){
            persons[personIndex].name = name; 
            this.setState({persons: persons}); 
        }
      }
    
      private togglePersonsHandler = ():void =>{
            this.setState(prevState =>{
                return {
                    ...prevState, 
                    isVisible: !prevState.isVisible
                }
            })
      }

      private resetData = () => {
        this.setState(prevState => {
            return {
                ...prevState, 
                persons: [...PERSONS]
            }
        })
      }
}

export default PersonManager; 
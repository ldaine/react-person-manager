import React from 'react';
import { IPersonmanagerProps } from './IPersonmanagerProps';
import { IPersonmanagerState } from './IPersonmanagerState';
import AppModuleScss from '../../App.module.scss';
import Person from './../Person/Person';
import { IPerson } from './../../models/IPerson';
import { PERSONS } from '../../DATA';


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
                    !!this.state.isVisible && 
                    <div>
                        {
                            this.state.persons.map((person:IPerson) => {
                                return  <Person name={person.name} age={person.age} 
                                                switchNameHandler = {this.switchNameHandler}
                                                onChangeNameHandler={this.onChangeNameHandler}>
                                                Hobbies: {person.hobbies.join(', ')}
                                        </Person>
                                })
                        }
                    </div>
                }
            </div>
        );
    }

      private switchNameHandler = (name: string):void =>{

        this.setState({persons: [
          {name: name, age: Math.floor((Math.random() * 100) + 1), hobbies: ['Action Figures', 'Amateur Geology']}, 
          {name: name, age: Math.floor((Math.random() * 100) + 1), hobbies: ['Airplane Combat', 'Arcade Games', 'Poetry']}, 
          {name: name, age: Math.floor((Math.random() * 100) + 1), hobbies: ['Rapping', 'RC Cars']}
        ]})
      }
    
      private onChangeNameHandler = (event: React.ChangeEvent<HTMLInputElement>):void =>{
    
        this.setState({persons: [
          {name: event.target.value, age: 28, hobbies: ['Action Figures', 'Amateur Geology']}, 
          {name: 'John P.', age: 28, hobbies: ['Airplane Combat', 'Arcade Games', 'Poetry']}, 
          {name: 'John P.', age: 28, hobbies: ['Rapping', 'RC Cars']}
        ]})
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
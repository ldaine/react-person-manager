import React, { Component, ChangeEvent } from 'react';
import AppModuleScss from './App.module.scss';
import Person from './components/Person/Person'; 
import { IPerson } from './models/IPerson';

interface IAppProps {
  appName: string; 
}

interface IAppState {
  persons: IPerson[]; 
}

class App extends Component<IAppProps, IAppState> {
 
  constructor(props: IAppProps){
    super(props)

    this.state = {
      persons: this.getPersons()
    };
  }
  
  render() {
    return (
      <div className={AppModuleScss.App}>
      <h1>{this.props.appName}</h1>
      <button className={AppModuleScss.PrimaryButton} onClick={this.switchNameHandler.bind(this, 'Estelle')}>Switch name</button>
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
    );
  }

  private getPersons = (): IPerson[] => {
    return [
      {name: "Dorothy D Mendieta", age: 36, hobbies: ['Action Figures', 'Amateur Geology']}, 
      {name: "Vilma A Cesar", age: 74, hobbies: ['Airplane Combat', 'Arcade Games', 'Poetry']}, 
      {name: "Spencer K Beeson", age: 24, hobbies: ['Rapping', 'RC Cars']}
    ]
  }

  private switchNameHandler = (name: string):void =>{

    this.setState({persons: [
      {name: name, age: Math.floor((Math.random() * 100) + 1), hobbies: ['Action Figures', 'Amateur Geology']}, 
      {name: name, age: Math.floor((Math.random() * 100) + 1), hobbies: ['Airplane Combat', 'Arcade Games', 'Poetry']}, 
      {name: name, age: Math.floor((Math.random() * 100) + 1), hobbies: ['Rapping', 'RC Cars']}
    ]})
  }

  private onChangeNameHandler = (event: ChangeEvent<HTMLInputElement>):void =>{

    this.setState({persons: [
      {name: event.target.value, age: 28, hobbies: ['Action Figures', 'Amateur Geology']}, 
      {name: 'John P.', age: 28, hobbies: ['Airplane Combat', 'Arcade Games', 'Poetry']}, 
      {name: 'John P.', age: 28, hobbies: ['Rapping', 'RC Cars']}
    ]})
  }
}

export default App;

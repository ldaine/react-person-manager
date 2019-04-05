import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 
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
      <div className="App">
      <h1>{this.props.appName}</h1>
      <button onClick={this.onSwitchNameButtonClicked}>Switch name</button>
      {
        this.state.persons.map((person:IPerson) => {
          return <Person name={person.name} age={person.age}>Hobbies: {person.hobbies.join(', ')}</Person>
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

  private onSwitchNameButtonClicked = ():void =>{
      this.setState({persons: [
        {name: "Dorothy", age: 36, hobbies: ['Action Figures', 'Amateur Geology']}, 
        {name: "Vilma", age: 74, hobbies: ['Airplane Combat', 'Arcade Games', 'Poetry']}, 
        {name: "Spencer", age: 24, hobbies: ['Rapping', 'RC Cars']}
      ]})
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 
import { IPerson } from './models/IPerson';

interface IAppProps {
  appName: string; 
}
class App extends Component {
  
  private persons:IPerson[]; 
  
  constructor(props:IAppProps){
    super(props)
    this.persons = [
      {name: "Dorothy D Mendieta", age: 36, hobbies: ['Action Figures', 'Amateur Geology']}, 
      {name: "Vilma A Cesar", age: 74, hobbies: ['Airplane Combat', 'Arcade Games', 'Poetry']}, 
      {name: "Spencer K Beeson", age: 24, hobbies: ['Rapping', 'RC Cars']}
    ]
  }
  
  render() {
    return (
      <div className="App">
      <h1>Hi, I am an React app!</h1>
      {
        this.persons.map((person:IPerson) => {
          return <Person name={person.name} age={person.age}>Hobbies: {person.hobbies.join(', ')}</Person>
        })
      }
      </div>
    );
  }
}

export default App;

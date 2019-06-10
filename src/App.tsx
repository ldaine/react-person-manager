import React from 'react';
import AppModuleScss from './App.module.scss';
import { IPerson } from './models/IPerson';
import PersonManager from './components/PersonManager/PersonManager';

interface IAppProps {
  appName: string; 
}

interface IAppState {
  persons: IPerson[]; 
}

class App extends React.Component<IAppProps, IAppState> {
 
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
        <PersonManager persons={this.state.persons} />
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

}


export default App;

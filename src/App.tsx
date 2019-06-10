import React from 'react';
import AppModuleScss from './App.module.scss';
import { IPerson } from './models/IPerson';
import PersonManager from './components/PersonManager/PersonManager';
import { PERSONS } from './DATA'; 

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
    return PERSONS; 
  }

}

export default App;

import React from 'react';
import AppModuleScss from './App.module.scss';
import { IPerson } from './models/IPerson';
import PersonManager from './components/PersonManager/PersonManager';
import { PERSONS } from './DATA'; 
import Validation from './components/Validation/Validation';

interface IAppProps {
  appName: string; 
}

interface IAppState {
  persons: IPerson[]; 
  value: string; 
}

class App extends React.Component<IAppProps, IAppState> {
 
  constructor(props: IAppProps){
    super(props)
    this.state = {
      persons: this.getPersons(), 
      value: ''
    };
  }
  
  render() {
    return (
      <div className={AppModuleScss.App}>
        <h1>{this.props.appName}</h1>
        <div>
            <input type="text" name="name" placeholder="name" value={this.state.value} onChange={this.onInputChanged}/>
        </div>
        <Validation textLength={this.state.value.length} />
        <PersonManager persons={this.state.persons} />
      </div>
    );
  }

  private getPersons = (): IPerson[] => {
    return PERSONS; 
  }

  private onInputChanged = (event:React.ChangeEvent<HTMLInputElement>):void => {
    this.setState({value: event.target.value}); 
  }

}

export default App;

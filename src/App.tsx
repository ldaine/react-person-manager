import React from 'react';
import AppModuleScss from './App.module.scss';
import { IPerson } from './models/IPerson';
import PersonManager from './components/PersonManager/PersonManager';
import { PERSONS } from './DATA'; 
import Validation from './components/Validation/Validation';
import Char from './components/Char/Char';

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
        {
          this.state.value.split('').map((element, index) => {
            return (<Char character={element} 
                          key={index} 
                          charIndex={index} 
                          onClick={this.onCharClicked}/> )
          })
        }
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

  private onCharClicked = (charIndex:number) => {
    console.log(charIndex); 
    let value:string[] = this.state.value.split(''); 
    value.splice(charIndex, 1).join('');
    
    this.setState({value: value.join('')})
  }

}

export default App;

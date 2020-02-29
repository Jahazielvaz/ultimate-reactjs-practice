import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 32},
      {name: 'Jessica', age: 26},
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 34},
        {name: 'Vincent', age: 2},
        {name: 'Valerie', age: 26}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 34},
        {name: event.target.value, age: 20},
        {name: 'Valerie', age: 26}
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, "Vicious")}>Switch Name</button>
        <h1><Person name={this.state.persons[0].name} age={this.state.persons[0].age} /></h1>
        <h1 ><Person click={() => this.switchNameHandler("Jazzy")} name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} >My Hobbies: French</Person></h1>
        <h1><Person name={this.state.persons[2].name} age={this.state.persons[2].age} /></h1>
      </div>
    );
  }
}

export default App;

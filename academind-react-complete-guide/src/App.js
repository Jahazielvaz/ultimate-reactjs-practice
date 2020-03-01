import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 32},
      {name: 'Jessica', age: 26},
    ],
    usernames: [
      {name: 'Jazzy'},
      {name: 'Michelle'},
      {name: 'Breanna'}
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

  usernameChangeHandler = () => {
    this.setState({
      usernames: [
        {name: "vaz"},
        {name: 'Michelle'},
        {name: 'Breanna'}
      ]
    })
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <button style={style} onClick={this.switchNameHandler.bind(this, "Vicious")}>Switch Name</button>
        <h1><Person name={this.state.persons[0].name} age={this.state.persons[0].age} /></h1>
        <h1 ><Person click={() => this.switchNameHandler("Jazzy")} name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} >My Hobbies: French</Person></h1>
        <h1><Person name={this.state.persons[2].name} age={this.state.persons[2].age} /></h1>
        <UserInput />

        <button onClick={this.usernameChangeHandler}>Change Usernames</button>
        <UserOutput userName={this.state.usernames[0].name} />
        <UserOutput userName={this.state.usernames[1].name} />
        <UserOutput userName="AZ" />
      </div>
    );
  }
}

export default App;

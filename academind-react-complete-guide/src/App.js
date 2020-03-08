import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '3432', name: 'Max', age: 28},
      {id: '244', name: 'Manu', age: 32},
      {id: '654', name: 'Jessica', age: 26},
    ],
    usernames: [
      {name: 'Jazzy'},
      {name: 'Michelle'},
      {name: 'Breanna'}
    ],
    showPersons : false
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

  inputChanged = (event) => {
    this.setState({
      usernames: [
        {name: event.target.value},
        {name: event.target.value},
        {name: event.target.value}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return <Person
                click={this.deletePersonHandler}
                name={person.name}
                age={person.age}
                key={person.id} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">

        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}

        <UserInput userName={this.state.usernames[0].name} userValue={this.inputChanged} />
        <button style={style} onClick={this.usernameChangeHandler}>Change Usernames</button>
        <UserOutput userName={this.state.usernames[0].name} />
        <UserOutput userName={this.state.usernames[1].name} />
        <UserOutput userName="AZ" />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import Person from './Person/Person';

import Outputter from './academind-practice/Outputter';

class App extends Component {
  state = {
    persons: [
      {id: '3432', name: 'Max', age: 28},
      {id: '654', name: 'Jessica', age: 26},
      {id: '234r8742ew', name: 'Manu', age: 32}
    ],
    usernames: [
      {name: 'Jazzy'},
      {name: 'Michelle'},
      {name: 'Breanna'}
    ],
    showPersons : false,
    practiceState : 'Initial State Text'
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
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

  changeHandler = (event) => {
    let currentState = this.state.practiceState;
    currentState = event.target.value;
    this.setState({
      practiceState: currentState
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

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />

            })
          }
        </div>
      );
    }

    let textLength = (
      <p>{this.state.practiceState.length}</p>
    );



    return (
      <div className="App">

        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}



        <UserInput userName={this.state.usernames[0].name} userValue={this.inputChanged} />
        <button style={style} onClick={this.usernameChangeHandler}>Change Usernames</button>
        <UserOutput userName={this.state.usernames[0].name} />
        <UserOutput userName={this.state.usernames[1].name} />
        <UserOutput userName="AZ" />



        <div id="practice-section">
          <h1 id="practice-title-one">Practice Section</h1>

          <Outputter myState={this.state.practiceState} change={this.changeHandler} length={textLength} />
        </div>
      </div>
    );
  }
}

export default App;

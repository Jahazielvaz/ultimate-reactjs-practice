import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import Person from './Person/Person';

import Outputter from './academind-practice/Outputter';
import LengthValidation from './academind-practice/LengthValidation';
import Char from './academind-practice/Char';

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
    userInput: ''

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

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})
  }




  render(){
    let 
    let personsDisplay = (
      {
        if(this.state.showPersons){

        }
      }
    )

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char character={char} key={index} clicked={() => this.deleteCharHandler(index)} />
    })


    return (
      <div className="App">

        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>


        <UserInput userName={this.state.usernames[0].name} userValue={this.inputChanged} />
        <button style={style} onClick={this.usernameChangeHandler}>Change Usernames</button>
        <UserOutput userName={this.state.usernames[0].name} />
        <UserOutput userName={this.state.usernames[1].name} />
        <UserOutput userName="AZ" />


        <hr />
        <div id="practice-section">
          <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput} />
          <p>{this.state.userInput}</p>
          <LengthValidation inputLength={this.state.userInput.length} />
          {charList}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import PeopleOutput from './PeopleOutput/PeopleOutput';
import UserInput from './PeopleOutput/UserInput';

class App extends Component{
  state = {
    people: [
      {id: 234, name: 'peter', password: '3etdf'},
      {id: 44, name: 'jonny', password: '353423df'},
      {id: 98767, name: 'peter', password: 'irgfjkf'},
      {id: 456, name: 'peter', password: '87uytg'}
    ],
    peopleToggler: false,
    username: 'Your username'
  }

  peopleToggleHandler = () => {
    let switcher = this.state.peopleToggler;

    this.setState({
      peopleToggler: !switcher
    })
  }

  usernameHandler = (event) => {

    this.setState({
      username: event.target.value
    })
  }


  render(){
    let peopleRender = null;

    if(this.state.peopleToggler){
      peopleRender = (
        <div>
          {
            this.state.people.map(person => {
              return <PeopleOutput key={person.id} name={person.name} password={person.password} />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <button onClick={this.peopleToggleHandler}>Display People</button>
        {peopleRender}
        <UserInput nameHandler={(event) => this.usernameHandler(event)} username={this.state.username}  />
      </div>
    );
  };
}

export default App;

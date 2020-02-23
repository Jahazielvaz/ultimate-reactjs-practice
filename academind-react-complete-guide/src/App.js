import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Vincent', age: 2},
      {name: 'Valerie', age: 26}
    ]
  }

  render() {
    return (
      <div className="App">
        <button>Switch Name</button>
        <h1><Person name={this.state.persons[0].name} age="34" /></h1>
        <h1><Person name="Michelle" age="26">My Hobbies: French</Person></h1>
        <h1><Person name="Adam" age="31" /></h1>
      </div>
    );
  }
}

export default App;

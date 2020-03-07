import React, { Component } from 'react';
import People from './People/People';

import './App.css';

class App extends Component {
  state = {
    people: [
      {id: 1, name: 'Jasmine', last: 'Thompson'},
      {id: 2, name: 'Madilyn', last: 'Bayley'},
      {id: 3, name: 'Jfla', last: 'Unknown'},
      {id: 4, name: 'Boa', last: 'Unknown'}
    ]
  }

  peeps = (
    <div>
      {
        this.state.people.map(result => {
          return <People name={result.name} last={result.last} />
        })
      }
    </div>
  )


  render(){



    return (
      <div className="App">
      <button id="btn1">Reveal People</button>
        {peeps}
      </div>
    );
  }
}

export default App;

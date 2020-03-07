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
    ],
    peopleDisplay: false
  }

  peopleDisplayToggle = () => {
    let switcher = this.state.peopleDisplay;

    this.setState({
      peopleDisplay: !switcher
    })
  }

  render(){
    let peeps = null
    if(this.state.peopleDisplay){
      peeps = (
        <div>
          {
            this.state.people.map(result => {
              return <section key={result.id}>{result.name} {result.last}</section>
            })
          }
        </div>
      )
    }


    return (
      <div className="App">
      <button onClick={this.peopleDisplayToggle} id="btn1">Reveal People</button>
        {peeps}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import People from './People/People';
import ValidationComponent from './Validation/ValidationComponent';

class App extends Component {
  state = {
    people: [
      {id: 1232, name: 'John', last: 'z'},
      {id: 1222, name: 'Jane', last: 'v'},
      {id: 1242, name: 'J', last: 'fla'},
      {id: 1132, name: 'Madilyn', last: 'Bailey'}
    ],
    position: false,
    output: ''
  }

  toggler = () => {
    let switcher = this.state.position;

    this.setState({
      position: !switcher
    })
  }

  changehandler = (event) => {
    this.setState({
      output: event.target.value
    })
  }


  render(){
    let peopleState = [...this.state.people]
    let peopleStorage = null;



    if(this.state.position){
      peopleStorage = (
        <div>
          {
            peopleState.map(person => {
              return <People key={person.id} name={person.name} last={person.last} />
            })
          }
        </div>
      )
    }
    return (
      <div className="App">
        <button onClick={this.toggler}>Toggle People</button>
        {peopleStorage}

        <input onChange={this.changeHandler}></input>
        <ValidationComponent outputLength={this.state.output} />
      </div>
    );
  }
}

export default App;

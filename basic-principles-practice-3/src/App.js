import React, { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    people: [
      {id: 234, name: 'peter', password: '3etdf'},
      {id: 44, name: 'jonny', password: '353423df'},
      {id: 98767, name: 'peter', password: 'irgfjkf'},
      {id: 456, name: 'peter', password: '87uytg'}
    ]
  }


  render(){
    let peopleRender = (
      <div>
        {
          this.state.people.map(person => {
            return <section key={person.id}>{person.name} {person.password}</section>
          })
        }
      </div>
    )

    return (
      <div className="App">
        {peopleRender}
      </div>
    );
  };
}

export default App;

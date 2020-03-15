import React, { Component } from 'react';

class FindApp extends Component{
  state = {
    people: [
      {id:432, name: 'Vincent', last: 'Valentine'},
      {id:654, name: 'Tidus', last: 'Unknown'},
      {id:212, name: 'Cloud', last: 'Strife'}
    ]
  }



  render(){
    let newPerson = this.state.people.find(person => {
      return person.name === 'Tidus'
    })





    return(
      <div id="find-app">
        <p>The Chose One is {newPerson.name} {newPerson.last}</p>
      </div>
    )
  }
}

export default FindApp;

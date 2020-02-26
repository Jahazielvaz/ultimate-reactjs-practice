import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const app = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Vincent', age: 2},
      {name: 'Valerie', age: 26}
    ],
    otherState: "Some Other State"
  })

  const [otherState, setOtherState] = useState(personsState.otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Jazzy', age: 34},
        {name: 'Vincent', age: 2},
        {name: 'Valerie', age: 26}
      ]
    })
  }

  console.log(personsState, otherState);



    return (
      <div className="App">
        <button onClick={switchNameHandler}>Switch Name</button>
        <h1><Person name={personsState.persons[0].name} age={personsState.persons[0].age} /></h1>
        <h1><Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: French</Person></h1>
        <h1><Person name={personsState.persons[2].name} age={personsState.persons[2].age} /></h1>
      </div>
    );
}

export default app;

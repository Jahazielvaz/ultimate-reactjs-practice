import React from 'react';
import './Practice.css'

const Practice = (props) => {

  return(
    <div className="Practice">
      <button onClick={props.dateCall} className="practice-button">Reveal Date</button>
      <h1>{props.title}</h1>
      <p>Today's date is: {props.date}</p>
      <p>My name is: {props.name} and I'm a: {props.career}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Practice;

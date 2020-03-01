import React from 'react';
import './Practice.css'

const Practice = (props) => {
  const style ={
    boxShadow: '3px 1px 4px 3px rgba(0, 0, 0, .3)',
    margin: '10px auto',
    padding: '5px',
    fontSize: '15px',
    borderRadius: '5px'
  }

  return(
    <div className="Practice">
      <button onClick={props.dateCall} className="practice-button">Reveal Date</button>
      <h1>{props.title}</h1>
      <p>Today's date is: {props.date}</p>
      <p>My name is: {props.name} and I'm a: {props.career}</p>
      <p>{props.children}</p>
      <input style={style} onChange={props.userInput} value={props.currentName}></input>
    </div>
  )
}

export default Practice;

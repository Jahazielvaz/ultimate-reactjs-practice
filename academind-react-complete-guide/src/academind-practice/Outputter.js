import React from 'react';

const outputter = (props) => {
  return(
    <div>
    <input onChange={props.change} id="practice-input" value={props.myState}></input>
    <p>{props.myState}</p>
    <section>The length of this text is {props.length}</section>
      {props.result}
    </div>
  )
}

export default outputter;

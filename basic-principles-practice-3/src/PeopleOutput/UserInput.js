import React from 'react';

const userInput = (props) => {
  return(
    <div>
      <input onChange={props.nameHandler} value={props.username}></input>
      <h1>{props.username}</h1>
    </div>
  )
}

export default userInput;

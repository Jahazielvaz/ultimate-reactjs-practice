import React from 'react';

const userInput = (props) => {
  return(
    <input onChange={props.userValue} type="text" value={props.userName}></input>
  )
}

export default userInput;

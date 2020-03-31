import React from 'react';
const userInput = (props) => {
  return(
    <div>
      <input onChange={props.changeHandler} value={props.inputsName} ></input>
    </div>
  )
}


export default userInput;

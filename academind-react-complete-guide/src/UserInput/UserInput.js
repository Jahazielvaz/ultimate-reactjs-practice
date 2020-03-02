import React from 'react';

const userInput = (props) => {
  const style = {
    margin: '10px auto',
    padding: '5px',
    fontSize: '20px',
    boxShadow: '3px 1px 4px 2px rgba(0, 0, 0, .3)',
    display: 'block'
  }

  return(
    <input style={style} onChange={props.userValue} type="text" value={props.userName}></input>
  )
}

export default userInput;

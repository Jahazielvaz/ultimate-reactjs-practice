import React from 'react';
import '../App.css'

const users = (props) => {
  return(
    <div className="users">
      <h2>{props.name} {props.last}</h2>
    </div>
  )
}

export default users;

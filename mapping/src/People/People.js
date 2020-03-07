import React from 'react';
import './People.css';

const people = (props) => {
  return(
    <div>
      <section>{props.name} {props.last}</section>
    </div>
  )
}

export default people;

import React from 'react';

const people = (props) => {
  return(
    <div id="people-main">
      {props.name} {props.last}
    </div>
  )
}

export default people;

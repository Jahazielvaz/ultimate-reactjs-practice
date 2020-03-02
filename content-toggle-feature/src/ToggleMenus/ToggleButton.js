import React from 'react';
import './ToggleStyle.css';


const toggleButton = (props) => {
  return <button onClick={props.toggler} className="toggle-button">Toggle Button</button>
}

export default toggleButton;

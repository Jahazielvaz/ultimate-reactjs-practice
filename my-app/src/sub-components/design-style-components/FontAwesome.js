import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const fontAwesome = (props) => {
  return <a target="_blank" href="#" className={props.fabContainer}><i className={props.content}></i></a>
}



export default fontAwesome;

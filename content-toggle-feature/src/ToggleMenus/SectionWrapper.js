import React from 'react';
import './ToggleStyle.css';

import ContentContainer from './ContentContainer';
import ToggleButton from './ToggleButton';

const sectionWrapper = (props) => {
  return(
    <div className="section-wrapper">
      {props.children}
    </div>
  )
}

export default sectionWrapper;

import React from 'react';
import './ToggleStyle.css';
import CustomContent from './CustomContent';

const contentContainer = () => {
  return(
    <div className="content-container">
      <h1>Content Container</h1>
      <CustomContent />
    </div>
  )
}

export default contentContainer;

import React, { Component } from 'react';
import './App.css';

import SectionWrapper from './ToggleMenus/SectionWrapper';
import ContentContainer from './ToggleMenus/ContentContainer';
import ToggleButton from './ToggleMenus/ToggleButton';
import Sample from './ToggleMenus/Sample';

class App extends Component {
  state = {
    display: false
  }
  render(){
    return (
      <div className="App">
        <SectionWrapper>
          <ToggleButton />
          <ContentContainer />
        </SectionWrapper>
      </div>
    );
  }
}

export default App;

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

  toggleHandler = () => {
    let current = this.state.display;
    this.setState({
      display: !current
    })

    console.log('Button was clicked')
  }


  render(){
    return (
      <div className="App">
        <SectionWrapper>
          <ToggleButton toggler={this.toggleHandler} />
          {this.state.display ? <ContentContainer /> : null}
        </SectionWrapper>
      </div>
    );
  }
}

export default App;

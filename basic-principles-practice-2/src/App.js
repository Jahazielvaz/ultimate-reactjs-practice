import React, { Component } from 'react';
import './App.css';
import Users from './Users/Users';

class App extends Component {
  state = {
    users: [
    {id: 243, name: "Yuna", last: "Ito"},
    {id: 423, name: "Boa ", last: "Kwon"},
    {id: 654, name: "Jahaziel", last: "Vazquez"}
  ],
  display: false
}

  toggler = () => {
    const displayToggle = this.state.display;

    this.setState({
      display: !displayToggle
    })
  }

  render(){
    return (
      <div className="App">
        <section id="users-container">
          <button onClick={this.toggler}>Toggle Users</button>
          {this.state.display ?
            <div>
            <Users name={this.state.users[0].name} last={this.state.users[0].last} />
            <Users name={this.state.users[1].name} last={this.state.users[1].last} />
            <Users name={this.state.users[2].name} last={this.state.users[2].last} />
            </div>
             : null }
        </section>
      </div>
    );
  }
}

export default App;

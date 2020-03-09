import React, { Component } from 'react';
import User from './People/People';

class App extends Component {
  state = {
    users : [
      {id: 5243, name: 'jazzyvaz', password: '3refd4'},
      {id: 653, name: 'pelito300', password: 'ygfr4erd'},
      {id: 986, name: 'jinjin', password: 'ruesd'}
    ],
    userDisplay: false
  }

  userToggle = () => {
    let displayState = this.state.userDisplay;

    this.setState({
      userDisplay : !displayState
    })
  }

  render(){
    let output = null

    if(this.state.userDisplay){
      output = (
        <div>
          {this.state.users.map(user => {
            return <User key={user.id} users={user.name} password={user.password} />
          })}
        </div>
      )

    }

    return(
      <div id="App">
      <button onClick={this.userToggle}>DISPLAY USERS</button>
        <h1>USERS LIST</h1>
        {output}
      </div>
    )
  }
}

export default App;

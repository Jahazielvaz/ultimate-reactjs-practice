import React, { Component } from 'react';
import './App.css';
import Practice from './Practice/Practice';

class App extends Component {
  state = {
    career: "Find out the career",
    name: "Find out my name",
    date: "Find out the date"
  }

  TodaysDate = () => {
    const dateObj = new Date();
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    return `${month}/${day}/${year}`;
  };

  dataChangeHandler = () => {
    this.setState({
      name: "Jazzy",
      career: "Software Engineer"
    })
  }


  render(){
    const buttonOneStyle = {
      padding: '10px',
      margin: '10px',
      background: 'rgba(184, 105, 95)',
      fontSize: '20px',
      color: 'white',
      fontWeight: 'bolder',
      borderRadius: '10px',
      boxShadow: '3px 1px 4px 3px rgba(0, 0, 0, .2)',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <button style={buttonOneStyle} onClick={this.dataChangeHandler}>Reveal Data</button>
        <Practice title={this.state.title} name={this.state.name} date={this.state.date} career={this.state.career}>Seek Not To Compete. Seek To Dominate</Practice>
      </div>
    );
  }
}

export default App;

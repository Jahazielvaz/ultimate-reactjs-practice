import React, { Component } from 'react';
import './App.css';
import UserInput from './ItemsDisplay/UserInput';
import ItemsDisplay from './ItemsDisplay/ItemsDisplay';


class App extends Component{
  state={
    items: [
      {id: 3542, name: 'Pillow', price: 32},
      {id: 5353, name: 'Cabinet', price: 54},
      {id: 8762, name: 'Guitar', price: 3253},
      {id: 1457, name: 'building', price: 321234543234},
      {id:765, name: 'Your Item', price: 'Your Price'}
    ],
    displayToggler: false
  }

  lastItemHandler = (event) => {
    let itemDefaultState = this.state.items[4];

    this.setState({
      items: [
        {id: 3542, name: 'Pillow', price: 32},
        {id: 5353, name: 'Cabinet', price: 54},
        {id: 8762, name: 'Guitar', price: 3253},
        {id: 1457, name: 'building', price: 321234543234},
        {id: 765, name: event.target.value, price: event.target.value}
      ]
    })
  }

  toggleHandler = () => {
    const toggler = this.state.displayToggler;

    this.setState({
      displayToggler: !toggler
    })
  }




  render(){
    let items = null

    if(this.state.displayToggler){
      items = (
        <div>
          {this.state.items.map(item => {
            return <ItemsDisplay key={item.id} name={item.name} price={item.price}></ItemsDisplay>
          })}
        </div>
      )

    }

    return(
      <div className="App">
        <button onClick={this.toggleHandler}>Display Items</button>
        {items}
        <UserInput changeHandler={event => this.lastItemHandler(event)} inputsName={this.state.items[4]} />
      </div>
    )
  }
}

export default App;

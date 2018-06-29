import React, { Component } from 'react';
import './App.css';
import {Products} from './Products';
import FeedbackForm from './FeedbackForm/FeedbackForm'
import UCForm from "./UCForm/UCForm";

class App extends Component {
  cities = [
    'bangalore',
    'london',
    'moscow',
    'delhi'
  ]

  constructor() {
    super();

    this.state = {
      count: 0,
      error: ''
    }

    this.increment = this.increment.bind(this)
    this.decrement= this.decrement.bind(this)
    
    this.cityList = this.cities.map((city, i) => <option key={i} value={city}>{city}</option>)
    console.log(this.cityList)

    this.productList = Products.map((product) => {
      return (
        <div className="Product-card">
          <div>Name: {product.name}</div> 
          <div>{product.description}</div> 
          <div>{product.price}</div> 
          <div>{product.image}</div> 
        </div>
      )
    })
  }

  increment() {
    if (this.state.count == 5) {
      this.setState({
        error: 'Counter cannot go above 5'
      })
      return;
    }

    this.setState({
      count: this.state.count + 1,
      error: ''
    })
  }

  decrement() {
    if (this.state.count == 0) {
      this.setState({
        error: 'Counter cannot go below 0'
      })
      return;
    }

    this.setState({
      count: this.state.count - 1,
      error: ''
    })
  }

  render() {
    return (
      <div className="App container">

      {/*
        <div>
          <h4>Counter</h4>
          <span className="App-count-display">{this.state.count}</span>
          <div>
            <button id="increment" onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
          </div>
          <span className="error">{this.state.error}</span>
        </div>
      

        <div>
          <select id="cityList">
            {this.cityList}            
          </select>
        </div>
      
        <div>
          {this.productList}
        </div>
      */}

        <UCForm />


      </div>
    );
  }
}

export default App;

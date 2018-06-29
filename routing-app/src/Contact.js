import React, { Component } from 'react'
import Header from './Header';

export default class Contact extends Component {

  constructor(props) {
    super(props)
  
  }
  
  componentDidMount() {
    console.log(this.props.match.params.email)
  }

  render() {
    return (
      <div>
        <Header />
        <h3>Contact</h3>        
        <p>
          <b>Email</b>
          <span>{this.props.match.params.email}</span>
        </p>
      </div>
    )
  }
}

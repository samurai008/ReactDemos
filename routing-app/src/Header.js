import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catlog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/clients">Clients</Link>
      </div>
    )
  }
}
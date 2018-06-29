import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {Route, Link} from 'react-router-dom';

class App extends Component {
  constructor() {
    super()

    this.state = {
      email: 'john.doe@abc.com'
    }

    this.updateEmail = this.updateEmail.bind(this)
    this.showEmail = this.showEmail.bind(this)
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    })
    console.log(this.state.email)
  }

  showEmail() {
    console.log(this.state.email)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Appname</h1>
        Email
        <input type="text"
        value={this.state.email}
        onChange={this.updateEmail}
        onKeyPress={this.showEmail} />
        <Link to={"/contact/" + this.state.email}>
            Initiate Contact
        </Link>
      </div>
    );
  }
}

export default App;

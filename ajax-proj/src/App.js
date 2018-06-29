import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  uri = 'http://jsonplaceholder.typicode.com/users';

  constructor() {
    super()

    this.state = {
      userData: []
    }

    this.formatAddress = this.formatAddress.bind(this)
  }

  componentDidMount() {
    axios.get(this.uri)
        .then(res => {
          this.setState({
            userData: res.data
          })
        })
        .catch(error => console.log(error))
  }

  formatAddress(address) {
    return address.suite + ', ' + address.street + ', ' + address.city + ' ' + address.zipcode
  }

  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>username</th>
              <th>name</th>
              <th>phone</th>
              <th>email</th>
              <th>company</th>
              <th>address</th>
              <th>website</th>
            </tr>
          </thead>
          
          <tbody>
            {this.state.userData.map(
              (user, i) => {
                console.log(user)
                return (
                  <tr>
                    <td>{user.username}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.company.name}</td>
                    <td>{this.formatAddress(user.address)}</td>
                    <td>{user.website}</td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

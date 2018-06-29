import React from 'react';
import UserStore from './store/UserStore';
import * as UserActions from './actions/UserActions.js';

export default class UserComponent extends React.Component {

  constructor() {
    super()

    this.state = {
      users: UserStore.getUsers()
    }
  }

  reloadUsers = (e) => {
    e.preventDefault();
    UserActions.refreshUsers();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    UserActions.registerUser({
      email: this.refs.email.value,
      name: this.refs.email.value,
      date: new Date(),
      active: true
    })
  }

  render() {
    console.log(UserStore.getUsers())
    return(
      <div>
        <button onClick={this.reloadUsers}>Reload Data</button>
        <form>
          <p>Name <input type="text" ref="name" /></p>
          <p>Email <input type="" ref="email" /></p>
          <button type="submit" onClick={this.handleSubmit}>Add new user</button>
        </form>
      </div>
    )
  }
}

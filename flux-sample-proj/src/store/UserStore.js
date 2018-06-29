import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class UserStore extends EventEmitter {

  constructor() {
    super()

    this.user = [
      {
        name: "John Doe",
        email: "john.doe@abc.com",
        date: "29-6-2018",
        active: true
      },
      {
        name: "Jane Doe",
        email: "jane.doe@abc.com",
        date: "19-1-2017",
        active: true
      },
      {
        name: "Anonymous",
        email: "anon@abc.com",
        date: "29-6-2018",
        active: false
      }
    ]
  }


  // Data Manipulation
  getUsers() {
    return this.user;
  }

  addUser(user) {
    this.user.push(user);
    this.emit('userChange');
  }

  // Function to handle all actions received by the store
  // Action handler functions
  // Should have a unique name
  handleActions(action) {
    switch(action.type) {
      case "REGISTER_USER": 
        this.addUser(action.user)
        console.log(this.user)
        break;

      case "REFRESH_USERS": 
        this.user = action.user
        console.log(this.user)
        break;

      // case "DELETE_USER": 
        // this.users = action.user
        // break;
    }
  }

}


const userStore = new UserStore()
dispatcher.register(userStore.handleActions.bind(userStore))

export default userStore;

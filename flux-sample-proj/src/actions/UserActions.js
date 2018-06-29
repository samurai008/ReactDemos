import dispatcher from '../dispatcher'

export function registerUser(user) {
  dispatcher.dispatch({
    type: "REGISTER_USER",
    user: user
  })
}

export function refreshUsers() {
  dispatcher.dispatch({
    type: "REFRESH_USERS",
    user: [{
        name: "Nilabjo",
        email: "nilabjo@abc.com",
        date: "29-6-2018",
        active: true
    }]
  })
}

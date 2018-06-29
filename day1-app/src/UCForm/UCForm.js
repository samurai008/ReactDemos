import React, { Component } from 'react'

export default class UCForm extends Component {

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.refs)
    console.log(this.refs.cname.value)
  }
  
  render() {
    return (
      <div>
        <form>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" ref="cname" className="form-control"></input>
            </div>
            <div className="form-group">
                <label for="name">Email</label>
                <input type="text" ref="cemail" className="form-control"></input>
            </div>
            <button type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

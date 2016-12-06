import React, { Component } from 'react';

export default class Signup extends Component {
  constructor(props){
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handleFormSubmit(){
    console.log('hello')
  }
  render(){
    return(
      <main className="login container">
        <div className="row">
          <div className="col s12 form-title">
            <h3><i className="fa fa-sign-in"></i> Sign-up </h3>
          </div>
        </div>
        <div className="row">
          <form onSubmit={this.handleFormSubmit} className="col s12 m10">
            <div className="row">
              <div className="input-field col s12">
                <i className="fa fa-user-o prefix"></i>
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="email">Email Login</label>
              </div>
              <div className="input-field col s12">
                <i className="fa fa-key prefix"></i>
                <input id="last_name" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col s12">
                <i className="fa fa-key prefix"></i>
                <input id="last_name" type="password" className="validate" />
                <label htmlFor="confirm">Confirm</label>
              </div>
            </div>
          </form>
        </div>
      </main>
    )
  }
}

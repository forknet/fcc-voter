import React, { Component } from 'react';

export default class Login extends Component {
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
            <h1><i className="fa fa-sign-in"></i> Log In </h1>
          </div>
        </div>
        <div className="row">
          <form onSubmit={this.handleFormSubmit} className="col s12 m10">
            <div className="row">
              <div className="input-field col s12">
                <i className="fa fa-user-o prefix"></i>
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">Email Login</label>
              </div>
              <div className="input-field col s12">
                <i className="fa fa-key prefix"></i>
                <input id="last_name" type="password" className="validate" />
                <label htmlFor="last_name">Password</label>
              </div>
            </div>
          </form>
        </div>
      </main>
    )
  }
}

//
// return (
//   <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
//     <fieldset className="form-group">
//       <label>Email:</label>
//       <input {...email} className="form-control" />
//     </fieldset>
//     <fieldset className="form-group">
//       <label>Password:</label>
//       <input {...password} type="password" className="form-control" />
//     </fieldset>
//     {this.renderAlert()}
//     <button action="submit" className="btn btn-primary">Sign in</button>
//   </form>
// );

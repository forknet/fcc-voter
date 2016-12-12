import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NavBar extends Component {
  renderLinks(){
    if (this.props.authenticated){
      console.log('why')
      // show a link to sign out
      return [
        <li className="newpoll" key={1}>
          <Link to="/newpoll">Add New Poll</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signout">Sign Out</Link>
        </li>
      ]
    } else{
      // show a link to sign in and sign up
      return [
        <li className="sign-up" key={1}>
          <Link to="/signup">Sign up</Link>
        </li>,
        <li className="login" key={2}>
          <Link to="/login">Login</Link>
        </li>
      ]
    }
  }
  render(){
    console.log(this.props.authenticated)
    return(
      <nav className="nav-wrapper">
        <div className="nav-wrapper container">
          <Link className="brand-logo" to="/">Votez</Link>
            <ul className="right nav-right">
              {this.renderLinks()}
            </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(NavBar)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/';

class NavBar extends Component {
  renderLinks(){
    let userName = this.props.userName
    if (this.props.authenticated){
      return [
        <li className="my-polls" key={3}>
          <Link to="/myPolls">{userName} Polls</Link>
        </li>,
        <li className="newpoll" key={1}>
          <Link to="/newpoll">Add New Poll</Link>
        </li>,
        <li className="signout" key={2}>
          <a onClick={() => this.onSignOffClick()}>SignOut</a>
        </li>
      ]
    } else{
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
  onSignOffClick(){
    const { signoutUser } = this.props
    if (confirm('Are you sure you to signoff?')) {
      this.props.signoutUser();
    }
  }
  render(){
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
    authenticated: state.auth.authenticated,
    userName: state.auth.userName
  }
}

export default connect(mapStateToProps, actions )(NavBar)

import React, { Component } from 'react';
import { Link } from 'react-router';
export default class NavBar extends Component {
  render(){
    return(
      <nav className="nav-wrapper">
        <div className="nav-wrapper container">
          <Link className="brand-logo" to="/">Votez</Link>
            <ul className="right nav-right">
              <li className="welcome">Hello Guest </li>
              <li className="all-polls"><Link to="/allposts">AllPosts</Link> </li>
              <li className="login">Sign in </li>
            </ul>
        </div>
      </nav>
    )
  }
}

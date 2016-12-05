import React, { Component } from 'react';
import { Link } from 'react-router';
export default class NavBar extends Component {
  render(){
    return(
      <nav className="nav-wrapper">
        <div className="nav-wrapper container">
          <Link className="brand-logo" to="/">Votez</Link>
            <ul className="right nav-right">
              <li className="all-polls"><Link to="/allposts">View All Posts</Link> </li>
              <li className="welcome">Hello Guest </li>
              <li className="login">Login</li>
            </ul>
        </div>
      </nav>
    )
  }
}

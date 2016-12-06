import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  render(){
    return(
      <nav className="nav-wrapper">
        <div className="nav-wrapper container">
          <Link className="brand-logo" to="/">Votez</Link>
            <ul className="right nav-right">
              <li className="all-polls">
                <Link to="/allposts">All Posts</Link>
              </li>
              <li className="sign-up">
                <Link to="/signup">Sign up</Link>
              </li>
              <li className="login">
                <Link to="/login">Login</Link>
              </li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar

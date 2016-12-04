import React, { Component } from 'react';
export default class NavBar extends Component {
  render(){
    return(
      <nav className="nav-wrapper">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">Votez</a>
            <ul className="right nav-right">
              <li className="welcome">Hello Guest </li>
              <li className="all-polls">All Polls </li>
              <li className="login">Sign in </li>
            </ul>
        </div>
      </nav>
    )
  }
}

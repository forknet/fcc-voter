import React, { Component } from 'react';
export default class NavBar extends Component {
  render(){
    return(
      <nav className="nav-wrapper">
        <div>
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          </ul>
        </div>
      </nav>
    )
  }
}

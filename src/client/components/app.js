import React, { Component } from 'react';
import NavBar from '../containers/navbar';
import VotesContainer from '../containers/votes-container';
import Footer from './footer';
import '../stylesheets/style.scss';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

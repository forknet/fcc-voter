import React, { Component } from 'react';
import NavBar from './navbar';
import VotesContainer from '../containers/votes-container';
import Footer from './footer';
import '../stylesheets/style.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <VotesContainer />
        <Footer />
      </div>
    )
  }
}

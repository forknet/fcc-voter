import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class VotesContainer extends Component {
  render(){
    return(
      <main className="votes-container container">
        <div className="row">
          <div className="col s12 m6 l4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Vote App Title #1</span>
                <p>Some Description Here about the vote</p>
              </div>
              <div className="card-action">
                <a href="#">Results</a>
                <a href="#">Date Created</a>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Vote App Title #2</span>
                <p>Some Description Here about the vote</p>
              </div>
              <div className="card-action">
                <a href="#">Results</a>
                <a href="#">Date Created</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

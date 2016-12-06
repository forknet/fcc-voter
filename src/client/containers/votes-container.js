import React, { Component } from 'react';
import { connect } from 'react-redux';

class VotesContainer extends Component {
  componentDidMount(){
    //Here is where we dispatch an action for the database to render the votes
    console.log('test!')
  }
  render(){
    return(
      <main className="votes-container container">
        <div className="row">
          <div className="col s12 m6 l4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Vote App Title #1</span>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                <p className="description">Some Description Here about the vote</p>
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

function mapStateToProps(state){
  return {auth: state.auth};
}

export default connect(mapStateToProps)(VotesContainer)

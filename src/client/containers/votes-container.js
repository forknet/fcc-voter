import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class VotesContainer extends Component {
  componentWillMount(){
    this.props.fetchVotes()
  }
  renderCards({title, date, description, _id}){
    return(
      <div key={_id} className="col s12 m6 l4">
        <div className="card blue-grey darken-1 hoverable">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p className="description ">{description}</p>
          </div>
          <div className="card-action">
            <a href="#">Results</a>
            <a href="#">{date}</a>
          </div>
        </div>
      </div>
    )
  }
  render(){
    return(
      <main className="votes-container container">
        <div className="row">
          {(this.props.voteData.vote).map(this.renderCards)}
        </div>
      </main>
    )
  }
}

function mapStateToProps(state){
  return {voteData: state.voteData};
}

export default connect(mapStateToProps, actions)(VotesContainer)

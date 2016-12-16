import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
const ROOT_URL = 'http://localhost:1234';

class Home extends Component {
  componentDidMount(){
    this.props.fetchVotes()
  }
  renderCards({title, date, description, _id}){
    return(
      <div key={_id} className="col s12 m6 l4 center-align">
        <div className="card teal darken-1 hoverable">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p className="description ">{description}</p>
          </div>
          <div className="card-action">
            <Link to={`poll/${_id}`}>Result</Link>
            <a className="disable-link" href="#">{date}</a>
          </div>
        </div>
      </div>
    )
  }
  render(){
    return(
      <main className="votes-container container">
        <div className="row welcome">
          <div className="col s12 center-align">
            <h3>Welcome To Votez App</h3>
            <p>An easy app to use online voting with instant chart
            results. Below are the polls hosted by Votez from various users.
            Click a poll to see the results and vote</p>
          </div>
        </div>
        <div className="row polls-container">
          {(this.props.allPolls).map(this.renderCards)}
        </div>
      </main>
    )
  }
}

function mapStateToProps(state){
  return {
    allPolls: state.voteData.vote.reverse()
  };
}

export default connect(mapStateToProps, actions)(Home)

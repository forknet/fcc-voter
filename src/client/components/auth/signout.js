import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount(){
    this.props.signoutUser()
  }
  render(){
    return(
      <main>
        <h2>Sorry to see you go </h2>
      </main>
    )
  }
}

export default connect(null, actions)(Signout);

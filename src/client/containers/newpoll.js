import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field,  reduxForm } from 'redux-form';
const  { DOM: { input, select, textarea } } = React;
import * as actions from '../actions/';

export default class NewPoll extends Component {
  constructor(props){
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handleFormSubmit(){
    console.log('hello')
  }
  render(){
    return(
      <main className="container">
        <div className="row">
          <div className="col s12 form-title">
            <h3><i className="fa fa-file-text"></i> Add New Poll</h3>
          </div>
        </div>
        <div className="row">
          <form onSubmit={this.handleFormSubmit} className="col s12 m10">
            <div className="row">
              <div className="input-field col s12">
                <i className="fa fa-pencil-square-o prefix"></i>
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="email">Title Poll</label>
              </div>
              <div className="input-field col s12">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="password">Description</label>
              </div>
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Options (seperated by line)</label>
              </div>
            </div>
          </form>
        </div>
      </main>
    )
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
import { Field,  reduxForm, formValueSelector } from 'redux-form';
const  { DOM: { input, select, textarea } } = React;
import { Bar as BarChart } from 'react-chartjs';
import { Link } from 'react-router';
import { Row, Input } from 'react-materialize'
import * as actions from '../actions/';

class VoteTemplate extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state ={
      updateCastVote: []
    }
  }
  componentWillMount(){
    this.props.fetchPoll(this.props.params.id)
  }
  onDeleteSubmit(){
    const { voteData } = this.props
    if (confirm('Are you sure you  want to remove this poll?')) {
      this.props.deletePoll(voteData.pollInfo._id)

    } else {
        Materialize.toast(`You almost deleted your poll!`, 3000)
    }
  }
  renderDeleteBtn(){
    const {voteData, userName} = this.props
    if(userName === voteData.pollInfo.userName){
      return(
        <a onClick={() => this.onDeleteSubmit()} className="btn waves-effect waves-light cancel-btn">Delete
          <i className="fa fa-times"></i>
        </a>
      )
    }
  }
  renderTwitterBtn(){
    const { auth } = this.props;
    let newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    let text = `Check out this voting app from FreeCodeCamp! ${newURL}`;
    let twitterURL = `https://twitter.com/intent/tweet?text=${text}`;
    if (auth){
      return(
        <a href={twitterURL} target="_blank" className="btn twitter-btn">Share on Twitter <i className="fa fa-twitter"></i>
        </a>
      )
    }
  }
  renderRadioButtons(labelOption){
    return(
      <option key={labelOption} value={labelOption}>{labelOption}</option>
    )
  }
  onSubmit(props){
    let _id = this.props.params.id;
    this.props.castVote(_id, props)
  }
  render() {
    let optionLabels, optionCount;
    if(this.props.voteData.pollInfo.length !== 0){
      optionLabels = Object.keys(this.props.voteData.pollInfo.labelOptions);
      optionCount = Object.values(this.props.voteData.pollInfo.labelOptions);
    }
    const chartData = {
      labels: optionLabels || [],
      datasets: [
        {
          labels: ['01', '02', '03', '05', '06', '09'],
          fillColor: ['orange', 'skyblue', 'red'],
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(7, 122, 102, 0.75)",
          highlightStroke: "rgb(176, 0, 52)",
          data: optionCount || []
        }
      ]
    };

    const chartOptions = {
      barStrokeWidth : 3,
      scaleGridLineWidth : 4,
      scaleShowVerticalLines: false,
      responsive: true,
      scaleFontSize: 15
    };
    const { handleSubmit, pristine, reset, submitting } = this.props
    let asyncData = (optionLabels) ? true : false; //sets true when the fetched data is retrieved
    let graph = null
    if(asyncData){
      graph = <BarChart data={chartData} options={chartOptions}/>
    }

    return (
      <main className="container">
        <div className="row">
          <div className="col center-align s12">
            <h3>{this.props.voteData.pollInfo.title || ''}</h3>
          </div>
        </div>
        {graph}
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="row">
            <div className="col s12">
              <Field name="labelOption" component="select">
                <option>My Options</option>
                {(optionLabels || []).map(this.renderRadioButtons)}
              </Field>
            </div>
            <div className="col input-field s12">
              <button className="btn" type="submit" disabled={pristine || submitting}>Submit
                <i className="fa fa-paper-plane-o"></i>
              </button>
              {this.renderDeleteBtn()}
              {this.renderTwitterBtn()}
            </div>
          </div>
        </form>
      </main>
    )
  }
}

function mapStateToProps(state){
  return {
    voteData: state.voteData,
    auth: state.auth.authenticated,
    userName: state.auth.userName
  };
}

VoteTemplate = reduxForm({
  form: 'CastVote'
})(VoteTemplate)


export default VoteTemplate = connect(mapStateToProps, actions)(VoteTemplate)

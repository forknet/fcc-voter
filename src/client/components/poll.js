import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
import { Field,  reduxForm, formValueSelector } from 'redux-form';
import { Bar as BarChart } from 'react-chartjs';
import { Link } from 'react-router';
import { Row, Input } from 'react-materialize'
import * as actions from '../actions/';

class VoteTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {submitted: false}
    this.onSubmit = this.onSubmit.bind(this);
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
    const {voteData, userName, auth} = this.props
    if(userName === voteData.pollInfo.userName && auth === true){
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
  renderSelectionOptions(labelOption){
    return(
      <option key={labelOption} value={labelOption}>{labelOption}</option>
    )
  }
  onSubmit(props){
    this.setState( {submitted: true} )
    let _id = this.props.params.id;
    this.props.castVote(_id, props)
  }
  render() {
    let optionLabels, optionCount;
    // Issue on Safari Broswers here on Object.values...
    if(this.props.voteData.pollInfo.length !== 0){
      optionLabels = Object.keys(this.props.voteData.pollInfo.labelOptions);
      optionCount = Object.values(this.props.voteData.pollInfo.labelOptions);
    }
    const chartData = {
      labels: optionLabels,
      datasets: [
        {
          fillColor: this.props.voteData.colorSchemes,
          strokeColor: "rgba(55, 56, 53, 0.54)",
          highlightFill: "rgb(189, 57, 47)",
          highlightStroke: "rgb(176, 0, 52)",
          data: optionCount
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
    const { handleSubmit, pristine, reset, submitting, dirty} = this.props
    let asyncData = (optionLabels) ? true : false; //sets true when the fetched data is retrieved
    let graph = null
    if(asyncData){
      graph = <BarChart data={chartData} options={chartOptions} />
    }
    return (
      <main className="container">
        <div className="row">
          <div className="col center-align s12">
            <h3>{this.props.voteData.pollInfo.title}</h3>
            <h5>{this.props.voteData.pollInfo.description}</h5>
          </div>
        </div>
        {graph}
        <label>Cast Your Vote</label>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="row">
            <div className="col s6">
              <Field name="labelOption" component="select">
                <option></option>
                {(optionLabels || []).map(this.renderSelectionOptions)}
              </Field>
            </div>
            <div className="col input-field s12 extraOption">
              <button className="btn" type="submit" disabled={pristine || this.state.submitted}>Submit
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
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && (error && <div className="error">{error}</div>)}
    </div>
  </div>
)

const validate = values => {
  const errors = {};
  if (!values.labelOptions){
    errors.labelOptions = "Please choose something"
  }

  return errors;
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

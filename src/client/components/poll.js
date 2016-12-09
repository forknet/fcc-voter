import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
import { Field,  reduxForm } from 'redux-form';
const  { DOM: { input, select, textarea } } = React;
import { Bar as BarChart } from 'react-chartjs';
import { Link } from 'react-router';
import * as actions from '../actions/';

class VoteTemplate extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount(){
    this.props.fetchPoll(this.props.params.id)
  }
  onSubmit(props){
    this.props.castVote(props)
  }

  renderPollGraph(){
    const data = {
      labels: ["January", "February"],
      datasets: [
        {
          labels: ['01', '02', '03', '05', '06', '09'],
          fillColor: ["rgba(220,220,220,0.5)", "navy"],
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(7, 122, 102, 0.75)",
          highlightStroke: "rgb(176, 0, 52)",
          data: [1,2]
        }
      ]
    };
    const options = {
      barStrokeWidth : 3,
      scaleGridLineWidth : 4,
      scaleShowVerticalLines: false,
      responsive: true,
      scaleFontSize: 15
    };
    this.state = {
      chartData: data,
      chartOptions: options
    };
  }

  renderRadioButtons(pollLabels){
    let labelOption = Object.keys(pollLabels)[0]
    return(
      <p key={labelOption}>
        <Field name="category" component="input" type="radio" className="radio-button-css" value={labelOption}/>
        <label>{labelOption}</label>
      </p>
    )
  }
  render() {
    const { chartData, chartOptions } = this.state;
    const { handleSubmit, submitting } = this.props
    return (
      <main className="welcome container">
        <div className="row">
          <div className="col center-align s12">
            <h3>Title of the Poll</h3>
          </div>
        </div>
        <BarChart data={chartData} options={chartOptions}/>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="row">
            <div className="col s12">
              {(this.props.voteData.pollInfo.labelOptions || []).map(this.renderRadioButtons)}
            </div>
            <div className="col input-field s12">
              <button className="btn waves-effect waves-light" type="submit" disabled={submitting}>Submit
                <i className="fa fa-paper-plane-o"></i>
              </button>
              <Link to="/allposts" className="btn waves-effect waves-light cancel-btn">Cancel
                <i className="fa fa-times"></i>
              </Link>
            </div>
          </div>
        </form>
      </main>
    )
  }
}

function mapStateToProps(state){
  return {voteData: state.voteData};
}

VoteTemplate = reduxForm({
  form: 'CastVote'
})(VoteTemplate)

export default VoteTemplate = connect(mapStateToProps, actions)(VoteTemplate)

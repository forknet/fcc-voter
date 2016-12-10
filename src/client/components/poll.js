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
  componentWillMount(){
    this.props.fetchPoll(this.props.params.id)
  }
  onSubmit(props){
    this.props.castVote(props)
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
  // renderBarGraph(){
  //   if (!optionLabels){
  //     return <div>Loading</div>
  //   } else{
  //     return(
  //       <BarChart data={chartData} options={chartOptions}/>
  //     )
  //   }
  // }
  render() {
    let optionLabels, optionCount;
    if(this.props.voteData.pollInfo.length !== 0){
      optionLabels = this.props.voteData.pollInfo.labelOptions.reduce((init,accum) =>{
        return Object.keys(accum).concat(init)
      },[])

      optionCount = this.props.voteData.pollInfo.labelOptions.reduce((init,accum) =>{
        return Object.values(accum).concat(init)
      },[])
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
    const { handleSubmit, submitting } = this.props
    let kenzo = (optionLabels) ? true : false;
    let graph = null
    if(kenzo){
      optionLabels.reverse();
      graph = <BarChart data={chartData} options={chartOptions}/>

    }
    return (
      <main className="welcome container">
        <div className="row">
          <div className="col center-align s12">
            <h3>{this.props.voteData.pollInfo.title || ''}</h3>
          </div>
        </div>
        {graph}
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

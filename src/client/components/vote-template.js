import React, { Component } from 'react';
import Chart from 'chart.js';
import { Bar as BarChart } from 'react-chartjs';

export default class VoteTemplate extends Component {
  constructor() {
    super();
    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          labels: ['01', '02', '03', '05', '06', '09'],
          fillColor: ["rgba(220,220,220,0.5)", "navy", "red", "orange", "blue", "yellow"],
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(7, 122, 102, 0.75)",
          highlightStroke: "rgb(176, 0, 52)",
          data: [1,2,3,4,5,6]
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
  componentWillMount(){
  }
  render() {
    const { chartData, chartOptions } = this.state;
    return (
      <main className="welcome container">
        <div className="row">
          <div className="col center-align s12">
            <h3>Title of the Poll</h3>
          </div>
        </div>
        <BarChart data={chartData} options={chartOptions}/>
        <form action="#">
          <div className="row">
            <div className="input-field col s12">
              <p>
                <input name="group1" type="radio" id="test1" />
                <label htmlFor="test1">Red</label>
              </p>
              <p>
                <input name="group1" type="radio" id="test2" />
                <label htmlFor="test2">Yellow</label>
              </p>
              <p>
                <input className="with-gap" name="group1" type="radio" id="test3"  />
                <label htmlFor="test3">Green</label>
              </p>
            </div>
            <div className="input-field col s12 m6 l5 custom-option">
              <input id="custom-option" type="text" className="validate" />
              <label htmlFor="custom-option">Custom Option</label>
            </div>
            <div className="col s12">
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="fa fa-paper-plane-o"></i>
              </button>
            </div>
          </div>
        </form>
      </main>
    )
  }
}

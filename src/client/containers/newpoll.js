import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field,  reduxForm } from 'redux-form';
const  { DOM: { input, select, textarea } } = React;
import { Link } from 'react-router';
import * as actions from '../actions/';

class NewPoll extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(props){
    let formValues = { ...props, userName: this.props.userName }
    this.props.newPoll(formValues)
  }
  render(){
    const { handleSubmit, submitting } = this.props;

    return(
      <main className="container">
        <div className="row">
          <div className="col s12 form-title">
            <h3><i className="fa fa-file-text"></i> Add New Poll</h3>
          </div>
        </div>
        <div className="row">
          <form onSubmit={handleSubmit(this.onSubmit)} className="col s12 m10">
            <div className="row browser-default">
              <div className="input-field col s12">
                <Field name="title" label="Enter a Title" component={renderField} type="text"/>
              </div>
              <div className="input-field col s12">
                <Field name="description" label="Enter a Description of Your Poll" component={renderField} type="text"/>
              </div>
              <div className="input-field col s12">
                <Field name="labelOptions" label="Options (seperated by comma)" component={renderField} type="text"/>
              </div>
              <div className="col input-field s12">
                <button className="btn waves-effect waves-light" type="submit">Submit
                  <i className="fa fa-paper-plane-o"></i>
                </button>
                <Link to="/" className="btn waves-effect waves-light cancel-btn">Cancel
                  <i className="fa fa-times"></i>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    )
  }
}

const validate = values => {
  const errors = {};
  if (!values.title){
    errors.title = "Required Title"
  }

  if(!values.description){
    errors.description = "Don't forget to write something about your poll!"
  }

  if(!values.labelOptions){
    errors.labelOptions = "Don't forget what options you want for users to vote for!"
  }

  if(values.labelOptions && values.labelOptions.split(/[,]+/).length < 2){
    errors.labelOptions = "You need at least two options to make a poll!"
  }

  if(values.labelOptions && values.labelOptions.split(/[ ,]+/)[values.labelOptions.split(/[ ,]+/).length - 1] === ""){
    errors.labelOptions = "Incomplete Fill"
  }
  if(values.labelOptions && /[\.\?]/.test(values.labelOptions)){
    errors.labelOptions = "No . or . or ? is allowed"
  }

  return errors;
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

function mapStateToProps(state){
  return (
    { userName: state.auth.userName}
  )
}


NewPoll = reduxForm({
  form: 'NewPoll',
  validate
})(NewPoll)

export default NewPoll = connect(mapStateToProps, actions)(NewPoll)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field,  reduxForm } from 'redux-form';
const  { DOM: { input, select, textarea } } = React;
import { Link } from 'react-router';
import * as actions from '../../actions/';

class Signup extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(props){
    this.props.signupUser(props)
  }
  render(){
    const { handleSubmit, submitting } = this.props;
    return(
      <main className="login container">
        <div className="row">
          <div className="col s12 form-title">
            <h3><i className="fa fa-sign-in"></i> Sign-up </h3>
          </div>
        </div>
        <div className="row">
          <form onSubmit={handleSubmit(this.onSubmit)} className="col s12 m10">
            <div className="row">
              <div className="input-field col s12">
                <Field name="userName" label="Enter a Username" component={renderField} type="text"/>
              </div>
              <div className="input-field col s12">
                <Field name="email" label="Enter your Email" component={renderField} type="text"/>
              </div>
              <div className="input-field col s12">
                <Field name="password" label="Enter a Password" component={renderField} type="password"/>
              </div>
              <div className="input-field col s12">
                <Field name="passwordConfirm" label="Confirm Password" component={renderField} type="password"/>
              </div>
              <div className="col input-field s12">
                <button className="btn waves-effect waves-light" type="submit">Submit
                  <i className="fa fa-paper-plane-o"></i>
                </button>
                <Link to="/allposts" className="btn waves-effect waves-light cancel-btn">Cancel
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
  if (!values.userName){
    errors.userName = "Please enter a username"
  }

  if(!values.email){
    errors.email = "Please enter an email"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password){
    errors.password = "Please enter an password"
  }
  if (!values.passwordConfirm){
    errors.passwordConfirm = "Please confirm your password"
  }

  if (values.password !== values.passwordConfirm){
    errors.password = "Password must match!"
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

Signup = reduxForm({
  form: 'Signup',
  validate
})(Signup)

export default Signup = connect(null, actions)(Signup)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field,  reduxForm } from 'redux-form';
const  { DOM: { input, select, textarea } } = React;
import { Link } from 'react-router';
import * as actions from '../../actions/';

class Login extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(props){
    this.props.loginUser(props)
  }
  render(){
    const { handleSubmit, submitting } = this.props;

    return(
      <main className="login container">
        <div className="row">
          <div className="col s12 form-title">
            <h3><i className="fa fa-sign-in"></i> Login </h3>
          </div>
        </div>
        <div className="row">
          <form onSubmit={handleSubmit(this.onSubmit)} className="col s12 m10">
            <div className="row">
              <div className="input-field col s12">
                <Field name="email" label="Enter your Email" component={renderField} type="text"/>
              </div>
              <div className="input-field col s12">
                <Field name="password" label="Enter a Password" component={renderField} type="password"/>
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

  if(!values.email){
    errors.email = "Please enter an email"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password){
    errors.password = "Please enter an password"
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

Login = reduxForm({
  form: 'Login',
  validate
})(Login)

export default Login = connect(null, actions)(Login)

import React, { Component } from 'react';
import HeaderComponent from './header.jsx';
import './style.css';
import UserService from '../api/UserService.js';
import {Form, Formik, Field, ErrorMessage} from 'formik';



export default class RegisterComponent extends Component {
    constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
      this.handleSuccessRegister = this.handleSuccessRegister.bind(this)
      this.validate = this.validate.bind(this)

      this.state = {
        registerSuccessMessage : '',
      }
    }

    onSubmit(values) {
      console.log(values);
      UserService.register({
        email:values.email,
        username:values.username,
        city:values.city,
        state:values.state,
        country:values.country,
        profile:values.profile,
        password:values.password
      })
      .then(response => this.handleSuccessRegister(response))
    }

    validate(values) {
      let errors = {}
      if(!values.email) {
          errors.email = 'Enter an email'
      }
      if(!values.username) {
          errors.username = 'Enter a username'
      }
      if(!values.city) {
        errors.city = 'Enter a city'
      }
      if(!values.state) {
        errors.state = 'Enter a state'
      }
      if(!values.country) {
        errors.country = 'Enter a country'
      }
      if(!values.password) {
        errors.password = 'Enter a password'
      }

      return errors;
  }

    handleSuccessRegister(response) {
      this.setState({registerSuccessMessage: response.data})
    }

    render() {
      return (
        <div>
          <HeaderComponent></HeaderComponent>
          <div>Register</div>
          <Formik 
                initialValues={

                    {
                     
                    }
                }
                onSubmit={this.onSubmit} 
                validateOnChange={false}
                validateOnBlur={false}
                validate = {this.validate}
                enableReinitialize={true}
              >
                  {
                      (props) => (
                          <Form>
                  
                              <ErrorMessage name="email" component="div" className = "alert alert-warning"/>
                              <ErrorMessage name="username" component="div" className = "alert alert-warning"/>
                              <ErrorMessage name="password" component="div" className = "alert alert-warning"/>
                              <ErrorMessage name="city" component="div" className = "alert alert-warning"/>
                              <ErrorMessage name="state" component="div" className = "alert alert-warning"/>
                              <ErrorMessage name="country" component="div" className = "alert alert-warning"/>
                      
                              <fieldset className="form-group">
                                  <label> Email</label>
                                  <Field className="form-control" type="text" name="email"></Field>
                              </fieldset>

                              <fieldset className="form-group">
                                  <label> Username</label>
                                  <Field className="form-control" type="text" name="username"></Field>
                              </fieldset>

                              <fieldset className="form-group">
                                  <label> Password</label>
                                  <Field className="form-control" type="text" name="password"></Field>
                              </fieldset>

                              <fieldset className="form-group">
                                  <label> City</label>
                                  <Field className="form-control" type="text" name="city"></Field>
                              </fieldset>

                              <fieldset className="form-group">
                                  <label> State</label>
                                  <Field className="form-control" type="text" name="state"></Field>
                              </fieldset>

                              <fieldset className="form-group">
                                  <label> Country</label>
                                  <Field className="form-control" type="text" name="country"></Field>
                              </fieldset>

                              <fieldset className="form-group">
                                  <label> Profile</label>
                                  <Field className="form-control" type="text" name="profile"></Field>
                              </fieldset>

                              <button className="btn btn-success" type="submit">Register</button>
                          </Form>
                      )
                  }
              </Formik>
              {this.state.registerSuccessMessage}

      
  
          
    
          
        </div>
      );
    }
}

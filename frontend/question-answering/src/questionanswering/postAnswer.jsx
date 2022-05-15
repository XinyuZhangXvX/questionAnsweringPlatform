import React, { Component } from 'react';
import HeaderComponent from './header.jsx';
import UserService from '../api/UserService.js';
import { useParams } from "react-router-dom";
import moment from 'moment';
import {Form, Formik, Field, ErrorMessage} from 'formik';
import AuthenticationService from './AuthenticationService.js';
import { useNavigate } from "react-router-dom";
class CreatAnswerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
       abody:"",
       aposttime:moment(new Date()).format('YYYY-MM-DD'),
       qid:"",
       numlikes:0,
       email:"",
       qtitle:"",
       message:""
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }

  onSubmit(values) {
      console.log(values);
      UserService.createAnAnswer(values.email,{
          abody:values.abody,
          aposttime:values.aposttime,
          qid:values.qid,
          numlikes:values.numlikes,
          email:values.email,
          qtitle:values.qtitle
      }).then(
          response => this.setState({message:response.data})
      )
      

  }
  validate(values) {
      let errors = {}
      if(!values.abody) {
        errors.abody = 'Enter a answer body'
      }
      if(!moment(values.aposttime).isValid()) {
        errors.aposttime = 'Select a valid post time'
      }
      return errors;
  }

    render() {

      let qtitle = this.state.qtitle;
      let abody = this.state.abody;
      let qid = this.props.params.qid;
      let email = AuthenticationService.getLoggedInUser();
      let aposttime = this.state.aposttime;
      let numlikes = this.state.numlikes;
      return (
        <div>
          <HeaderComponent></HeaderComponent>
          <h1>Answer</h1>
          <div class="container">
              <Formik 
                initialValues={

                    {
                      abody:abody,
                      aposttime:aposttime,
                      qid:qid,
                      numlikes:numlikes,
                      email:email,
                      qtitle:qtitle
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
                  
                              <ErrorMessage name="abody" component="div" className = "alert alert-warning"/>
                              <ErrorMessage name="aposttime" component="div" className = "alert alert-warning"/>
                      
                              <fieldset className="form-group">
                                  <label>Answer Body</label>
                                  <Field className="form-control" type="text" name="abody"></Field>
                              </fieldset>

                              <fieldset className="form-group">
                                  <label>Post Date</label>
                                  <Field className="form-control" type="date" name="aposttime"></Field>
                              </fieldset>

                              <button className="btn btn-success" type="submit">submit</button>
                              
                          </Form>
                      )
                  }
              </Formik>
              {this.state.message}
          </div>
        </div>
      );
    }
}

export default CreatAnswerComponentWithNavigate;
function CreatAnswerComponentWithNavigate(props) {
    const navigate = useNavigate();
    const param = useParams();
    return <CreatAnswerComponent {...props} params={param} navigate={navigate} />
}
import React, { Component } from 'react';
import HeaderComponent from './header.jsx';
import moment from 'moment';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import AuthenticationService from './AuthenticationService.js';
import { useNavigate } from "react-router-dom";
import UserService from '../api/UserService.js';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

class CreatQuestionComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
       qtitle:"",
       qbody:"",
       topic:"",
       email:"",
       qposttime:moment(new Date()).format('YYYY-MM-DD'),
       message:""
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }


  onSubmit(values) {
      console.log(values);
      UserService.createAQuestion(values.email,{
          qtitle:values.qtitle,
          qbody:values.qbody,
          stid:values.topic,
          qposttime:values.qposttime,
          email:values.email
      }).then(
          response => this.setState({message:response.data})
      )
      
  }
  validate(values) {
      let errors = {}
      if(!values.qtitle) {
          errors.qtitle = 'Enter a question title'
      }
      if(!values.qbody) {
          errors.qbody = 'Enter a question body'
      }
      if(!values.topic) {
        errors.topic = 'Select a topic'
      }
      if(!moment(values.qposttime).isValid()) {
        errors.qposttime = 'Select a valid post time'
      }

      return errors;
  }

    render() {
      let qtitle = this.state.qtitle;
      let qbody = this.state.qbody;
      let topic = this.state.topic;
      let email = AuthenticationService.getLoggedInUser();
      let qposttime = this.state.qposttime;
      return (
        <div className="CreatQuestionComponent">
          <HeaderComponent></HeaderComponent>
          <Grid container justifyContent="center" spacing= {1} sx={{mt: 2, ml: 0}}>
            <Grid item>
              <Typography variant="h3" component="h3" sx={{color: '#607d8b'}}>
                Ask A Question
              </Typography>
            </Grid> 
          </Grid> 
          <div class="container">
              <Formik 
                initialValues={
                    {qtitle:qtitle,
                     qbody:qbody,
                     topic:topic,
                     qposttime:qposttime,
                     email:email}
                }
                onSubmit={this.onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                validate = {this.validate}
                enableReinitialize={true}
              >
                  {
                      (props) => (
                      <Grid container justifyContent="center" spacing= {1} sx={{mt: 2, mb: 20, minWidth:1200,  maxHeight: 800,minHeight: 200,  borderColor: '#e1f5fe'}}>
                        <Grid item xs={8}>
                          <Grid container justifyContent="center" spacing= {1} sx={{mt: 2, mb: 2}}>
                            <Grid item  xs={8}>
                            <Form style={{ height: '200px', width: '800px' }}>
                              <ErrorMessage name="qtitle" component="div" className = "alert alert-warning"/>
                              <ErrorMessage name="qbody" component="div" className = "alert alert-warning"/>
                              <ErrorMessage name="topic" component="div" className = "alert alert-warning"/>
                              <ErrorMessage name="qposttime" component="div" className = "alert alert-warning"/>

                              <fieldset className="form-group" >
                                  <label>Question Title</label>
                                  <Field className="form-control" type="text" name="qtitle" style={{ height: '50px', width: '800px' }}></Field>
                              </fieldset>
                            
                              <fieldset className="form-group">
                                  <label>Question Body</label>
                                  <Field className="form-control" type="text" name="qbody" style={{ height: '120px', width: '800px' }}></Field>
                              </fieldset>

                              <fieldset className="form-group" style={{ height: '30px', width: '810px' }}>
                                  <label>Topic</label>
                        

                                  <Field className="form-control" name="topic" as="select" style={{ height: '20px', width: '400px' }}>
                                      <option value="4">Computer Science, Programming</option>
                                      <option value="5">Computer Science, Databases</option>
                                      <option value="2">Computer Science, Other</option>
                                      <option value="6">Math, Linear algebra</option>
                                      <option value="1">Math, Other</option>
                                      <option value="8">Physics, Optics</option>
                                      <option value="7">Physics, Mechanics</option>
                                      <option value="3">Physics, Other</option>
                                  </Field>
                              </fieldset>

                              

                              <fieldset className="form-group">
                                  <label>Post Date</label>
                                  <Field className="form-control" type="date" name="qposttime" style={{ height: '20px', width: '805px' }}></Field>
                              </fieldset>

                              <Grid container justifyContent="center" spacing= {1} sx={{mt: 2, mb: 2}}>
                                <Grid item >
                                   <Button className="btn btn-success" type="submit"> submit</Button>
                                 </Grid>
                              </Grid>

                            </Form>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      )
                  }
              </Formik>
              {this.state.message}
          </div>
        </div>
      );
    }
}

export default CreatQuestionComponentWithNavigate;
function CreatQuestionComponentWithNavigate(props) {
    const navigate = useNavigate();
    return <CreatQuestionComponent {...props} navigate={navigate} />
}
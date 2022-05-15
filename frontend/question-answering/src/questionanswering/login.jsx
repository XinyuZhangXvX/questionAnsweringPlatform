import React, { Component } from 'react';
import { useNavigate, Link } from "react-router-dom";
import AuthenticationService from './AuthenticationService.js';
import HeaderComponent from './header.jsx';
import UserService from '../api/UserService.js';

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            hasLoginFailed: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    loginClicked() {

        let email = this.state.email
        let passwd = this.state.password
        UserService.authentication(email,passwd)
        .then(response => {
            if(response.data == true){
                console.log('true:'+response.data)
                AuthenticationService.registerSuccessfulLogin(this.state.email,this.state.password);
                this.props.navigate(`/initial/${this.state.email}`)
            }
            else{
                console.log('false:'+response.data)
                this.setState({hasLoginFailed: true})
            }

        }) 
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
      return (
        <div className="LoginComponent">
            <HeaderComponent></HeaderComponent>
            {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
            Email: <input type = "text" name = "email" value ={this.state.email} onChange={this.handleChange}/>
            <br></br>
            Password: <input type = "password" name = "password" value ={this.state.password} onChange={this.handleChange}/>
            <br></br>
            <button onClick={this.loginClicked}>Login</button>
            <br></br>
            <br></br>
            <Link to="/register">Register</Link>
        </div>
      );
    }
}



function LoginComponentWithNavigate(props) {
    const navigate = useNavigate();
    return <LoginComponent {...props} navigate={navigate} />
}
 
export default LoginComponentWithNavigate;
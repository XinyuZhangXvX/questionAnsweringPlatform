import React, { Component } from 'react';
import HeaderComponent from './header.jsx';

class LogoutComponent extends Component {
    render() {
        return (
            <>
                
                <div className="container">
                    <HeaderComponent></HeaderComponent>
                    <h1>You are logged out.</h1>
                        Thank You for Using Our Application.
                </div>
            </>
        )
    }
}

export default LogoutComponent
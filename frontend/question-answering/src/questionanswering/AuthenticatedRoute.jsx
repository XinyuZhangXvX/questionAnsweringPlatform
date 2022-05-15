import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthenticationService from "./AuthenticationService";
 
const AuthenticatedRoute = () => {
 
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return AuthenticationService.isUserLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
}
 
export default AuthenticatedRoute;
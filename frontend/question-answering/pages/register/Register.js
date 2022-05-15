import { Outlet, Link } from "react-router-dom";
const Register = () => {
return (
        <>
        <h1>Register</h1>
        <nav>
           <ul>
                <li>
                    <Link to="/dashboard">LogIn</Link>
                </li>
                <li>
                    <Link to="/">back</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
        )
    
};

export default Register;

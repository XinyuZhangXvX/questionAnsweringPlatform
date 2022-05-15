import { Outlet, Link } from "react-router-dom";

const LogIn = () => {
    return (
       <>
        <h1>LogIn</h1>
         <nav>
           <ul>
             <li>
               <Link to="/register">Register</Link>
             </li>
            <li>
               <Link to="/dashboard">LogIn</Link>
            </li>
           </ul>
         </nav>

         <Outlet />
       </>
     )
};

export default LogIn;

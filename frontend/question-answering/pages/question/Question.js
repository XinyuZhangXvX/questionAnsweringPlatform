import { Outlet, Link } from "react-router-dom";

const LogIn = () => {
    return (
       <>
        <h1>Ask Question</h1>
         <nav>
           <ul>
             <li>
               <Link to="/dashboard">Back</Link>
             </li>
           </ul>
         </nav>

         <Outlet />
       </>
     )
};

export default LogIn;

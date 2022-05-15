import { Outlet, Link } from "react-router-dom";

const InitialPage = () => {
    return (
       <>
        <h1>InitialPage</h1>
         <nav>
           <ul>
             <li>
               <Link to="question">Ask Question</Link>
             </li>
            <li>
                <h4>Posted Questions</h4>
            </li>
            <li>
                <h4>Posted Answers</h4>
            </li>
            <li>
                <Link to="/">Log Out</Link>
            </li>
           </ul>
         </nav>

         <Outlet />
       </>
     )
};

export default InitialPage;

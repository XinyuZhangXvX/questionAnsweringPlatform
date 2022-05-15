import { Outlet, Link } from "react-router-dom";

const Answer = () => {
    return (
       <>
        <h1>Answers</h1>
         <nav>
           <ul>
             <li>
                <Link to="/dashboard/question">Ask Question</Link>
             </li>
            <li>
               <Link to="/dashboard/searchresult">back to search Result</Link>
            </li>
           </ul>
         </nav>

         <Outlet />
       </>
     )
};

export default Answer;

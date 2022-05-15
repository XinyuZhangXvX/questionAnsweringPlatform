import { Outlet, Link } from "react-router-dom";

const SearchResult = () => {
    return (
       <>
        <h1>SearchResult</h1>
         <nav>
           <ul>
            <li>
                <Link to="/dashboard/question">Ask Question</Link>
            </li>
            <li>
               <Link to="/dashboard/answer">Searched Answer</Link>
            </li>
            <li>
               <Link to="/dashboard">back</Link>
            </li>
           </ul>
         </nav>

         <Outlet />
       </>
     )
};

export default SearchResult;

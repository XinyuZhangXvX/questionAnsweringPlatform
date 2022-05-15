import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
       <>
        <h1>Header</h1>
         <nav>
           <ul>
             <li>
               <Link to="profile">Profile</Link>
             </li>
            <li>
              <Link to="searchresult">Search</Link>
            </li>
           </ul>
         </nav>

         <Outlet />
       </>
     )
};

export default Header;

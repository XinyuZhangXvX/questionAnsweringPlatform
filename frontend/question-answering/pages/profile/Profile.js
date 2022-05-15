import { Outlet, Link } from "react-router-dom";

const Profile = () => {
    return (
       <>
        <h1>Profile</h1>
         <nav>
           <ul>
            <li>
              <Link to="/dashboard">back</Link>
            </li>
           </ul>
         </nav>

         <Outlet />
       </>
     )
};

export default Profile;

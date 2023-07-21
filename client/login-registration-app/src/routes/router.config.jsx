import { useRoutes } from "react-router-dom";
// importing pages
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/DashboardPage";
import Profile from "../pages/profile/Profile";
import EditProfile from "../pages/editProfile/EditProfile";

// creating a function for router configuration
const RouterConfig = () => {

    // return
    return(
        // using useRoutes dependency
        useRoutes(
            [
                {
                    path:'/',
                    element:<Home/>     
                },
                {
                    path:'/dashboard',
                    element:<Dashboard/>     
                },
                {
                    path:'/profile',
                    element:<Profile/>     
                },
                ,
                {
                    path:'/edit-profile',
                    element:<EditProfile/>     
                }
            ]
        )
    );

}

export default RouterConfig;
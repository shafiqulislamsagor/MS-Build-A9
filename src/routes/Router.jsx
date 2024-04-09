import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ProfileUpdate from "../pages/ProfileUpdate";
import Privet from "./Privet";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/profile',
                element:<Privet><Profile/></Privet>
            },
            {
                path:'/profileUpdate',
                element:<Privet><ProfileUpdate/></Privet>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    },
]);

export default router;
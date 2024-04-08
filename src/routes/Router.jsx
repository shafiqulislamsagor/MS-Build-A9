import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ProfileUpdate from "../pages/ProfileUpdate";


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
                element:<Profile/>
            },
            {
                path:'/profileUpdate',
                element:<ProfileUpdate/>
            }
        ]
    },
]);

export default router;
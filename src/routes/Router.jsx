import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ProfileUpdate from "../pages/ProfileUpdate";
import Privet from "./Privet";
import Login from "../pages/Login";
// import Register from "../pages/Register";
import RegisterPage from "../pages/RegisterPage";
import PrivetSignIn from "./PrivetSignIn";
import CardDetails from "../components/CardDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader: ()=> fetch('/CardData.json')
            },
            {
                path:'/card/:id',
                element:<CardDetails/>,
                loader: ()=> fetch('/CardData.json')
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
                element:<PrivetSignIn><Login/></PrivetSignIn>
            },
            {
                path:'/register',
                element:<PrivetSignIn><RegisterPage/></PrivetSignIn>
            },

        ]
    },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots";
// import Home from "../pages/Home";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Privet from "./Privet";
import Login from "../pages/Login";
// import Register from "../pages/Register";
import RegisterPage from "../pages/RegisterPage";
import PrivetSignIn from "./PrivetSignIn";
import CardDetails from "../components/CardDetails";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
import Update from "../pages/Update";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<HomePage/>,
                errorElement:<Error/>,
                loader: ()=> fetch('/CardData.json')
            },
            {
                path:'/card/:id',
                element:<Privet><CardDetails/></Privet>,
                errorElement:<Error/>,
                loader: ()=> fetch('/CardData.json')
            },
            {
                path:'/profile',
                errorElement:<Error/>,
                element:<Privet><Profile/></Privet>
            },
            {
                path:'/profileUpdate',
                errorElement:<Error/>,
                element:<Privet><Update/></Privet>
            },
            {
                path:'/About',
                errorElement:<Error/>,
                element:<Privet><About/></Privet>,
                loader: ()=> fetch('/Review.json')
            },
            {
                path:'/login',
                errorElement:<Error/>,
                element:<PrivetSignIn><Login/></PrivetSignIn>
            },
            {
                path:'/register',
                errorElement:<Error/>,
                element:<PrivetSignIn><RegisterPage/></PrivetSignIn>
            },

        ]
    },
]);

export default router;
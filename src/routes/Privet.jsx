import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { ContextRoutes } from '../context/ContextHooks';
import { Navigate,useLocation } from "react-router-dom";
const Privet = ({children}) => {
    const location = useLocation()
    // console.log(location);
    const {user} = useContext(ContextRoutes)
    // console.log(user);
    if(user){
        return children
    }
    return <Navigate to='/login' state={location.pathname} />
};


export default Privet;


Privet.propTypes = {
    children: PropTypes.node
}
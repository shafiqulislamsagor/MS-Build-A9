import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { ContextRoutes } from '../context/ContextHooks';
const PrivetSignIn = ({ children }) => {
    const { user } = useContext(ContextRoutes)
    // console.log(user);
    if (user) {
        return 
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetSignIn;

PrivetSignIn.propTypes = {
    children: PropTypes.node
}
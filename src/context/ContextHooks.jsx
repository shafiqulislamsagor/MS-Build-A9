import {  createContext } from "react";
import PropTypes from 'prop-types';

export const ContextRoutes = createContext(null)

const ContextHooks = ({children}) => {
    const contextValues = {}
    return (
        <ContextRoutes.Provider value={contextValues}>
            {children}
        </ContextRoutes.Provider>
    );
};

export default ContextHooks;
ContextHooks.propTypes = {
    children: PropTypes.node
}

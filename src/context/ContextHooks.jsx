import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import Auth from './../firebase/firebase.config';

export const ContextRoutes = createContext(null)

const ContextHooks = ({children}) => {
    const [user , setUser] = useState(null)

    // Email Create Users
    const registerHooks = (email,password) =>{
        return createUserWithEmailAndPassword(Auth,email,password)
    }

    // Google Create Users
    const googleHooks = () =>{
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(Auth,googleProvider)
    }


    const logoutHooks = () =>{
        return signOut(Auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(Auth,(user)=>{
            setUser(user)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const contextValues = {registerHooks,logoutHooks,user,googleHooks}
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

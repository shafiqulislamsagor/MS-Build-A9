import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Auth from './../firebase/firebase.config';

export const ContextRoutes = createContext(null)

const ContextHooks = ({ children }) => {
    const [user, setUser] = useState(null)

    // Email Create Users
    const registerHooks = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    // Update Profile Users
    const update = (name,photo) =>{
        return updateProfile(Auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // Log In Users
    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(Auth, email, password)
    }

    // Google Create Users
    const googleProvider = new GoogleAuthProvider()
    const googleHooks = () => {
        return signInWithPopup(Auth, googleProvider)
    }

    // GitHub Create Users
    const GitHubProvider = new GithubAuthProvider();
    const gitHubHooks = () => {
        return signInWithPopup(Auth, GitHubProvider)
    }


    const logoutHooks = () => {
        return signOut(Auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, (user) => {
            setUser(user)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const contextValues = { registerHooks, logoutHooks, user, googleHooks, gitHubHooks ,update,logIn}
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

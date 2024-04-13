import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { toast } from "react-toastify";
import Auth from "../../firebase.config";

export const ContextRoutes = createContext(null)

const ContextHooks = ({ children }) => {
    const [loading,setLoading] = useState(false)
    const [user, setUser] = useState(null)

    // Email Create Users
    const registerHooks = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    // from profile user update
    const update = (name,photo) =>{
        setLoading(false)
        return updateProfile(Auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // Update Profile Users
    const updateProfiles = (name, photo) => {
        setLoading(false);
        return updateProfile(Auth.currentUser, {
            displayName: name,
            photoURL: photo
        }).then(() => {
            setUser(Auth.currentUser);
            setLoading(true); 
            toast.success('Profile Update')
        }).catch(() => {
            toast.error('not changes')
        });
    }

    // Log In Users
    const logIn = (email,password) =>{
        setLoading(false)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    // Google Create Users
    const googleProvider = new GoogleAuthProvider()
    const googleHooks = () => {
        setLoading(false)
        return signInWithPopup(Auth, googleProvider)
    }

    // GitHub Create Users
    const GitHubProvider = new GithubAuthProvider();
    const gitHubHooks = () => {
        setLoading(false)
        return signInWithPopup(Auth, GitHubProvider)
    }


    const logoutHooks = () => {
        setLoading(false)
        return signOut(Auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, (user) => {
            setUser(user)
            setLoading(true)
        })
        return () => {
            unSubscribe()
        }
    }, [user])
    const contextValues = { registerHooks, logoutHooks, user, googleHooks, gitHubHooks ,update,logIn,updateProfiles,loading}
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

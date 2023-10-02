import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';



export const AuthContex=createContext(null)


const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

     const signinUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
     const unSubscribe =   onAuthStateChanged(auth,currentUser=>{
            console.log('current value of current user',currentUser);
            setuser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },
    [])

    const authInfo={user,createUser , signinUser, logOut , loading}
    console.log(logOut);
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;
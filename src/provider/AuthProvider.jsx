import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase_config";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [users , setUSers] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    // create user email account 
    const createUsers =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login email address 
    const loginEmail =(email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google sing in 
    const googleSing =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // sing out 
    const userSignOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,currentUser =>{
            setLoading(false)
            setUSers(currentUser)
            console.log('tui theke ja',currentUser)
        }) ;
        return ()=>{
            unSubscribe()
        }
            
      
    },[])
    const authInfo ={
        users,
        loading,
        setUSers,
        createUsers,
        loginEmail,
     googleSing ,
     userSignOut,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes ={
    children:PropTypes.node
}
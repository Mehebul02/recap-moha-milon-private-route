import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase_config";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [users , setUSers] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    // create user email account 
    const createUsers =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login email address 
    const loginEmail =(email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google sing in 
    const googleSing =()=>{
        return signInWithPopup(auth,googleProvider)
    }
    // sing out 
    const userSignOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,currentUser =>{
            setUSers(currentUser)
            console.log('tui theke ja',currentUser)
        }) ;
        return ()=>{
            unSubscribe()
        }
            
      
    },[])
    const authInfo ={
        users,
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
import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase_config";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [users , setUSers] = useState(null)
    // create user email account 
    const createUsers =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo ={
        users,
        createUsers,

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
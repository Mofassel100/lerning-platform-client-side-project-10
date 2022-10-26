import React, { createContext } from 'react';
import { useState } from 'react';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../Firebase.Config/Firebase.Config';

export  const AuthContext = createContext()
const githubProbider = new GithubAuthProvider();
const googlrProvider = new GoogleAuthProvider();
const auth = getAuth(app)
const UseContext = ({children}) => {

const [user,setUsers]= useState()
const [loader,setLoader]= useState(true);
// github added sig in 
const githuSignInAcco = ()=>{
    return signInWithPopup(auth,githubProbider);
}
// ----------------
// google sign in-
const googleSignInAccoun = ()=>{
    return signInWithPopup(auth,googlrProvider);
}
// --------------


// new user Create
const newUserCreate= (email,password)=>{
    return (email,password);
}




const allInfoData = {user,loader,setLoader,newUserCreate,githuSignInAcco,googleSignInAccoun}
    return (
        <div>
            <AuthContext.Provider value={allInfoData}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default UseContext;
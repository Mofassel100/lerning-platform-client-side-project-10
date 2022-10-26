import React, { createContext } from 'react';
import { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase.Config/Firebase.Config';
import { useEffect } from 'react';

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
// log in page 
const logInPage = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// log out ------
const logOotsPage = ()=>{

    return signOut(auth);
}


// ---------------------
// google sign in-
const googleSignInAccoun = ()=>{
    return signInWithPopup(auth,googlrProvider);
}
// --------------
const ProfileUpdates = (profile)=>{
    return updateProfile(auth.currentUser,profile)
}
// ----useEffect 
useEffect(

   ()=>{
const unsubsCriber = onAuthStateChanged(auth,currentUser=>{
    setUsers(currentUser);
   
    return ()=>unsubsCriber();
})
    
   },[] 
)
// -------------


// new user Create
const newUserCreate= (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}




const allInfoData = {user,loader,setLoader,newUserCreate,githuSignInAcco,googleSignInAccoun,newUserCreate,ProfileUpdates,logOotsPage,logInPage }
    return (
        <div>
            <AuthContext.Provider value={allInfoData}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default UseContext;
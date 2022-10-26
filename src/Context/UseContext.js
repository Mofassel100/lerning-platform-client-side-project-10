import React, { createContext } from 'react';
import { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase.Config/Firebase.Config';
import { useEffect } from 'react';

export  const AuthContext = createContext()
const githubProbider = new GithubAuthProvider();
const googlrProvider = new GoogleAuthProvider();

const auth = getAuth(app)


// -----------toggle------------------
const getTheme = () => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      // Default theme is taken as dark-theme
      localStorage.setItem("theme", "dark-theme");
      return "dark-theme";
    } else {
      return theme;
    }
  };
  


// -------------------------
const UseContext = ({children}) => {


    // ----toggle---
    const [theme, setTheme] = useState(getTheme);
    const toggleTheme=()=> {
        if (theme === "dark-theme") {
          setTheme("light-theme");
        } else {
          setTheme("dark-theme");
        }
      };
      useEffect(() => {
        const refreshTheme = () => {
          localStorage.setItem("theme", theme);
        };
        refreshTheme();
    }, [theme]);

    // -----------------

const [user,setUsers]= useState()
const [loader,setLoader]= useState(true);

// github added sig in 
const githuSignInAcco = ()=>{
    setLoader(true)
    return signInWithPopup(auth,githubProbider);
}
// ----------------


// new user Create
const newUserCreate= (email,password)=>{
    setLoader(true)
    
    return createUserWithEmailAndPassword(auth,email,password);
}
// log in page 
const logInPage = (email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// log out ------
const logOotsPage = ()=>{
    setLoader(true)

    return signOut(auth);
}


// ---------------------
// google sign in-
const googleSignInAccoun = ()=>{
    setLoader(true)
    return signInWithPopup(auth,googlrProvider);
}
// --------------
const ProfileUpdates = (profile)=>{
    setLoader(true)
    return updateProfile(auth.currentUser,profile)
}
// ----useEffect 
useEffect(

   ()=>{
const unsubsCriber = onAuthStateChanged(auth,currentUser=>{
    setUsers(currentUser);
    setLoader(false)
   
    return ()=>unsubsCriber();
})
    
   },[] 
)
// -------------






const allInfoData = {user,loader,setLoader,newUserCreate,githuSignInAcco,googleSignInAccoun,newUserCreate,ProfileUpdates,logOotsPage,logInPage,loader, theme,
    setTheme,
    toggleTheme, }
    return (
        <div>
            <AuthContext.Provider value={allInfoData}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default UseContext;
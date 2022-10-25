import React, { createContext } from 'react';
import { useState } from 'react';

const UseContext = ({children}) => {
    const AuthContext = createContext()

const [user,setUsers]= useState()
const [loader,setLoader]= useState(true);

const allInfoData = {user,loader,setLoader}
    return (
        <div>
            <AuthContext.Provider value={allInfoData}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default UseContext;
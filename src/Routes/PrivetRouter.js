import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';
import Spinner from 'react-bootstrap/Spinner';

const PrivetRouter = ({children}) => {
    const {user,loader}= useContext(AuthContext)
    const location =useLocation()
    if(loader){
        return  <Spinner animation="border" variant="success" />
    }
    if(user && user.uid){
        return children;

    }
    return <Navigate to='/login' state={{from:location}} replace />

};

export default PrivetRouter;
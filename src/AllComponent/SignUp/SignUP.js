import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';

const SignUP = () => {
    const {githuSignInAcco,googleSignInAccoun}= useContext(AuthContext)
    return (
        <div>
            <div className='w-75 mx-auto'>
            <h1 className='text-center mx-auto my-2'>Sign Up Now</h1>
            <div className='text-center bg bg-danger w-50 mx-auto py-2 rounded my-3'>
                <Link ><button onClick={googleSignInAccoun} className='px-5 py-2 rounded'>Sign up Google</button></Link>
            </div>
            <div className='text-center bg bg-danger w-50 mx-auto py-2 rounded my-3'>
                <Link ><button className='px-5 py-2 rounded' onClick={githuSignInAcco}>Sign up Github</button></Link>
            </div>
            <h1 className='text-center mx-auto my-2'>-------OR ----------</h1>
            <div className='text-center bg bg-danger w-50 mx-auto py-2 rounded my-3'> <FontAwesomeIcon icon="fa-brands fa-google" ></FontAwesomeIcon>
                <Link to='/register'><button className='px-5 py-2 rounded '><FontAwesomeIcon icon={faEnvelope} className='px-3'/> Sign up Email</button></Link>
            </div>
            </div>
            
           
        </div>
    );
};

export default SignUP;
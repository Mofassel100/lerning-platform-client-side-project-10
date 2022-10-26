
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';
import { FaEnvelope, FaGithub, FaGoogle, IconName } from "react-icons/fa";


const SignUP = () => {
    const {githuSignInAcco,googleSignInAccoun}= useContext(AuthContext)
    return (
        <div>
            <div className='w-75 mx-auto'>
            <h1 className='text-center mx-auto my-2'> Sign Up Now</h1>

            <div className='text-center bg bg-danger w-50 mx-auto py-2 rounded my-3'>
                <Link ><button onClick={googleSignInAccoun} className='px-5 py-2 rounded'> <FaGoogle></FaGoogle> Sign up Google</button></Link>
            </div>
            <div className='text-center bg bg-danger w-50 mx-auto py-2 rounded my-3'>
                <Link ><button className='px-5 py-2 rounded' onClick={githuSignInAcco}><FaGithub></FaGithub> Sign up Github</button></Link>
            </div>
            <h1 className='text-center mx-auto my-2'>-------OR ----------</h1>
            <div className='text-center bg bg-danger w-50 mx-auto py-2 rounded my-3'> 
                <Link to='/register'><button className='px-5 py-2 rounded '><FaEnvelope></FaEnvelope> Sign up Email</button></Link>
                <br/>
                <br/>
                <p>Alredy Register ? Please <Link to='/login'>Login</Link></p>
            </div>
            </div>
            
           
        </div>
    );
};

export default SignUP;
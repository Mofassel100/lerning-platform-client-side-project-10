import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';

const Login = () => {
    const {logInPage}= useContext(AuthContext)
    const [error,setError]= useState('')

    const signInSumited = (event)=>{
event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInPage(email,password)
        .then(result=>
        {
            const user = result.user;
            toast.success('login sucess full')
            setError('')
        })
        .catch(error=>
            toast.error(error.message))
            setError(error.message)
    }
    return (<div className=''>
 <Form onSubmit={signInSumited} className='bg-aqua  mx-auto w-75 container rounded  text-bold' >
    <h1 className='text-center my-4'>Log In</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' className='w-75'   placeholder="Enter email" />
    
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        className='w-75' name='password'required type="password" placeholder="Password" />
    </Form.Group>
   
   <div className='text-center'>
    <p style={{color:'red'}}>{error}</p>
   <Button variant="primary"  type="submit">
        Log In
    </Button>
   </div>
   <p className='my-3 mb-4'> if new customer ? Please <Link to='/register'>Register </Link></p>
   
    </Form>
    </div>
   
    );
};

export default Login;
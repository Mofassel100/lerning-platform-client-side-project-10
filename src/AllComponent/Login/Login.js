import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (<div className=''>
 <Form className='bg-aqua  mx-auto w-75 container rounded  text-bold' >
    <h1 className='text-center my-4'>Log In</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  className='w-75'   placeholder="Enter email" />
    
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        className='w-75' type="password" placeholder="Password" />
    </Form.Group>
   
   <div className='text-center'>
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
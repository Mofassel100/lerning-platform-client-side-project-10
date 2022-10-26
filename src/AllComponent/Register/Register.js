import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast, { ToastBar } from 'react-hot-toast';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../Context/UseContext';

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { newUserCreate, ProfileUpdates } = useContext(AuthContext);
    const location= useLocation()
    const from = location.state?.from?.pathname || '/';
    // new register
    const newUserRegister = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        newUserCreate(email, password).then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Regiter succssfull')
            profileupdates(name, photoURL)
            navigate(from,{replace:true})
            setError('')
        })
            .catch(error => {
                toast.error(error.message)
                setError(error.message)
            })
    }
    // profile update 
    const profileupdates = (name, photoURL) => {

        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        ProfileUpdates(profile)
            .then(resule => {
                toast.success('profile update complet')
                const user = resule.user;
                console.log(user);
            })
            .catch(error => {
                toast.error(error.message)

            })


    }
    return (
        <div>
            <Form onSubmit={newUserRegister} className='bg-aqua  mx-auto w-75 container rounded  text-bold' >
                <h1 className='text-center my-4'>Register</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" name='name' className='w-75' placeholder="Enter Full Name" />


                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control type="text" name='photoURL' className='w-75' placeholder="Enter Photo URL" />


                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" className='w-75' name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className='w-75' type="password"
                        name='password'
                        placeholder="Password" required />
                </Form.Group>

                <div className='text-center'>
                    <p style={{ color: 'red' }}>{error}</p>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </div>
                <p className='my-3 mb-4'> Alredy registe? Please  <Link to='/login'>Login </Link></p>


            </Form>
        </div>
    );
};

export default Register;
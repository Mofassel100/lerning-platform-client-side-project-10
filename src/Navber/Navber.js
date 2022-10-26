import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';

const Navber = () => {
    const {user}= useContext(AuthContext)
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Image className='rounded-circle mx-2'style={{width:'40px'}} src='https://cdn-icons-png.flaticon.com/512/1688/1688451.png'></Image>
          <Navbar.Brand style={{color:'',font:'bold'}} className='text-primary'>Learn Skills</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link ><Link to='/course' className='text-2xl'>Courses</Link></Nav.Link>
              {/* <div>
                    
                </div> */}
             
              <NavDropdown title="Thems" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">light</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
              Derk
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
        
                </NavDropdown.Item>
              </NavDropdown>
         
            </Nav>
            <Form className="d-flex me-2">
               
                {
                    user? <>
                    <Nav.Link > <Link>{user?.user?.disPlayName}</Link></Nav.Link>
                    <Nav.Link > <Link><Image src={user?.photoURL}></Image></Link></Nav.Link>
                    <Nav.Link >  <Link to='logOut'>Log Out</Link></Nav.Link>
                    </>: <>
                    <Nav>
                      <Nav.Link ><Link className='me-2' to='/login'>Log In</Link></Nav.Link>
                      <Nav.Link >    <Link to='/signUp' className='ms-2'>Sign Up</Link> </Nav.Link>
                      <Nav.Link ><Link to='/blog'>Blog</Link></Nav.Link>
                      </Nav>
                   </>
                    
                  
                }

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navber;
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
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
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex me-2">
                <div>
                    <Link to='/course'>Course</Link>
                </div>
                {
                    user? <>
                    <Link>{user?.user?.disPlayName}</Link>
                    <Link>{user?.user?.photoURL}</Link>
                    <Link to='logOut'>Log Out</Link>
                    </>: <>
                    <Link className='me-2' to='/login'>Log In</Link>
                    <Link to='/register' className='ms-2'>Register</Link></>
                }

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navber;
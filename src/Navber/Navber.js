import React, { useContext } from 'react';
import { Image, Tooltip } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';
import ReactTooltip from 'react-tooltip';

const Navber = () => {
    const {user,logOotsPage}= useContext(AuthContext)
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
                    user?.uid? <>
                     <p className='mx-2'>{}</p>
                     
                     <p data-tip={user?.displayName}>  <Image className='mx-3' roundedCircle style={{width:'40px'}} src={user?.photoURL}/></p>
                     <ReactTooltip />
                   
                 
                    <button onClick={logOotsPage}>Log Out</button>
                    </>: <>
                    <Nav>
                      <Nav.Link ><Link className='me-2' to='/login'>Log In</Link></Nav.Link>
                      <Nav.Link >    <Link to='/signUp' className='mx-2'>Sign Up</Link> </Nav.Link>
                    
                      </Nav>
                   </>
                    
                  
                }
                  <Nav.Link ><Link to='/faq' className='mx-2 '>FAQ</Link></Nav.Link>
                  <Nav.Link ><Link to='/blog' className='mx-2 '>Blog</Link></Nav.Link>

            </Form>
          </Navbar.Collapse>
         
        </Container>
      </Navbar>
    );
};

export default Navber;
import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';
import ReactTooltip from 'react-tooltip';
import { ToogleContext } from '../App';
const Navber = () => {
  const { user, logOotsPage } = useContext(AuthContext)
  const { toggleTheme } = useContext(ToogleContext)

  return (


    <div>
    




 <Navbar bg="light" expand="lg">
      <Container fluid>
        <Image className='rounded-circle mx-2' style={{ width: '40px' }} src='https://cdn-icons-png.flaticon.com/512/1688/1688451.png'></Image>
        <Navbar.Brand style={{ color: '', font: 'bold' }} className='text-primary'>Learn Skills</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"

            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/course' className='text-2xl'>Courses</Link></Nav.Link>
            <div className="header-toggle-buttons">

            </div>
            <Button onClick={toggleTheme} > Thems Mode</Button>
          </Nav>
          <Form className="d-flex me-2">

            {
              user?.uid ? <>
                <p className='mx-2'>{ }</p>

                <p data-tip={user?.displayName}>  <Image className='mx-3' roundedCircle style={{ width: '40px' }} src={user?.photoURL} /></p>
                <ReactTooltip />
                <button onClick={logOotsPage}>Log Out</button>
              </> : <>
                <Nav.Link ><Link className='me-2' to='/login'>Log In</Link></Nav.Link>
                <Nav.Link >    <Link to='/signUp' className='mx-2'>Sign Up</Link> </Nav.Link>
                <Nav>

                </Nav>
              </>


            }
            <Nav.Link ><Link to='/faq' className='px-4 pt-3 '>FAQ</Link></Nav.Link>
            <Nav.Link ><Link to='/blog' className='mx-2 '>Blog</Link></Nav.Link>

          </Form>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </div>
   
  );
};

export default Navber;
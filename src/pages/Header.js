import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom'
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        console.log(user);
      };

    return (

      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
  <Container>
  <Navbar.Brand href="#home">India Furniture Limited</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/inquiry">Inquiry</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
     
    </Nav>
    <Nav>
    {
          user?
          <button className='btn btn-warning rounded-3 text-bold' onClick={logout}>Log out</button> :
           <Nav.Link className='text-bold text-white' as={Link} to="/login">Login</Nav.Link> 
      }
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


  //       <>
  // <Navbar bg="success" variant="dark">
  //   <Container>
  //   <Navbar.Brand className='text-warning text-bold' href="#home">India Furniture Limited</Navbar.Brand>
  //   <Nav className="me-auto">
  //     <Nav.Link  className='text-bold text-white' as={Link} to="/">Home</Nav.Link>
  //     <Nav.Link  className='text-bold text-white' as={Link} to="/inquiry">Inquiry</Nav.Link>
  //     {
  //         user?
  //         <button className='btn btn-warning rounded-3 text-bold' onClick={logout}>Log out</button> :
  //          <Nav.Link className='text-bold text-white' as={Link} to="/login">Login</Nav.Link> 
  //     }
     
    
  //   </Nav>
  //   </Container>
  // </Navbar>
  

    );
};

export default Header;
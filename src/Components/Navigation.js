import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  
  return (
    <div>
        <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand><NavLink to={'/'} style={{'textDecoration': 'none', 'color': 'white'}}>Expense Manager 💵</NavLink></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             <NavLink className={'mx-3 text-light'} to={'/signup'}>Sign Up</NavLink> 
             <NavLink className={'mx-3 text-light'} to={'/login'}>Log In</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation
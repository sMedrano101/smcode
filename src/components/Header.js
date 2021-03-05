import React from 'react'
import "../Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar, NavDropdown, Nav, Form, FormControl,Button} from 'react-bootstrap';

function Header() {
    return (


        <div>


            <header className="App-header">
           
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">WEB DESIGN HOUSTON</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">What We Do</Nav.Link>
      <Nav.Link href="#pricing">Our Work</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>



       
      </header>
        </div> 
    )
}

export default Header

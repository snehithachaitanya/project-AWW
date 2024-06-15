import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About Us</Nav.Link>
          <NavDropdown title="Resources" id="navbarDropdown">
            <NavDropdown.Item href="#">Vaccination Schedules</NavDropdown.Item>
            <NavDropdown.Item href="#">Resources Center</NavDropdown.Item>
            <NavDropdown.Divider />
            
          </NavDropdown>
          <Nav.Link href="#">Help Desk</Nav.Link>
          <Nav.Link href="#">AWWLogin</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;

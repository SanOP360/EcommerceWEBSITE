// Header.js
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";


const Header = (props) => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          GENERIC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#store" className="text-light">
              Store
            </Nav.Link>
            <Nav.Link href="#about" className="text-light">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Button onClick={props.onShowCart}className="text-light">Cart</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
};

export default Header;

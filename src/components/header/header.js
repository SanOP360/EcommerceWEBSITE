import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import CartContext from "../store/CartContext";
import './header.css';

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const totalQuantity = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
            <Button onClick={props.onShowCart} className="text-light">
              <div className="CartBadge">
                <span className="CartName">Cart</span>
                <span className="badgeQuan">{totalQuantity}</span>
              </div>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/Logo_white.png"

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="bg-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" className="w-50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/" className="text-menu me-2 text-white">
                Create Event
              </Nav.Link>
              <Nav.Link href="/events" className="text-menu me-2 text-white">
                Discover
              </Nav.Link>
              <Nav.Link href="/events" className="text-menu me-2 text-white">
                Schedule
              </Nav.Link>
              <Nav.Link href="/events" className="text-menu me-2 text-white">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
};

export default Menu;

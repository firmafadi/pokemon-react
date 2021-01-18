import React from 'react';
import { Navbar, Nav, Form,Button, FormControl} from 'react-bootstrap';

function Header() {
    return (
        <Navbar  fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Pokemon</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link> */}
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">
                        <Button variant="outline-info">My Pokemon</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default Header;
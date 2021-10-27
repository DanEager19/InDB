import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar expand="lg" id="header">
            <Navbar.Brand href="#home"><img alt="Logo" id="logo" src="/images/logo.png"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navbar">
                <Nav className="mr-auto">
                    <Link to="/" className="text_remove" >
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Link>
                    <Link to="/list" className="text_remove" >
                        <Nav.Link href="#list">List</Nav.Link>
                    </Link>
                    <Link to="/login" className="text_remove">                    
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Link>
                    <Link to="add_entry" className="text_remove" >
                        <Nav.Link href="#add_entry">Add Entry</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
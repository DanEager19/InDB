import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar expand="lg" id="header">
            <Navbar.Brand href="#home">
                <img alt="Logo" id="logo" src="/images/logo.png"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navbar">
                <Nav className="mr-auto">
                    <Link to="/" className="text_remove p-2">
                        <Nav.Link className="nav_word" href="#home">Home</Nav.Link>
                    </Link>
                    <Link to="/list" className="text_remove p-2">
                        <Nav.Link className="nav_word" href="#list">List</Nav.Link>
                    </Link>
                    <Link to="/login" className="text_remove p-2">                    
                        <Nav.Link className="nav_word" href="#login">Login</Nav.Link>
                    </Link>
                    <Link to="addEntry" className="text_remove p-2" >
                        <Nav.Link className="nav_word" href="#create">Create Entry</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
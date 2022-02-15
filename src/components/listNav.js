import React from "react"
import {Navbar, Nav} from "react-bootstrap"

function ListNav() {
    return (
        <div className="container">
            <Navbar className="list_header row">
                <Nav className="col p-2 mx-3 nav_word">Title:</Nav>
                <Nav className="col p-2 mx-3 nav_word">Score:</Nav>
                <Nav className="col p-2 mx-3 nav_word">Status:</Nav>
            </Navbar>
        </div>
    );
}
export default ListNav;
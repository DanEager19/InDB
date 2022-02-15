
import {Navbar, Nav} from "react-bootstrap"
import React from "react";
import { APIConnection } from "../functions/apiConnection";

function ListEntry() {
    const json = APIConnection(5000, 'userDB')
    return (
        <div className="container">
             {
                json.map((item) => (
                    <Navbar className="list_entry row" key={item.id}>
                        <Nav className="col p-2 mx-3">{item.entry}</Nav>
                        <Nav className="col p-2 mx-3">{item.score}</Nav>
                        <Nav className="col p-2 mx-3">{item.status}</Nav>
                    </Navbar>
                ))}
        </div>
    );
}
export default ListEntry;
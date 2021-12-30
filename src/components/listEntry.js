
import {Navbar, Nav} from "react-bootstrap"
import React, { useEffect, useState } from "react";

function ListEntry() {
    const [json, setJson] = useState([]);
    const getJSON = async () => {
        const response = await fetch('http://localhost:5001/userDB')
        const data = await response.json();
        setJson(data);
    };

    useEffect(() => {
       getJSON();
    }, []);
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
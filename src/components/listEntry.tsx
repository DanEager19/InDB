import * as React from "react"
import {Navbar, Nav} from "react-bootstrap"

class Game {
    title: string; 
    score: number; 
    status: string;
    constructor(title: string, score: number, status: string) {
        this.title = title;
        this.score = score;
        this.status = status;
    }
}

let Hades = new Game("Hades", 9, "Completed")

function ListEntry() {
    return (
        <div className="container">
            <Navbar className="list_entry row">
                <Nav className="col p-2 mx-3">{Hades.title}</Nav>
                <Nav className="col p-2 mx-3">{Hades.score}</Nav>
                <Nav className="col p-2 mx-3">{Hades.status}</Nav>
            </Navbar>
        </div>
    );
}
export default ListEntry;
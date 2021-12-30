import React from "react";
import { Link } from "react-router-dom";
import { APIConnection } from "../functions/apiConnection";

export default function GenerateAllGames() {
    const json = APIConnection(5000, 'games');
    return (
        <div className="flexWrap">
            {
                json.map((item) => (
                    <div className="flexCol7" key={item.id}>
                        <Link to={'/info/' + item.title} >
                            <img id="cover" src={`../images/${item.img}`}/>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}